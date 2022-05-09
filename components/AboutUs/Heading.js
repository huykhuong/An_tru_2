import React from "react";

const Heading = ({ order, title }) => {
  const styles = {
    container: "flex flex-col gap-y-2 items-center mb-20 lg:w-fit lg:mb-0",
    heading: "text-7xl lg:bg-[#3A563E] lg:p-16 lg:text-white lg:text-8xl",
    title:
      "text-xl font-semibold italic lg:not-italic lg:text-3xl lg:mt-5 lg:text-[#3A563E]",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{order}</h1>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Heading;
