import React from "react";

const JoinWinningTeam = () => {
  const data = [
    {
      cardTitle: "💼 Full-time",
      location: "📍 Noida",
      role: "Relationship Manager",
      place: ["Sales", "Real Estate"],
    },
    {
      cardTitle: "💼 Full-time",
      location: "📍 Noida",
      role: "Sales Manager",
      place: ["Client Relations", "Real Estate"],
    },
    {
      cardTitle: "💼 Full-time",
      location: "📍 Gurgaon",
      role: "Sales Manager",
      place: ["Marketing", "Real Estate"],
    },
    {
      cardTitle: "💼 Full-time",
      location: "📍 Pune",
      role: "Sales Manager",
      place: ["Support", "Real Estate"],
    },
  ];
  return (
    <section className="py-[40px] md:py-[75px]">
      <div className="mx-auto max-w-4xl w-full px-4">
        <h2 className="text-2xl md:text-4xl mb-8 md:mb-16 text-center">
          Join Our Winning Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              className="border-[#32353B4D] border-[1px] rounded-lg"
              key={index}
            >
              <div className="px-8 py-3.5 flex justify-between text-base md:text-xl font-medium border-b border-[#32353B4D]">
                <p>{item.cardTitle}</p>
                <p>{item.location}</p>
              </div>
              <div className="px-8 py-7">
                <p className="text-xl md:text-2xl font-medium"> {item.role}</p>
                <div className="flex gap-2 mt-3 mb-8">
                  {item.place.map((placeItem, placeIndex) => (
                    <div
                      className="bg-[#F4F5FAE5] px-[20px] py-2 rounded-lg text-sm md:text-base"
                      key={placeIndex}
                    >
                      {placeItem}
                    </div>
                  ))}
                </div>
                <button className="bg-[#0095DA] rounded-full px-4 py-1.5 text-sm md:text-base text-white font-medium hover:bg-[#0085c4] transition cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinWinningTeam;
