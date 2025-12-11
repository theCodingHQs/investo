import React from "react";

interface Landmark {
  name: string;
  distance: string;
}

interface ConnectivityCardProps {
  icon: React.ReactNode;
  title: string;
  items: Landmark[];
  moreCount?: number;
}

const ConnectivityCard = ({ icon, title, items, moreCount }: ConnectivityCardProps) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <div className="text-red-500 text-xl">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      {/* Items */}
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-gray-700 text-sm">
            ✔ {item.name} <span className="font-semibold">({item.distance})</span>
          </li>
        ))}
      </ul>

      {/* + More */}
      {moreCount && (
        <button className="text-blue-600 text-sm mt-2 font-medium">+ {moreCount} more</button>
      )}
    </div>
  );
};

export default ConnectivityCard;
