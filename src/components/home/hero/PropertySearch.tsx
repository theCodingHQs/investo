"use client";
import React, { useState } from "react";

export default function PropertySearch() {
  const [tab, setTab] = useState<"buy" | "rent">("buy");
  const [type, setType] = useState("Residential");
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex justify-center items-center py-12 text-left">
      <div className="w-full max-w-7xl relative">
        {/* --------------------
            DESKTOP: unchanged layout (md+)
            -------------------- */}
        <div className="hidden md:block">
          {/* Tabs (overlapping the card) */}
          <div className="w-fit">
            <div className="flex rounded-xl rounded-b-none overflow-hidden border border-white/30 shadow-sm">
              <button
                onClick={() => setTab("buy")}
                className={`px-14 cursor-pointer py-3 font-medium transition-all duration-200 ${
                  tab === "buy"
                    ? "bg-white/50 text-white backdrop-blur-sm border-b-4 border-[#FF3768]"
                    : "bg-white/20 text-white/80"
                }`}
                aria-pressed={tab === "buy"}
              >
                Buy
              </button>

              <button
                onClick={() => setTab("rent")}
                className={`px-14 cursor-pointer py-3 font-medium transition-all duration-200 ${
                  tab === "rent"
                    ? "bg-white/50 text-white backdrop-blur-sm border-b-4 border-[#FF3768]"
                    : "bg-white/20 text-white/80"
                }`}
                aria-pressed={tab === "rent"}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-xl rounded-tl-none shadow-xl px-8 py-4">
            <div className="flex items-center gap-6">
              {/* Left: Type field */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-500 mb-1">Type</label>
                <div className="flex items-center gap-4">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent font-semibold text-gray-800 focus:outline-none"
                    aria-label="Property type"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 border-l border-gray-200" />

              {/* Middle: Search field */}
              <div className="flex-1 min-w-[360px]">
                <label className="block text-sm text-gray-500 mb-1">
                  Where
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 flex-1 bg-transparent">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search locality/landmark"
                      className="w-full text-black placeholder-gray-400 focus:outline-none"
                      aria-label="Search locality or landmark"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 border-l border-gray-200" />

              {/* Right: CTA */}
              <div className="flex items-center justify-end min-w-[220px]">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md
                             bg-[#009ad6] hover:bg-[#0087c2] transition-colors duration-150"
                >
                  Browse Properties
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------
            MOBILE: new stacked view (mobile-only)
            -------------------- */}
        <div className="md:hidden">
          {/* Tabs (pill) */}
          <div className="flex justify-center">
            <div className="rounded-full bg-white/10 px-1 py-1 inline-flex gap-1 items-center">
              <button
                onClick={() => setTab("buy")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  tab === "buy"
                    ? "bg-[#00aef0] text-white"
                    : "text-white/90 bg-transparent"
                }`}
                aria-pressed={tab === "buy"}
              >
                Buy
              </button>
              <button
                onClick={() => setTab("rent")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  tab === "rent"
                    ? "bg-[#00aef0] text-white"
                    : "text-white/90 bg-transparent"
                }`}
                aria-pressed={tab === "rent"}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Stacked card container */}
          <div className="px-2">
            <div className="px-4 py-6">
              {/* Type — rounded full select */}
              <div className="mb-4">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full text-sm font-semibold rounded-full px-4 py-3 bg-white/10 text-white focus:outline-none"
                  aria-label="Property type"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                </select>
              </div>

              {/* Where — rounded search input */}
              <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-2">
                  Where
                </label>
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 border border-gray-200 shadow-sm">
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search locality/landmark"
                    className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
                    aria-label="Search locality or landmark"
                  />
                </div>
              </div>

              {/* CTA — full width rounded */}
              <div className="pt-2">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center gap-3 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md
                             bg-[#00aef0] hover:bg-[#0090c9] transition-colors duration-150"
                >
                  Browse Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
