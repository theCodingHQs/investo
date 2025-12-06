import { Search } from "lucide-react";
import React from "react";

const CareersHero = () => {
  return (
    <div
      className="w-full min-h-screen py-16 md:p-0 md:h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/career-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl">
        <div>
          <h2 className="text-4xl md:text-[54px] font-medium">
            Ready for Your Next Career Adventure?
          </h2>
          <p className="text-xl w-full text-center md:text-2xl font-light max-w-4xl mx-auto mt-2 md:mt-0">
            Whether you’re looking to switch roles, take on new challenges, or
            grow in your career, we’ve got the perfect opportunity waiting for
            you.
            <br />
          </p>
        </div>
        <p className="text-xl md:text-2xl my-11">
          Explore your next step with us.
        </p>
        {/* <div className="w-1/2 bg-white mb"></div> */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 items-center w-[90%] max-w-3xl border border-gray-300 rounded-lg mx-auto overflow-hidden bg-white shadow-sm p-2 md:p-6 py-2">
          {/* Search Icon */}
          <div className="pl-4 text-gray-500">
            <Search size={20} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search role"
            className="flex-1 px-3 py-3 text-gray-700 focus:outline-none"
          />

          {/* Search Button */}
          <button className="bg-[#0095DA] w-full md:w-auto text-white px-6 py-2.5 font-medium rounded-full hover:bg-[#0085c4] transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
