import React from "react";
import AmenityCard from "./AmenityCard";

interface CategoryProps {
  title: string;
  items: { icon: React.ReactNode; label: string }[];
}

const AmenityCategory = ({ title, items }: CategoryProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-600 mb-3">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((amenity, index) => (
          <AmenityCard key={index} icon={amenity.icon} label={amenity.label} />
        ))}
      </div>
    </div>
  );
};

export default AmenityCategory;
