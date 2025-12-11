import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div
      className="w-full bg-white text-[#32353B]"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
    >
      <ProjectDetails />
    </div>
  );
};

export default Page;
