import React from "react";

interface AmenityCardProps {
  icon: React.ReactNode;
  label: string;
}

const AmenityCard = ({ icon, label }: AmenityCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-md shadow-sm border hover:shadow-md transition">
      <div className="text-2xl">{icon}</div>
      <p className="text-sm font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
};

export default AmenityCard;
