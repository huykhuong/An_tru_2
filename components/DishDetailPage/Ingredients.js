import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <section className="mt-10 px-5 md:px-10 lg:w-1/4 lg:flex-shrink-0 lg:mt-[25vh] lg:ml-[100px]">
      <h2 className="text-2xl lg:text-4xl">Thành phần</h2>
      <p>Các loại thành phần</p>
    </section>
  );
};

export default Ingredients;
