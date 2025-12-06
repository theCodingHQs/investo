"use client";
import React, { useRef, useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react"; // ✅ Lucide icons

type FaqItem = {
  id: number;
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    id: 1,
    q: "How do I know if a property is a good investment?",
    a: "A good investment depends on location, developer track record, potential for appreciation, rental demand, and infrastructure development. We assess these factors to help you make an informed decision.",
  },
  {
    id: 2,
    q: "What are the additional costs involved in buying a property?",
    a: "In addition to the property price, you may incur costs such as registration fees, stamp duty, maintenance charges, and legal fees. We ensure you’re fully aware of all costs upfront, so there are no surprises.",
  },
  {
    id: 3,
    q: "Can I trust the developer's project timeline and quality?",
    a: "We perform due diligence on developers, review past delivery records, and inspect project quality to give you confidence in timelines and workmanship.",
  },
  {
    id: 4,
    q: "How do I apply for a home loan?",
    a: "We guide you through loan selection, documentation, and the application process with our lending partners to ensure smooth approval.",
  },
  {
    id: 5,
    q: "Will I get support after the property is purchased?",
    a: "Yes — we provide post-sale support, coordinating with the developer for handover, snag rectification, and after-sales queries.",
  },
];

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<number[]>([2]); // open 2nd item by default

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-white text-[#222]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left section - title */}
          <div className="flex flex-col justify-start">
            <p className="text-[36px] font-medium text-[#666] mb-4 uppercase tracking-wide">
              FAQs
            </p>
            <h2 className="text-[54px] leading-tight font-light text-[#222]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right section - accordions */}
          <div>
            <div className="space-y-6">
              {FAQS.map((item) => (
                <AccordionRow
                  key={item.id}
                  item={item}
                  open={openIds.includes(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | null>(open ? null : 0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      if (open) {
        const h = el.scrollHeight;
        setHeight(h);
        const t = setTimeout(() => setHeight(null), 300);
        return () => clearTimeout(t);
      } else {
        const h = el.scrollHeight;
        setHeight(h);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight(0);
          });
        });
      }
    };

    measure();

    const ro = new ResizeObserver(() => {
      if (open) {
        setHeight(el.scrollHeight);
        const t = setTimeout(() => setHeight(null), 300);
        return () => clearTimeout(t);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <div className="border-b border-gray-200 pb-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-${item.id}`}
          className="text-left flex-1"
        >
          <h3
            className={`text-[18px] font-medium text-[#222] transition-colors duration-300 ${
              open ? "text-[#000]" : "text-[#333]"
            }`}
          >
            {item.q}
          </h3>
        </button>

        <button
          onClick={onToggle}
          aria-label={open ? "Collapse" : "Expand"}
          className="ml-2 flex-shrink-0 w-10 h-10 rounded-md bg-[#32353B] text-white flex items-center justify-center transition-all duration-300"
        >
          {open ? (
            <Minus size={18} strokeWidth={2.5} />
          ) : (
            <Plus size={18} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Smooth animated content */}
      <div
        id={`faq-${item.id}`}
        ref={contentRef}
        className="overflow-hidden transition-[height,opacity] duration-300 ease-in-out"
        style={{
          height: height === null ? "auto" : `${height}px`,
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pt-3 text-[#666] text-[16px] font-light leading-relaxed">
          {item.a}
        </div>
      </div>
    </div>
  );
}
