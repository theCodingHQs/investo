import PropertySearch from "./PropertySearch";

export default function Hero() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center pt-32"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white px-4 max-w-7xl text-center md:text-left">
        <p className="text-sm md:text-xl lg:text-2xl md:font-medium">
          10,000+ Happy Property Buyers
        </p>
        <h1 className="font-semibold text-[28px] md:text-[54px] lg:text-[54px] my-1 ">
          India’s <span className="text-[#FF3768]">#1</span> Real Estate
          Partners
        </h1>
        <p className="text-base md:text-xl lg:text-base font-light">
          We don’t just sell property — we understand your goals and guide you
          with expert advice. <br /> From first visit to move-in, InvestoXpert
          is with you every step of the way.
        </p>

        <PropertySearch />
      </div>
    </div>
  );
}
