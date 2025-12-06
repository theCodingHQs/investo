import React from "react";

export default function ContactUs() {
  return (
    <section
      aria-label="Schedule a free consultation"
      className="relative w-full"
      style={{
        backgroundImage: "url('/contact-us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 lg:py-44 lg:pb-40">
        <div className="max-w-3xl">
          <p
            className="
              text-[36px] font-normal text-white/90 md:font-medium
              tracking-tight
              mb-6 uppercase
            "
          >
            Your journey start here
          </p>

          <h1
            className="
              text-[28px] font-semibold leading-tight text-white
              md:text-[54px] md:font-medium md:leading-[0.95]
              mb-6
            "
          >
            Schedule a Free Consultation
          </h1>

          <p
            className="
              text-base font-light text-white/90 md:font-light md:leading-relaxed
              max-w-[780px]
              mb-14
            "
          >
            A home is more than just a place, it’s where your story begins.
            We’re here to listen, guide, and make your dream home a reality,
            step by step.
          </p>

          <div>
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                bg-white text-black
                px-6 py-2 rounded-full
                text-base font-medium
                shadow-md
                hover:shadow-lg
                transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
