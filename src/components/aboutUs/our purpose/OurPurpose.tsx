import React from "react";

type Item = { id: string; title: string; desc: string };

const items: Item[] = [
  {
    id: "01",
    title: "Expert Real Estate Consulting",
    desc: "Providing expert guidance through every step of the real estate investment process, ensuring that you make informed, profitable choices",
  },
  {
    id: "02",
    title: "Tailored Investment Strategies",
    desc: "Customizing investment plans to suit each client's unique financial goals and risk appetite, helping you achieve the best returns",
  },
  {
    id: "03",
    title: "Client-Centric Approach",
    desc: "Fostering long-term relationships built on transparency, trust, and delivering value for each client",
  },
];

const OurPurpose: React.FC = () => {
  return (
    <section className="py-16 md:py-[75px]">
      <div className="mx-auto px-6 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">
          {/* Left column */}
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-start gap-3">
            <p className="text-[36px] font-medium uppercase text-[#32353B]">
              Our Purpose
            </p>
          </div>

          {/* Right column */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            {items.map((it, idx) => (
              <div key={it.id} className="flex flex-col gap-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-[18px] leading-[39px] text-[#32353B]/70 font-light">
                      {it.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[18px] leading-[39px] font  -medium text-[#32353B]">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-base leading-[30px] text-[#32353B]/95 max-w-[70ch]">
                      {it.desc}
                    </p>
                  </div>
                </div>

                {/* divider except after last */}
                {idx < items.length - 1 && (
                  <div className="border-t border-[#32353B]/40 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
