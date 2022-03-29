import React from "react";

const TitleAndPrice = ({ vn_name, eng_name, price }) => {
  return (
    <section className="px-5 md:px-10">
      <h1 className="text-7xl">Cơm chiên Omurice</h1>
      <div className="flex justify-between items-center mt-6 mb-10">
        <h2 className="italic text-xl">Omurice Fried Rice</h2>
        <p className="text-lg">73000</p>
      </div>
    </section>
  );
};

export default TitleAndPrice;
