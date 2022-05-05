import React from "react";

const Heading = ({ order, title }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center mb-20 lg:w-fit lg:mb-0">
      <h1 className="text-7xl lg:bg-[#3A563E] lg:p-16 lg:text-white lg:text-8xl">
        {order}
      </h1>
      <h1 className="text-xl font-semibold italic lg:not-italic lg:text-3xl lg:mt-5 lg:text-[#3A563E]">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
