"use client";

import React from "react";
import { connectivityData } from "./data/connectivityData";
import ConnectivityCard from "./ConnectivityCard";

const Connectivity = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Connectivity</h2>
      <p className="text-gray-600 mt-1">Location Advantage</p>

      {/* Map */}
      <div className="mt-4">
        <img
          src="/connectivity.png"
          className="w-full h-[260px] object-cover rounded-lg"
          alt="map"
        />
      </div>

      {/* Landmark heading */}
      <h3 className="text-xl font-semibold mt-6 mb-4">
        Landmarks near Pride Purple Park Connect
      </h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {connectivityData.map((card, index) => (
          <ConnectivityCard
            key={index}
            icon={card.icon}
            title={card.title}
            items={card.items}
            moreCount={card.moreCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Connectivity;
