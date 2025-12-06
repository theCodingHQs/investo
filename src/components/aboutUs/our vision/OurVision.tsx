import { Linkedin } from "lucide-react";
import React from "react";

const channels = [
  "/about-us/channel1.png",
  "/about-us/channel2.png",
  "/about-us/channel3.png",
  "/about-us/channel4.png",
  "/about-us/channel6.png",
  "/about-us/channel7.png",
];
const OurVision: React.FC = () => {
  return (
    <section className="bg-[#0095DA]/10 text-[#32353B] py-[60px] md:py-[75px]">
      <div className="mx-auto max-w-7xl w-full px-4">
        <div className="flex gap-4 items-center">
          <p className="text-xl md:text-2xl font-medium text-[#666]">
            Message from the CEO, Vishal Raheja{" "}
          </p>
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/in/vishal-raheja-5255872a/"
          >
            <Linkedin />
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-2xl md:text-4xl font-medium mt-1">
            Leadership Perspective
          </p>
        </div>
        <hr className="border-[#32353B66]/40 my-[24px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/about-us/vishal-profile.png" className="" />
          <div className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-semibold">
              <span className="text-[#32353B80]">
                Real estate is not a transaction,
              </span>{" "}
              it’s the beginning of someone’s story
            </p>
            <div className="flex flex-col text-sm md:text-base gap-1.5 mt-6">
              <p>
                I started InvestoXpert in 2016 with a simple belief — buying a
                home should feel confident, guided and personalised… not
                confusing or push-driven.
              </p>
              <p>
                Over the last decade in real estate and BFSI, one thing has
                become clear to me — every buyer has a different need, a
                different plan, a different “why”. My role — and our role as a
                company — is to understand that first.
              </p>
              <p>
                That is why we built a model based on transparency, honest
                comparison of projects, real market insights and zero pressure
                selling.
              </p>
              <p>
                Today, with 10 strategic offices across India, we are closer to
                customers than ever — listening, advising and guiding them to
                the right property decisions with clarity and confidence.
              </p>
              <p>
                This is my commitment to you — <br />
                <span className="font-bold">
                  we are not here to sell you a property
                </span>{" "}
                <br />
                we are here to help you choose the right one.
              </p>

              <p>
                <span className="font-bold">— Vishal Raheja</span> <br />
                Founder & CEO, InvestoXpert
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-[72px] h-[50px] overflow-x-scroll gap-2 scroll-hidden">
          {channels.map((ch, idx) => (
            <img
              key={idx}
              src={ch}
              alt={`Channel ${idx + 1}`}
              className="h-full w-auto flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
