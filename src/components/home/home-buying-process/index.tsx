"use client";
import React from "react";

interface StepItem {
  id: number;
  title: string;
  subtitle: string; // ✅ NEW FIELD
  description: string;
  image: string;
  icon?: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Select Property",
    subtitle: "Find the Perfect Match", // ✅ added
    description:
      "Find your perfect match among our curated selection of properties designed to meet your lifestyle and preferences.",
    image: "/images/step-1.png",
    icon: "🏡",
  },
  {
    id: 2,
    title: "Meet Our Expert",
    subtitle: "Guidance at Every Step", // ✅ added
    description:
      "Our expert team will guide you every step of the way with tailored guidance, ensuring clarity and confidence.",
    image: "/images/step-2.png",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Visit Property",
    subtitle: "Experience it Yourself", // ✅ added
    description:
      "See the house in person for a real experience. Explore surroundings while getting assistance from our specialists.",
    image: "/images/step-3.png",
    icon: "👀",
  },
  {
    id: 4,
    title: "Buy Property",
    subtitle: "Seamless Documentation", // ✅ added
    description:
      "Make it yours. From documentation to final handover, we help ensure a seamless, stress-free process.",
    image: "/images/step-4.png",
    icon: "📑",
  },
  {
    id: 5,
    title: "Loan Assistance",
    subtitle: "Easy Financing Options", // ✅ added
    description:
      "Get easy financing options with simplified documentation, matching your budget and eligibility.",
    image: "/images/step-5.png",
    icon: "💰",
  },
  {
    id: 6,
    title: "Customer Support",
    subtitle: "Here for You Always", // ✅ added
    description:
      "We're here for you even after your purchase. Our support team is always available for any queries.",
    image: "/images/step-6.png",
    icon: "💬",
  },
];

const HomeBuyingProcess = () => {
  return (
    <section className="w-full bg-[#082b34] py-16 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center text-white max-w-3xl mx-auto mb-16">
        <p className="uppercase text-sm tracking-wider text-gray-300">
          Building lasting relationships, not transactions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Unlock the Door to Your Dream Home
        </h2>
      </div>

      {/* Desktop View – Timeline */}
      <div className="hidden md:flex flex-col relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-400/40"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center mb-16 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div className="w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 w-80 text-white shadow-lg">
                <span className="text-3xl">{step.icon}</span>

                <h3 className="text-xl font-semibold mt-3">{step.title}</h3>

                {/* ✅ SUBHEADING */}
                <p className="text-sm my-1 font-medium">{step.subtitle}</p>

                <p className="text-sm text-gray-300">{step.description}</p>

                <img
                  src={step.image}
                  alt={step.title}
                  className="mt-4 rounded-xl w-full object-cover h-36"
                />
              </div>
            </div>

            {/* Number Circle */}
            <div className="w-1/12 flex justify-center">
              <div className="h-20 w-20 rounded-full bg-blue-100 text-blue-400 border-4 border-white flex items-center justify-center font-semibold text-xl shadow-lg">
                {step.id}
              </div>
            </div>

            <div className="w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Mobile View – Stacked Cards */}
      <div className="md:hidden grid gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/10 text-white shadow-md"
          >
            <div className="h-10 w-10 rounded-full bg-white text-[#082b34] flex items-center justify-center font-semibold mb-3">
              {step.id}
            </div>

            <span className="text-3xl">{step.icon}</span>

            <h3 className="text-lg font-semibold">{step.title}</h3>

            {/* SUBHEADING */}
            <p className="text-sm my-1 font-medium">{step.subtitle}</p>

            <p className="text-sm text-gray-300">{step.description}</p>

            <img
              src={step.image}
              alt={step.title}
              className="mt-4 rounded-xl w-full object-cover h-40"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBuyingProcess;
