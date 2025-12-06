"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // App Router
import Axios from "axios";

type ResultItem = {
  label: string; // 'project' | 'resale' | 'rental' | 'location' | 'builder' | 'specification'
  slug: string;
  // ...other fields from backend
};

export function usePropertySearch(props: {
  searchApi: string;
  isRental?: boolean;
  cityProp?: string;
  page?: string; // 'home' etc
  localities?: any[];
  setLocalities?: (l: any[]) => void;
  setCity?: (c: string) => void;
}) {
  const router = useRouter();
  const {
    searchApi,
    isRental = false,
    cityProp = "",
    page,
    localities = [],
    setLocalities,
    setCity,
  } = props;

  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [livingType, setLivingType] = useState<"residential" | "commercial">(
    "residential"
  );
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState<ResultItem[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  // debounce + abort
  const debounceRef = useRef<number | null>(null);
  const abortCtrlRef = useRef<AbortController | null>(null);

  // city logic
  let city = cityProp;
  if (page === "home") city = "india";

  const fetchSuggestions = useCallback(
    async (term: string) => {
      if (!term || term.length <= 1) {
        setSearchedData([]);
        setIsFetching(false);
        return;
      }

      // cancel previous
      if (abortCtrlRef.current) abortCtrlRef.current.abort();
      abortCtrlRef.current = new AbortController();
      const signal = abortCtrlRef.current.signal;

      setIsFetching(true);
      try {
        let endpoint = `${searchApi}${
          city !== "india" ? `city=${city}&` : ""
        }term=${encodeURIComponent(term)}&residency_type=${livingType}`;

        if (isRental) {
          endpoint = `${searchApi}${
            city !== "india" ? `city=${city}&` : ""
          }term=${encodeURIComponent(
            term
          )}&type=rental&residency_type=${livingType}`;
        }

        const res = await Axios.get(endpoint, { signal }); // axios supports AbortController in recent versions
        const data = res.data ?? [];
        setSelectedItem((index) => (index === -1 ? -1 : 0));
        setSearchedData(Array.isArray(data) ? data.slice(0, 6) : []);
      } catch (err: any) {
        if (
          err?.name === "CanceledError" ||
          err?.message?.includes("canceled")
        ) {
          // request was aborted — ignore
        } else {
          console.error("Search failed", err);
        }
        setSearchedData([]);
      } finally {
        setIsFetching(false);
      }
    },
    [searchApi, city, livingType, isRental]
  );

  // called on input change
  const onChange = (value: string) => {
    setSearchInput(value);
    setIsFetching(value.length !== 0);

    // debounce
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  // keyboard handling
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedItem((idx) =>
        Math.min(idx + 1, Math.max(searchedData.length - 1, 0))
      );
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedItem((idx) => Math.max(0, idx - 1));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const item = searchedData[selectedItem];
      if (!item) return;
      // reset UI
      setSelectedItem(-1);
      setSearchedData([]);
      setSearchInput("");
      if (searchInputRef.current) searchInputRef.current.blur();
      // navigation
      navigateToItem(item);
    }
  };

  // hover helper
  function selectItemOnHover(index: number) {
    return () => setSelectedItem(index);
  }

  // navigation logic copied and adapted
  function navigateToItem(item: ResultItem) {
    const isResidential = livingType === "residential";
    if (!item) return;

    switch (item.label) {
      case "project":
        router.push(`/project/${item.slug}`);
        return;
      case "resale":
        router.push(`/resale/${item.slug}`);
        return;
      case "rental":
        router.push(`/rental/${item.slug}`);
        return;
      case "location":
      case "specification": {
        if (isResidential) {
          if (isRental) router.push(`/rental-property-in-${item.slug}`);
          else router.push(`/property-in-${item.slug}`);
        } else {
          if (isRental)
            router.push(`/commercial-rental-property-in-${item.slug}`);
          else router.push(`/commercial-property-in-${item.slug}`);
        }
        return;
      }
      case "builder": {
        if (isResidential) {
          if (isRental) router.push(`${item.slug}?scope=property&type=rental`);
          else router.push(`${item.slug}`);
        } else {
          if (isRental) router.push(`${item.slug}?scope=property&type=rental`);
          else router.push(`${item.slug}?residency_type=commercial`);
        }
        return;
      }
      default:
        return;
    }
  }

  // localities handlers adapted
  const handlelocalities = (item: any, type: "add" | "remove") => {
    let newlocalities = [...localities];
    if (type === "add") {
      if (item.label === "location" && localities.length === 0) {
        if (isRental) router.push(`/resale-property-in-${item.slug}`);
        else router.push(`/property-in-${item.slug}`);
      }
    } else {
      // remove by index
      newlocalities = newlocalities.filter((elem, i) => i !== item);
      setLocalities?.(newlocalities);
      router.push(`/property-in-${city}`);
    }
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      if (abortCtrlRef.current) abortCtrlRef.current.abort();
    };
  }, []);

  return {
    // state
    searchInput,
    searchedData,
    isFetching,
    selectedItem,
    livingType,
    // refs & setters
    searchInputRef,
    setLivingType,
    setSelectedItem,
    // actions
    onChange,
    onKeyDown,
    selectItemOnHover,
    navigateToItem,
    handlelocalities,
    setSearchInput,
  };
}
