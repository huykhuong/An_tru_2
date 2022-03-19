import React from "react";

const BottomContents = ({
  setOpenFilterModal,
  filter_options,
  selectedFilterOption,
  numberOfDish,
}) => {
  return (
    <div className="w-full px-[21.25px] flex items-center justify-between absolute bottom-5 right-15 z-20">
      {/* selected filter option */}
      <h1 className="font-medium text-sm text-white bg-black px-3 py-1">
        {filter_options[selectedFilterOption]} ({numberOfDish})
      </h1>
      <div className="flex items-center justify-center gap-x-1">
        <h1
          onClick={() => setOpenFilterModal(true)}
          className="font-medium text-md"
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
    </div>
  );
};

export default BottomContents;
