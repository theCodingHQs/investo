import React from "react";

const AboutUsHero = () => {
  return (
    <div
      className="h-full md:h-screen w-full flex items-center justify-center py-32 md:pb-0"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white px-4 max-w-7xl text-center">
        <p className="text-[28px] md:text-[54px] md:font-medium leading-tight">
          Transforming Real Estate Investments,
          <br />
          One Opportunity at a Time
        </p>
        <p className="text-base mb-6 mt-6">
          We are dedicated to delivering top-notch real estate consulting
          services.
          <br /> Our focus is on trust, transparency, and quality, ensuring that
          your investments grow with the market.
        </p>
        <button className="py-3 px-5 bg-[#0095DA] mx-auto rounded-full text-sm md:text-base font-bold">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default AboutUsHero;
