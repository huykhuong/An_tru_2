import React from "react";

const Heading = ({ order, title }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center mb-20">
      <h2 className="text-7xl">{order}</h2>
      <h2 className="text-xl font-semibold italic">{title}</h2>
    </div>
  );
};

export default Heading;
