import BlogsHero from "@/components/blogs/hero/BlogsHero";
import BlogTabSection from "@/components/blogs/tab section/BlogTabSection";
import ContactUs from "@/components/home/contact us/ContactUs";
import FAQSection from "@/components/home/faq/FAQSection";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white text-[#32353B]">
      <BlogsHero />
      <BlogTabSection />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default Page;
