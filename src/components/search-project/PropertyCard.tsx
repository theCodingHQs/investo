import Image from "next/image";

interface UnitType {
  unit: string;
  size: string | number;
  price: string;
}

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  priceRange: string;
  units: UnitType[];
}

export default function PropertyCard({
  image,
  title,
  location,
  priceRange,
  units,
}: PropertyCardProps) {
  return (
    <div className="text-black bg-white">
      {/* IMAGE */}
      <div className="w-full h-56 relative rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className=" pt-2">
        <h2 className="text-base font-semibold">{title}</h2>
        <div className="flex items-start gap-x-4">
          <p className="text-sm">{location}</p>
          <p className="text-base font-semibold text-gray-800">{priceRange}</p>
        </div>

        {/* TABLE */}
        <div className="relative mt-2 border border-gray-300 rounded-xl p-3">
          <div className="grid grid-cols-3 text-sm font-medium mb-2">
            <span>Unit</span>
            <span>Size</span>
            <span>Price</span>
          </div>

          {units.map((u, i) => (
            <div
              key={i}
              className="grid grid-cols-3 text-gray-500 py-2 text-sm"
            >
              <span>{u.unit}</span>
              <span>{u.size}</span>
              <span>{u.price}</span>
            </div>
          ))}

          {/* Arrow */}
          <div className="absolute bottom-0 right-0 flex justify-end mt-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
