import AboutUsHero from "@/components/aboutUs/hero/AboutUsHero";
import MakesUsSpecial from "@/components/aboutUs/makes us special/MakesUsSpecial";
import OurPurpose from "@/components/aboutUs/our purpose/OurPurpose";
import OurVision from "@/components/aboutUs/our vision/OurVision";
import WhyChoose from "@/components/aboutUs/why choose/WhyChoose";
import ContactUs from "@/components/home/contact us/ContactUs";
import FAQSection from "@/components/home/faq/FAQSection";
import OurValues from "@/components/home/our values/OurValues";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white text-[#32353B]">
      <AboutUsHero />
      <OurPurpose />
      <OurVision />
      <WhyChoose />
      <OurValues />
      <MakesUsSpecial />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default Page;
