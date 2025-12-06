import React from "react";

const MakesUsSpecial = () => {
  const title = "easy, secure, and tailored solutions to your needs";
  const data = [
    {
      imgPath: "/icons/handshake.png",
      title: "Trusted Guidance",
      desc: "Expand your reach beyond borders. At InvestoXpert, we connect developers and builders with a global network of buyers, bringing worldwide attention to your property listings.",
    },
    {
      imgPath: "/icons/money-bag.png",
      title: "Smart Investments",
      desc: "We empower you to make informed decisions with personalized insights, ensuring your investments are not only profitable but also secure",
    },
    {
      imgPath: "/icons/internet.png",
      title: "Real Connections",
      desc: "Building lasting relationships, we connect you with the right people and opportunities, making every step of your journey smoother and more rewarding",
    },
    {
      imgPath: "/icons/yellow-star.png",
      title: "Endless Possibilities",
      desc: "We open the doors to a world of opportunities, whether you're buying, selling, or investing. Your dream property is within reach, and we're here to make it happen",
    },
  ];
  return (
    <section className="py-16 md:py-[75px] bg-[#F4F5FA]">
      <div className="mx-auto px-6 w-full max-w-4xl">
        <p className="text-2xl font-medium mb-3 text-[#666]">
          {title.toLocaleUpperCase()}
        </p>
        <p className="text-4xl mb-[62px]">Discover What Makes Us Special!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, idx) => (
            <div className="p-8 py-10 flex gap-5 flex-col items-center bg-white text-center rounded-2xl">
              <img
                src={item.imgPath}
                alt="makes us special img"
                className="w-16"
              />
              <div>
                <p className="text-2xl font-medium mb-3">{item.title}</p>
                <p className="text-base font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakesUsSpecial;
