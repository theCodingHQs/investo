"use client";
import React, { useState } from "react";
export default function BlogTabSection() {
  const tabs = [
    "Market Trends",
    "Investment Tips",
    "Buying & Selling",
    "Company News",
  ];
  const data = [
    {
      imgPath: "/blog-sec1.png",
      title: "How to Choose the Right Property Investment",
      desc: "Learn the key steps to make informed and profitable real estate investments",
    },
    {
      imgPath: "/blog-sec2.png",
      title: "5 Mistakes Every New Investor Should Avoid",
      desc: "Avoid common pitfalls and maximize your property investment strategy",
    },
  ];
  const data2 = [
    {
      imgPath: "/blog-sec3.png",
      title: "How to Choose the Right Property Investment",
      desc: "Learn the key steps to make informed and profitable real estate investments",
    },
    {
      imgPath: "/blog-sec4.png",
      title: "5 Mistakes Every New Investor Should Avoid",
      desc: "Avoid common pitfalls and maximize your property investment strategy",
    },
  ];
  const data3 = [
    {
      imgPath: "/blog-sec5.png",
      title: "How to Choose the Right Property Investment",
      desc: "Learn the key steps to make informed and profitable real estate investments",
    },
    {
      imgPath: "/blog-sec6.png",
      title: "5 Mistakes Every New Investor Should Avoid",
      desc: "Avoid common pitfalls and maximize your property investment strategy",
    },
  ];

  const [active, setActive] = useState(1); // default active index: 1 -> "Investment Tips"

  return (
    <section className="py-[60px]">
      <div className="mx-auto max-w-4xl w-full px-4">
        <div className="w-full relative">
          <div
            role="tablist"
            aria-label="Blog sections"
            className="flex items-center justify-center gap-6"
          >
            {tabs.map((t, i) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight")
                    setActive((s) => Math.min(s + 1, tabs.length - 1));
                  if (e.key === "ArrowLeft")
                    setActive((s) => Math.max(s - 1, 0));
                }}
                className={`relative px-6 py-4 text-xl font-medium focus:outline-none transition-colors duration-150 ${
                  active === i ? "text-[#0095DA]" : ""
                }`}
              >
                {t}
                {active === i && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[3px] rounded-full bg-[#0095DA]"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[#32353B33]" />
        </div>
        <div className="w-full mx-auto mt-10 flex flex-col gap-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.map((item, i) => (
              <div
                key={i}
                className="w-full border border-[#32353B4D] rounded-lg overflow-hidden"
              >
                <img
                  src={item?.imgPath}
                  className="w-full aspect-video object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-2xl font-medium">{item.title}</p>
                  <p className="mt-3 text-base mb-5">{item.desc}</p>
                  <p className="text-[#0095DA] text-base font-medium">
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black w-full aspect-[1120/400]"></div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {data2?.map((item, i) => (
              <div
                key={i}
                className="w-full border border-[#32353B4D] rounded-lg overflow-hidden"
              >
                <img
                  src={item?.imgPath}
                  className="w-full aspect-video object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-2xl font-medium">{item.title}</p>
                  <p className="mt-3 text-base mb-5">{item.desc}</p>
                  <p className="text-[#0095DA] text-base font-medium">
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black w-full aspect-[1120/400]"></div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {data3?.map((item, i) => (
              <div
                key={i}
                className="w-full border border-[#32353B4D] rounded-lg overflow-hidden"
              >
                <img
                  src={item?.imgPath}
                  className="w-full aspect-video object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-2xl font-medium">{item.title}</p>
                  <p className="mt-3 text-base mb-5">{item.desc}</p>
                  <p className="text-[#0095DA] text-base font-medium">
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
