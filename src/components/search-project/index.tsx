"use client";
import React, { useState } from "react";
import { properties } from "./data/properties";
// import SearchBar from "./SearchBar";
import { Location, SearchResult } from "./map/types";
import locationsData from "./data/locations.json";
import SearchBar from "./map/search-bar";
import Map from "./map";

const SearchProject = () => {
  const [filters, setFilters] = useState({
    location: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
  });
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const locations = locationsData as Location[];

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const filteredResults = properties.filter((item) => {
    if (
      appliedFilters.location &&
      !item.location
        .toLowerCase()
        .includes(appliedFilters.location.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex">
      <div className="min-w-[40%] max-h-screen sticky top-[10vh] left-0">
        <Map locations={locations} searchResult={searchResult} />
      </div>
      <div className="w-full min-h-screen bg-gray-50 p-5 lg:p-10">
        {/* FILTER SECTION */}
        <div className="w-full bg-white p-5 rounded-xl shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Location Filter */}
            <SearchBar onSearchResult={setSearchResult} />
          </div>
        </div>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>

                <p className="text-sm text-gray-500 mt-1">{item.location}</p>

                <p className="text-md font-semibold mt-2">{item.priceRange}</p>

                {/* Units Section */}
                <div className="mt-3">
                  {item.units.map((unit, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm mt-1"
                    >
                      <span>
                        {unit.unit} ({unit.size} sq.ft)
                      </span>
                      <span className="font-semibold">{unit.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No properties found matching the applied filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchProject;
