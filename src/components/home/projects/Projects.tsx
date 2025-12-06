// components/Projects.tsx
import Link from "next/link";
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
    title: "Urban Retreat in Koregaon Park",
    img: "/project/project1.png",
    desc: "A serene residential project in Koregaon Park, offering lush gardens and modern living in one of Pune’s most vibrant areas",
    location: "Koregaon Park, Pune",
    workType: "Residential",
  },
  {
    id: 2,
    title: "Grand Conference Hall in Magarpatta",
    img: "/project/project2.png",
    desc: "A modern conference hall in Pune’s business hub, designed for corporate events with easy access and top-notch amenities",
    location: "Magarpatta City, Pune",
    workType: "Commercial",
  },
  {
    id: 3,
    title: "Luxury Villas in Hinjawadi",
    img: "/project/project3.png",
    desc: "Exclusive villas offering spacious living with panoramic views, located in the heart of Pune's tech hub",
    location: "Hinjawadi, Pune",
    workType: "Residential",
  },
  {
    id: 4,
    title: "Business Hub in Baner",
    img: "/project/project2.png",
    desc: "A premium commercial space in Baner, designed for businesses with modern facilities & great connectivity",
    location: "Baner, Pune",
    workType: "Commercial",
  },
];

const projects2: Project[] = [
  {
    id: 1,
    title: "Expansion into Dubai",
    img: "/project/project5.png",
    date: "December 8, 2024",
    desc: "InvestoXpert expands its services to Dubai, offering personalized real estate solutions in one of the world's most dynamic property markets.",
  },
  {
    id: 2,
    title: "Partnership with Leading Developers ",
    img: "/project/project6.png",
    date: "December 1, 2024",
    desc: "We’ve partnered with top developers like Godrej, M3M, and ATS to provide RERA-compliant properties, ensuring exclusive investment opportunities for clients",
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

function ProjectCard2({ project }: { project: Project }) {
  return (
    <article className="w-full md:max-w-[544px] flex flex-col gap-4 h-full">
      <img
        src={project.img}
        alt={project.title}
        className="w-full rounded-lg object-cover h-[160px] sm:h-[200px] md:h-auto"
      />

      <p className="text-base text-[#32353B]">{project.date}</p>
      <h3 className="text-[24px] font-medium">{project.title}</h3>

      <p className="text-base text-[#32353B]/70 line-clamp-4 mt-auto">
        {project.desc}
      </p>
      <Link href="#" className="text-sm md:text-xl text-blue-600">
        {" "}
        Read More
      </Link>
    </article>
  );
}

const Projects = () => {
  return (
    <section className="py-12 md:py-[75px] mx-auto max-w-4xl w-full px-4">
      <p className="text-[36px] font-medium text-gray-400">Featured Projects</p>

      <p className="text-[54px] font-medium my-2 leading-tight">
        Showcase of Excellence
      </p>

      <p className="text-base font-light">Check out our featured projects</p>
      <hr className="my-6 md:my-10 border-t text-[#32353B]/40" />

      {/* Grid: already 1 column on mobile, 2 on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <p className="text-[36px] font-medium text-gray-400">Latest Highlights</p>
      <p className="text-[54px] font-medium my-2 leading-tight">
        Moments Of Growth
      </p>
      <p className="text-base font-light">
        Explore our recent milestones, expansions and industry engagements
      </p>
      <hr className="my-6 md:my-10 border-t text-[#32353B]/40" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects2.map((p) => (
          <ProjectCard2 key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
