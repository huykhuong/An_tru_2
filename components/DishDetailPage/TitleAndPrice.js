import React from "react";

const TitleAndPrice = ({ vn_name, eng_name, price }) => {
  return (
    <section className="px-5 md:pl-10 lg:flex-shrink-0 lg:w-[50vw] lg:mt-auto lg:mb-[100px]">
      {/* <p className="invisible lg:visible lg:mb-[250px] lg:italic">
        Dùng chuột trái để kéo qua
      </p> */}
      <h1 className="text-7xl lg:text-[8vw]">Cơm chiên Omurice</h1>
      <div className="flex justify-between items-center mt-10 lg:mt-16 mb-5">
        <div className="lg:flex-col space-y-5">
          <h2 className="italic text-xl lg:text-[20px]">Omurice Fried Rice</h2>
          <p className="text-lg lg:text-[20px]">73</p>
        </div>
        <h2 className="hidden lg:inline-flex italic text-lg lg:text-lg lg:max-w-[200px]">
          Lưu ý: sản phẩm có chứa nhiều sữa
        </h2>
      </div>
    </section>
  );
};

export default TitleAndPrice;
