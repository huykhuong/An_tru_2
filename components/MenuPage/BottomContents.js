import React from "react";

const BottomContents = ({
  setOpenFilterModal,
  filter_options,
  selectedFilterOption,
  numberOfDish,
}) => {
  return (
    <section className="w-full bg-[#fbfbfb] px-[21.25px] pt-[10px] pb-5 fixed bottom-0 flex items-center justify-between lg:bg-transparent lg:px-32 2xl:px-[280px]">
      {/* selected filter option */}
      <h1 className="font-medium text-[17px] text-white bg-[#3A563E] rounded-sm px-3 py-1 lg:px-5 lg:py-3">
        {filter_options[selectedFilterOption]} ({numberOfDish})
      </h1>

      <div className="flex items-center justify-center gap-x-1">
        <h1
          onClick={() => setOpenFilterModal(true)}
          className="font-bold text-[18px] lg:text-[20px]"
        >
          Bộ lọc
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </div>
    </section>
  );
};

export default BottomContents;
