// import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const SelectBox = ({ options, onChange, name }) => {
  // const handleChange = (e) => {
  //   onChange(name, e.target.value);
  // };
  return (
    <div className="relative w-full">
      <select
        className={`appearance-none border border-[#444] rounded-sm py-[10px] px-4 text-base focus:outline-none focus:border-[#444] w-full`}
        onChange={onChange}
        name={name}
      >
        {options.map((option, key) => (
          <option value={option.value} key={key}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default SelectBox;
