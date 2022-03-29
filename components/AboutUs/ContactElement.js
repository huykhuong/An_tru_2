import React from "react";

const ContactElement = ({ svgPath, text }) => {
  return (
    <div className="max-w-[300px] mx-auto grid grid-cols-5 mb-8 items-center md:max-w-sm">
      {svgPath}
      <p className="col-span-4">{text}</p>
    </div>
  );
};

export default ContactElement;
