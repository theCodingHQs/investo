import { Search } from "lucide-react";
import React from "react";

const BlogsHero = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center text-center text-white py-[100px] px-6"
      style={{
        backgroundImage: "url('/blogs-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full text-start">
        <div className="rounded-full bg-[#FFFFFF33] backdrop-blur-lg py-2 px-2.5 w-fit">
          🔑 KNOWLEGE BASE
        </div>
        <h1 className="text-4xl font-medium my-8">
          Transform Your Real Estate Knowledge with InvestoXpert ✨
        </h1>
        <p className="text-lg font-light">
          Explore the world of real estate through in-depth articles, industry
          trends, property tips, and success stories. Whether you're a
          homebuyer, investor, or real estate professional, our blog is designed
          to help you navigate the market confidently
        </p>
        <div className="mt-14 flex items-center w-full max-w-3xl rounded-lg mr-auto overflow-hidden bg-[#FFFFFF33] backdrop-blur-lg shadow-sm py-2 px-3">
          {/* Search Icon */}
          <div className="pl-4 text-white">
            <Search size={32} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search Blog"
            className="flex-1 px-3 py-3 text-base text-white focus:outline-none"
          />

          {/* Search Button */}
          <button className="bg-[#0095DA] text-base text-white px-4 py-1.5 font-medium rounded-full hover:bg-[#0085c4] transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
