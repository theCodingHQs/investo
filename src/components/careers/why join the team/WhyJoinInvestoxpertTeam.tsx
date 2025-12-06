import React from "react";

const WhyJoinInvestoxpertTeam = () => {
  return (
    <section className="py-[40px] md:py-[75px]">
      <div className="mx-auto max-w-4xl w-full px-4">
        <div className="flex gap-3 mx-auto justify-center w-fit bg-[#FFD74733] rounded-full p-2">
          <img
            src="/yellow-star.png"
            alt="yellow-star"
            className="w-6 md:w-8 h-6 md:h-8"
          />
          <p className="text-base md:text-xl font-medium text-[#CF7617] text-center">
            We're a team of passionate innovators
          </p>
        </div>
        <p className="mt-3 mb-10 md:mb-16 text-2xl md:text-4xl text-center">
          Why Join the Investoxpert Team?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#32353B] px-[36px] py-10 overflow-hidden rounded-lg flex flex-col gap-5 relative">
            <div className="w-[200px] aspect-square bg-[#FFFFFF1A] absolute -top-[25%] -right-[20%] rounded-full"></div>
            <img
              src="/icons/yellow-star.png"
              alt="yellow star icon"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p className="text-xl md:text-2xl font-medium text-white">
              Work with Visionaries
            </p>
            <p className="text-sm md:text-base text-[#FFFFFFB2]">
              We’re revolutionizing the way people buy homes. Join a team that
              is leading change in the real estate industry and making a real
              impact on people's lives.
            </p>
          </div>

          <div className="bg-[#32353B] px-[36px] py-10 overflow-hidden rounded-lg flex flex-col gap-5 relative">
            <div className="w-[200px] aspect-square bg-[#FFFFFF1A] absolute -top-[25%] -right-[20%] rounded-full"></div>
            <img
              src="/icons/paint.png"
              alt="paint icon"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p className=" text-xl md:text-2xl font-medium text-white">
              Creative Freedom
            </p>
            <p className="text-sm md:text-base text-[#FFFFFFB2]">
              Bring your creative vision to life. We encourage new ideas,
              fostering a culture where innovation is celebrated, and creativity
              thrives
            </p>
          </div>
          <div className="bg-[#32353B] px-[36px] py-10 overflow-hidden rounded-lg flex flex-col gap-5 col-span-full relative">
            <div className="w-[200px] aspect-square bg-[#FFFFFF1A] absolute -top-[25%] -right-[8%] rounded-full"></div>
            <img
              src="/icons/leaf.png"
              alt="leaf icon"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p className="text-xl md:text-2xl font-medium text-white">
              Flexibility & Balance
            </p>
            <p className="text-sm md:text-base text-[#FFFFFFB2]">
              We believe in empowering our team to work smart and live well. At
              Investoxpert, we understand that life outside of work is just as
              important as your professional growth. With flexible schedules,
              remote working options, and a supportive environment, you can
              achieve both personal and career goals without compromising on
              either. We trust our team to deliver great results while
              maintaining a balanced, fulfilling lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinInvestoxpertTeam;
