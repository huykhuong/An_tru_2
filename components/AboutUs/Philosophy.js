import React from "react";

const Philosophy = ({ title, content }) => {
  return (
    <div>
      <h3 className="mb-5 text-[19px] font-semibold underline underline-offset-4">
        {title}
      </h3>{" "}
      <p>{content}</p>
      <br />
    </div>
  );
};

export default Philosophy;
