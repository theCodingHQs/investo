import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PropertyCard from "./PropertyCard";
import { properties } from "./data/properties";

const PropertiesList = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filters, setFilters] = useState({});
  const [viewType, setViewType] = useState("grid");

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Bar */}
      <SearchBar
        onSearch={setSearchKey}
        onFilterChange={setFilters}
        viewType={viewType}
        setViewType={setViewType}
      />

      {/* No Results */}
      {filteredProperties.length === 0 ? (
        <div className="text-center h-full text-gray-600 text-sm mt-10">
          No results found
        </div>
      ) : (
        <div
          className={
            viewType === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5"
              : "flex flex-col gap-4 mt-5"
          }
        >
          {filteredProperties.map((item) => (
            <PropertyCard
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              priceRange={item.priceRange}
              units={item.units}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesList;
