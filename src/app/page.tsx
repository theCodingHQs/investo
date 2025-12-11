import About from "@/components/home/about/About";
import ContactUs from "@/components/home/contact us/ContactUs";
import FAQSection from "@/components/home/faq/FAQSection";
import Hero from "@/components/home/hero/Hero";
import HomeBuyingProcess from "@/components/home/home-buying-process";
import OurValues from "@/components/home/our values/OurValues";
import Projects from "@/components/home/projects/Projects";
import WeAre from "@/components/home/we are/WeAre";

export default function Home() {
  return (
    <div className="w-full bg-white text-[#32353B]">
      <Hero />
      <About />
      <WeAre
        titleFirstLatter={"Your"}
        title={"Trusted Guide in Real Estate Investments"}
        desc={
          " At InvestoXpert, we provide expert guidance to navigate the complexities of real estate investments. Whether you're buying your first property, seeking profitable investment opportunities, or exploring the market as an NRI, we offer strategic insights and tailored services to help you achieve your goals. Let us help you make informed decisions and secure long-term success."
        }
      />
      <OurValues />
      <HomeBuyingProcess />
      <Projects />
      <ContactUs />
      <FAQSection />
    </div>
  );
}
