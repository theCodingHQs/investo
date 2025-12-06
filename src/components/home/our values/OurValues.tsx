import React from "react";

const OurValues = () => {
  return (
    <section className="py-[80px] md:py-[75px] mx-auto max-w-4xl w-full text-center px-4">
      {/* Heading */}
      <p className="text-[36px] font-medium mb-2">Our Values</p>

      <div className="mt-10 md:mt-11 space-y-8 md:space-y-0">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-8">
          <div className="px-6 md:px-8 py-8 md:py-10 border border-[#32353B]/40 w-full md:w-fit rounded-2xl max-w-[480px] mx-auto">
            <img
              src="/face/ov1.png"
              alt="face img"
              className="w-full mb-6 md:mb-9"
            />
            <p className="text-[24px] font-medium mb-2 md:mb-3">
              Trust & Reliability
            </p>
            <p className="text-base text-left text-[#1c1c1c]/90 leading-relaxed">
              We’re not just about finding you a home—we’re about building
              trust. Every property we recommend is verified, transparent, and
              ready for you to move in with peace of mind
            </p>
          </div>

          <div className="px-6 md:px-8 py-8 md:py-10 border border-[#32353B]/40 w-full md:w-fit rounded-2xl max-w-[480px] mx-auto">
            <img
              src="/face/ov2.png"
              alt="face img"
              className="w-full mb-6 md:mb-9"
            />
            <p className="text-[24px] font-medium mb-2 md:mb-3">
              Expert Guidance
            </p>
            <p className="text-base text-left text-[#1c1c1c]/90 leading-relaxed">
              Buying a home is a big decision. That’s why our experts are here
              to help you make the right choice, with honest advice and support
              at every step. You’re never alone in this journey
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-0 md:mt-[42px]">
          <div className="px-6 md:px-8 py-8 md:py-10 border border-[#32353B]/40 w-full md:w-fit rounded-2xl max-w-[480px] mx-auto">
            <img
              src="/face/ov3.png"
              alt="face img"
              className="w-full mb-6 md:mb-9"
            />
            <p className="text-[24px] font-medium mb-2 md:mb-3">
              Seamless Experience
            </p>
            <p className="text-base text-left text-[#1c1c1c]/90 leading-relaxed">
              From your first search to getting the keys, we make it easy. Think
              of us as your guide, handling the details so you can focus on what
              matters: finding the perfect home for you
            </p>
          </div>

          <div className="px-6 md:px-8 py-8 md:py-10 border border-[#32353B]/40 w-full md:w-fit rounded-2xl max-w-[480px] mx-auto">
            <img
              src="/face/ov4.png"
              alt="face img"
              className="w-full mb-6 md:mb-9"
            />
            <p className="text-[24px] font-medium mb-2 md:mb-3">
              Personalized Solutions
            </p>
            <p className="text-base text-left text-[#1c1c1c]/90 leading-relaxed">
              Your needs are unique, and we respect that. Our recommendations
              are tailored to fit your life, whether you're buying your first
              home or investing in your future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
