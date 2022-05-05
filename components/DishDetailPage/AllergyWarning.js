import React from "react";

const AllergicWarning = ({ warning }) => {
  return (
    <section className="mt-10 px-5 md:px-10 lg:w-[25vw] lg:flex-shrink-0 lg:mt-auto lg:mb-[35vh] lg:mr-[100px]">
      <p className="italic text-lg lg:text-lg">
        Lưu ý: sản phẩm có chứa nhiều sữa
      </p>
    </section>
  );
};

export default AllergicWarning;
