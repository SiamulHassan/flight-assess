import { useState } from "react";

const SelectTrip = () => {
  const [selectedCategory, setSelectedCategory] = useState("One Way");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-between border border-[#2e3791] my-8 max-w-[330px]">
        <div
          className={`cursor-pointer px-4 py-1 text-sm ${
            selectedCategory === "Round Trip"
              ? "text-white bg-[#2e3791]"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("Round Trip")}
        >
          Round Trip
        </div>
        <div
          className={`cursor-pointer px-4 py-1 text-sm ${
            selectedCategory === "One Way"
              ? "text-white bg-[#2e3791]"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("One Way")}
        >
          One Way
        </div>
        <div
          className={`cursor-pointer px-4 py-1 text-sm ${
            selectedCategory === "Multi City"
              ? "text-white bg-[#2e3791]"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("Multi City")}
        >
          Multi City
        </div>
      </div>
    </div>
  );
};

export default SelectTrip;
