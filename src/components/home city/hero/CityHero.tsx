import PropertySearch from "@/components/home/hero/PropertySearch";
import React from "react";

const CityHero = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center pt-32"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white px-4 max-w-7xl text-center">
        <p className="text-[54px] font-medium">
          😄 Ghar ho toh, 🏙️ Delhi mein,
          <br /> Because the 🌟 best starts here!
        </p>

        <PropertySearch />
      </div>
    </div>
  );
};

export default CityHero;
