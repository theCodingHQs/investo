"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
  onFilterChange: (filters: any) => void;
  viewType: string;
  setViewType: (view: string) => void;
}

export default function SearchBar({
  onSearch,
  onFilterChange,
  viewType,
  setViewType,
}: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    buy: "",
    propertyType: "",
    bhk: "",
    excludeNewLaunches: false,
    virtualTours: false,
  });

  const handleFilterChange = (key: string, value: any) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="w-full bg-blue-50 p-4 rounded-xl text-sm text-gray-500">
      
      {/* TOP ROW */}
      <div className="flex flex-wrap items-center gap-3">

        {/* Search Input */}
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Properties"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full outline-none py-2 text-sm text-gray-500 placeholder-gray-500"
          />
          <img src="" alt="" className="bg-[#0095DA] rounded-full w-9 h-8 border-none"/>
        </div>

        {/* Price Dropdown */}
        <select
          className="bg-white border border-gray-300 px-3 py-2 rounded-sm text-sm text-gray-500"
          onChange={(e) => handleFilterChange("price", e.target.value)}
        >
          <option value="">Price</option>
          <option value="0-50">₹0 - ₹50L</option>
          <option value="50-100">₹50L - ₹1Cr</option>
          <option value="100-200">₹1Cr - ₹2Cr</option>
        </select>

        {/* Buy / Rent */}
        <select
          className="bg-white border border-gray-300 px-3 py-2 rounded-sm text-sm text-gray-500"
          onChange={(e) => handleFilterChange("buy", e.target.value)}
        >
          <option value="">Buy</option>
          <option value="rent">Rent</option>
          <option value="sell">Sell</option>
        </select>

        {/* Property Type */}
        <select
          className="bg-white border border-gray-300 px-3 py-2 rounded-sm text-sm text-gray-500"
          onChange={(e) => handleFilterChange("propertyType", e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
        </select>

        {/* BHK */}
        <select
          className="bg-white border border-gray-300 px-3 py-2 rounded-sm text-sm text-gray-500"
          onChange={(e) => handleFilterChange("bhk", e.target.value)}
        >
          <option value="">BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
        </select>

        {/* Filters Button */}
        <button className="border border-blue-400 text-blue-600 px-4 py-2 rounded-sm text-sm">
          Apply
        </button>
      </div>

      {/* CHECKBOXES */}
      <div className="flex gap-6 mt-3 text-sm text-gray-500">
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            onChange={(e) =>
              handleFilterChange("excludeNewLaunches", e.target.checked)
            }
          />
          Exclude New Launches
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            onChange={(e) =>
              handleFilterChange("virtualTours", e.target.checked)
            }
          />
          Virtual Tours Only
        </label>
      </div>

      {/* GRID / LIST SWITCHER */}
      <div className="flex justify-end mt-3 gap-3">
        <button
          onClick={() => setViewType("grid")}
          className={`px-2 py-1 rounded text-sm ${
            viewType === "grid" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          Grid
        </button>

        <button
          onClick={() => setViewType("list")}
          className={`px-2 py-1 rounded text-sm ${
            viewType === "list" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          List
        </button>
      </div>
    </div>
  );
}
