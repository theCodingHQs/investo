import CityHero from "@/components/home city/hero/CityHero";
import MostView from "@/components/home city/most view/MostView";
import ContactUs from "@/components/home/contact us/ContactUs";
import FAQSection from "@/components/home/faq/FAQSection";
import WeAre from "@/components/home/we are/WeAre";
import React from "react";

const Page = () => {
  return (
    <div className="w-full bg-white text-[#32353B]">
      <CityHero />
      <MostView />
      <WeAre
        titleFirstLatter={"Essential"}
        title={"aspects driving our success"}
        desc={
          "We believe architecture is more than just buildings—it’s about crafting spaces that inspire and elevate everyday experiences. With a commitment to innovation, sustainability, and precision, we bring your ideas to life while enhancing functionality and aesthetics. Our team of dedicated architects and designers is here to turn your unique vision into a tangible masterpiece in the vibrant city of Delhi."
        }
      />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default Page;
