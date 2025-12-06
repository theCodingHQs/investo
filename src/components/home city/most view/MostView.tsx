import React from "react";

interface Project {
  id: string | number;
  title: string;
  img: string;
  desc: string;
  location?: string;
  workType?: string;
  date?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "📍 Urban Retreat in Lodi Gardens",
    img: "/project/ms-project1.png",
    desc: "Lodi Gardens offers tranquil green spaces, historic tombs, and lush gardens, ideal for morning walks and peaceful picnics. Experience serenity in the heart of New Delhi",
    location: "Lodi Gardens, New Delhi",
    workType: "Residential Property",
  },
  {
    id: 2,
    title: "📍 Grand Conference Hall in Connaught Place",
    img: "/project/ms-project2.png",
    desc: "Located in the bustling heart of Delhi, this grand conference hall offers state-of-the-art facilities for corporate events, meetings, and conferences. Perfect for business gatherings in central Delhi.",
    location: "Connaught Place, New Delhi",
    workType: "Commercial Property",
  },
  {
    id: 3,
    title: "📍 Urban Retreat in Greater Kailash",
    img: "/project/ms-project3.png",
    desc: "These luxurious urban retreats are set amidst lush green surroundings, offering spacious living and modern amenities. Located in the heart of Greater Kailash, these properties combine comfort with convenience.",
    location: "Greater Kailash, New Delhi",
    workType: "Residential Property",
  },
  {
    id: 4,
    title: "📍 Grand Conference Hall in Noida",
    img: "/project/ms-project4.png",
    desc: "Situated in the rapidly growing business hub of Noida, this modern conference hall is designed to accommodate large corporate events with high-end facilities, ideal for professionals.",
    location: "Noida, Uttar Pradesh",
    workType: "Residential Property",
  },
];
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="w-full h-full md:max-w-[544px] flex flex-col justify-between gap-6">
      <h3 className="text-[24px] font-medium">{project.title}</h3>

      <div className="flex flex-col gap-6">
        {/* Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-lg object-cover
                   h-[180px] sm:h-[220px] md:h-auto"
        />

        <p className="text-base text-[#32353B] line-clamp-3">{project.desc}</p>

        <div className="border border-[#32353B]/30 rounded-xl overflow-hidden">
          <div className="p-3 flex gap-4 md:gap-6 text-base md:text-xl items-start">
            <p className="w-28 md:w-[126px] text-sm md:text-base uppercase text-[#6B6F73]">
              location
            </p>
            <p className="text-sm md:text-base">:</p>
            <p className="font-light text-sm md:text-base">
              {project.location}
            </p>
          </div>

          <hr className="w-full border-t border-[#32353B]/30" />

          <div className="p-3 flex gap-4 md:gap-6 text-base md:text-xl items-start">
            <p className="w-28 md:w-[126px] text-sm md:text-base uppercase text-[#6B6F73]">
              Project Type
            </p>
            <p className="text-sm md:text-base">:</p>
            <p className="font-light text-sm md:text-base">
              {project.workType}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
const MostView = () => {
  return (
    <section className="py-12 md:py-20 mx-auto max-w-4xl w-full px-4">
      <h2 className="text-4xl font-medium mb-10 text-center">Most Viewed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 md:gap-10 pt-10 border-t-2 border-[#32353B66]">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default MostView;
