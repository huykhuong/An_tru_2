import React from "react";

const TitleAndPrice = ({ vn_name, eng_name, price }) => {
  return (
    <section className="px-5 md:px-10 lg:flex-shrink-0 lg:w-[50vw] lg:mt-auto lg:mb-20">
      <p className="invisible lg:visible lg:mb-[250px] lg:italic">
        Dùng chuột trái để kéo qua
      </p>
      <h1 className="text-7xl lg:text-[8vw]">Cơm chiên Omurice</h1>
      <div className="flex justify-between items-center mt-10 mb-5 lg:flex-col lg:items-end lg:gap-y-10">
        <h2 className="italic text-xl lg:text-[25px]">Omurice Fried Rice</h2>
        <p className="text-lg lg:text-[25px]">73</p>
      </div>
    </section>
  );
};

export default TitleAndPrice;
