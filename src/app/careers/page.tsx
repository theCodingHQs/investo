import CareersHero from "@/components/careers/hero/CareersHero";
import JoinWinningTeam from "@/components/careers/Join winning team/JoinWinningTeam";
import WhyJoinInvestoxpertTeam from "@/components/careers/why join the team/WhyJoinInvestoxpertTeam";
import ContactUs from "@/components/home/contact us/ContactUs";
import FAQSection from "@/components/home/faq/FAQSection";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white text-[#32353B]">
      <CareersHero />
      <JoinWinningTeam />
      <WhyJoinInvestoxpertTeam />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default Page;
