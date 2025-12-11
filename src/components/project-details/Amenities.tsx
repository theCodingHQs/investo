"use client";

import React from "react";
import AmenityCategory from "./AmenityCategory";
import { amenitiesData } from "./data/amenitiesData";

const Amenities = () => {
  return (
    <div className="w-full bg-[#e6f3f7] py-10 px-4 lg:px-10">
      <h2 className="text-3xl font-bold">Amenities</h2>
      <p className="text-gray-600 mb-6">26 floor plans available</p>

      {/* Categories */}
      {amenitiesData.map((category, i) => (
        <AmenityCategory
          key={i}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
};

export default Amenities;
