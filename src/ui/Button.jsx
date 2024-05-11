// import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#2e3791] text-white py-2 px-6 rounded-sm"
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
