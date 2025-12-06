import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg-white text-[#32353B] py-[60px]">
      <div className="mx-auto max-w-7xl w-full px-4">
        <p className="text-xl md:text-2xl font-medium mb-1 text-[#666]">
          Building relationships, not just sales
        </p>
        <p className="text-2xl md:text-4xl font-normal mb-11">
          Why Choose InvestoXpert?
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-[42px] py-[32px] bg-[#F4F5FAB2] rounded-2xl">
            <img
              src="/percentage-icon.png"
              alt="Expertise Icon"
              className="mb-6"
            />
            <p className="mb-6 mt-3 text-xl md:text-2xl font-semibold">
              9+ Years of Industry Experience
            </p>
            <p className="text-[#32353BB2] text-sm md:text-base">
              We have over nine years of proven expertise in connecting builders
              with buyers, creating smooth and successful transactions.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="p-[42px] py-[32px] bg-[#F4F5FAB2] rounded-2xl">
              <span className="text-[#0095DA] inline-flex items-center gap-2 bg-[#0095DA33] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="">
                  <img src="/blue-star.png" alt="Star Icon" />
                </span>{" "}
                VISIONARY
              </span>
              <p className="text-[#32353B] text-xl md:text-2xl font-bold">
                1,600+{" "}
                <span className="text-sm md:text-base font-normal">
                  Projects Listed
                </span>
              </p>
            </div>
            <div className="p-[42px] py-[32px] bg-[#F4F5FAB2] rounded-2xl">
              <span className="text-[#0095DA] inline-flex items-center gap-2 bg-[#0095DA33] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="">
                  <img src="/blue-star.png" alt="Star Icon" />
                </span>{" "}
                VISIONARY
              </span>
              <p className="text-[#32353B] text-xl md:text-2xl font-bold">
                2,000+{" "}
                <span className="text-sm md:text-base font-normal">
                  {" "}
                  Repeat Buyers
                </span>
              </p>
            </div>
          </div>
          <div className="p-[42px] py-[32px] bg-[#F4F5FAB2] rounded-2xl">
            <img
              src="/percentage-icon.png"
              alt="Expertise Icon"
              className="mb-6"
            />
            <p className="mb-6 mt-3 text-xl md:text-2xl font-semibold">
              10,000+ Happy Families
            </p>
            <p className="text-[#32353BB2] text-sm md:text-base">
              Home buyers are at the heart of everything we do. We take pride in
              the success of over 40 builders who have trusted us to sell their
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
