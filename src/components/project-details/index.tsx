import React from "react";
import Connectivity from "./Connectivity";
import Amenities from "./Amenities";
import InquiryForm from "./Inquiry-form";

const ProjectDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-6">
      {/* Top layout: Left images + right form */}

      <div className="grid grid-cols-12 grid-rows-8 gap-4">
        <div className="relative bg-white col-span-6 row-span-4 rounded-s-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            className="w-full h-[350px] object-cover rounded-lg"
          />

          {/* New Launch Badge */}
          <button className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded">
            New Launch
          </button>

          {/* Save & Share */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="bg-white px-3 py-1 rounded text-sm shadow">
              Save
            </button>
            <button className="bg-white px-3 py-1 rounded text-sm shadow">
              Share
            </button>
          </div>
        </div>
        <div className="bg-white col-span-3 row-span-2 col-start-7">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            className="w-44 h-24 object-cover rounded"
          />
        </div>
        <div className="bg-white col-span-3 row-span-2 col-start-10 rounded-tr-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            className="w-44 h-24 object-cover rounded"
          />
        </div>
        <div className="relative bg-white col-span-6 row-span-2 col-start-7 row-start-3 rounded-br-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            className="w-44 h-24 object-cover rounded"
          />
          <button className="absolute bottom-2 right-2 bg-white text-xs px-2 rounded shadow">
            + 26 More Photos
          </button>
        </div>
        <div className="bg-white col-span-8 row-span-2 row-start-5 rounded px-4">
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">
              RERA Registered
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              Residential & Commercial
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
              2 - 5 BHK
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
              1285 - 2675 Sq Ft
            </span>
          </div>

          {/* Overview */}
          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              Shapoorji Pallonji Sensorium Hinjewadi
            </h2>
            <p className="text-gray-600">Maharashtra, Pune</p>

            <h3 className="text-xl font-semibold mt-3">Rs. 71 L – 2.5 Cr</h3>
            <p className="text-sm text-gray-500">EMI: 8,678/month</p>

            <button className="text-blue-600 text-sm font-semibold mt-1">
              Get pre-qualified
            </button>
          </div>
        </div>
        <div className=" col-span-8 row-span-2 col-start-1 row-start-7">
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { label: "Possession", value: "Dec 2025" },
              { label: "Price", value: "70 Lac - 2.5 Cr" },
              { label: "Type", value: "Under construction" },
              { label: "Floor", value: "22 Floors" },
              { label: "Area", value: "32.98 acres" },
              { label: "Towers", value: "9 Towers" },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-lg px-4 py-3 text-center bg-white shadow-sm min-w-52 flex-1"
              >
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          {/* View More */}
          <button className="mt-4 text-blue-700 font-medium text-sm">
            View 6 more +
          </button>
        </div>
        <div className="col-span-4 row-span-4 col-start-9 row-start-5">
          <InquiryForm />
        </div>
      </div>

      {/* ABOUT THIS PROJECT */}
      <section className="px-6 md:px-16 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          About this Project
        </h2>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Shapoorji Pallonji Sensorium Vista is an elegant Project by Shapoorji
          Pallonji who are one of the renowned developers in Pune. <br />
          <br />
          It is located in Hinjewadi, Pune West and well connected by major
          road(s) like Hinjewadi Road, Mumbai–Pune Expressway. Shapoorji
          Pallonji Sensorium Vista is spread across 10.5 acre. The Project has
          132 Units. The status of the Project is Mid Stage.
        </p>

        <button className="text-blue-600 mt-2 font-medium flex items-center gap-1">
          Show more <span className="text-lg">▾</span>
        </button>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            INFINITY POOL
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            COMMUNITY CENTER
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            OPEN KITCHEN
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            SERVANT ROOM
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
            24/7 GYM
          </span>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="mt-12 bg-[#e8f1f7] py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Floor plans</h2>
        <p className="text-gray-700 mt-1">26 floor plans available</p>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 text-gray-600 text-lg font-medium border-b border-gray-300 pb-3">
          <button className="text-black font-semibold border-b-2 border-black pb-1">
            All
          </button>
          <button className="hover:text-black">2 BHK</button>
          <button className="hover:text-black">3 BHK</button>
          <button className="hover:text-black">4 BHK</button>
          <button className="hover:text-black">5 BHK</button>
        </div>

        {/* Floor Plan Cards */}
        <div className="mt-8 space-y-8">
          {/* Card 1 */}
          <div className="flex items-start justify-between bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <img
                src="floor-plan.png"
                className="h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Rs. 68.03 L</p>
                <p className="text-gray-600 text-sm">
                  561 sq.ft. (52.12 sq.m.)
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  10 apartments available from May 25
                </p>
              </div>
            </div>
            <button className="text-gray-700 text-2xl">›</button>
          </div>

          {/* Card 2 */}
          <div className="flex items-start justify-between bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <img
                src="floor-plan.png"
                className="h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Rs. 71.85 L</p>
                <p className="text-gray-600 text-sm">
                  561 sq.ft. (52.12 sq.m.)
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  10 apartments available from May 25
                </p>
              </div>
            </div>
            <button className="text-gray-700 text-2xl">›</button>
          </div>
        </div>
      </section>
      <section className="bg-[#072C3D] p-4 flex flex-col">
        <h2 className="text-2xl md:text-3xl text-white">Master Plan</h2>
        <div className=" bg-blue-100 mt-4 flex-1">
          <img className="" src="/master-plan.png" alt="" />
        </div>
      </section>
      <Connectivity />
      <Amenities />
    </div>
  );
};

export default ProjectDetails;
