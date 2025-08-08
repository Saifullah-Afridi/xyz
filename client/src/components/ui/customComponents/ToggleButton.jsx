import React, { useState } from "react";

const ToggleButton = ({ stock }) => {
  const [toggle, setToggle] = useState(stock);

  const handelToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`w-16 ${
        toggle ? "bg-blue-500" : "bg-gray-400"
      } h-8 rounded-full relative px-1 cursor-pointer transition-all duration-500 ease-in-out`}
      onClick={handelToggle}
    >
      <span
        className={`bg-white rounded-full w-6 h-6 absolute top-1 left-1 ${
          toggle ? "translate-x-8" : "translate-x-0"
        } transition-all duration-500 ease-in-out`}
      ></span>
    </div>
  );
};

export default ToggleButton;
