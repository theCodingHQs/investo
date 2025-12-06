import React from "react";
interface WeAreProps {
  titleFirstLatter: string;
  title: string;
  desc: string;
}
const WeAre = ({ titleFirstLatter, title, desc }: WeAreProps) => {
  return (
    <section className="bg-[#0095DA]/10 py-[60px] md:py-[75px]">
      <div className="mx-auto max-w-4xl w-full px-4">
        {/* Header: stacks on mobile, two-column on md+ (left label + right content) */}
        <div className="flex flex-col justify-between items-start">
          {/* Right content */}
          <div className="w-full">
            <p className="mb-4 font-medium text-[36px] text-center leading-snug">
              <span className="text-[#FF3768]">{titleFirstLatter}</span> {title}
            </p>

            <p className="text-base text-gray-700 leading-relaxed md:leading-relaxed">
              {desc}
            </p>
          </div>
        </div>

        {/* Cards: grid-1 on mobile, 3 columns on md+ */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="p-6 md:p-8 bg-white rounded-3xl flex flex-col gap-4">
            <div>
              <img
                className="w-10 md:w-12 mb-3 md:mb-4"
                src="/icons/home.png"
                alt="home icon"
              />
              <p className="text-[36px] font-semibold mb-1">1600+</p>
              <p className="text-sm md:text-base">Projects Listed</p>
            </div>
            <p className="text-base font-light text-gray-600 max-w-full">
              Trusted by buyers and developers alike — we simplify property
              selection, negotiation, and purchase decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 md:p-8 bg-white rounded-3xl flex flex-col gap-4">
            <div>
              <img
                className="w-10 md:w-12 mb-3 md:mb-4"
                src="/icons/sms.png"
                alt="sms icon"
              />
              <p className="text-[36px] font-semibold mb-1">1000+</p>
              <p className="text-sm md:text-base">Repeat Customers</p>
            </div>
            <p className="text-base font-light text-gray-600 max-w-full">
              Repeat customers choose us time and again, building long-term
              relationships based on trust and exceptional service
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 md:p-8 bg-white rounded-3xl flex flex-col gap-4">
            <div>
              <img
                className="w-10 md:w-12 mb-3 md:mb-4"
                src="/icons/shirt.png"
                alt="shirt icon"
              />
              <p className="text-[36px] font-semibold mb-1">350+</p>
              <p className="text-sm md:text-base">Real Estate Experts</p>
            </div>
            <p className="text-base font-light text-gray-600 max-w-full">
              Our dedicated team of real estate experts is here to understand
              your needs and offer personalized solutions every step of the way
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
