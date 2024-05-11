// import React from "react";

const Input = ({ type, placeholder, onChange, name }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      className="border outline-none border-[#444] px-2 py-2 focus:ring-1 focus:ring-gray-500"
    />
  );
};

export default Input;
