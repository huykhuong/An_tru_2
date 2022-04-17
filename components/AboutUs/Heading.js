import React from "react";

const Heading = ({ order, title }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center mb-20 lg:w-fit lg:px-10 lg:mb-0">
      <h2 className="text-7xl lg:bg-[#3A563E] lg:p-16 lg:text-white lg:text-8xl">
        01
      </h2>
      <h2 className="text-xl font-semibold italic lg:not-italic lg:text-3xl lg:mt-5 lg:text-[#3A563E]">
        TỔNG QUAN
      </h2>
    </div>
  );
};

export default Heading;
