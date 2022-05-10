import React from "react";

const FilterOption = ({
  name,
  isSelected,
  selectFilterOption,
  setOpenFilterModal,
  index,
}) => {
  return (
    <button
      onClick={() => {
        selectFilterOption(index);
        setOpenFilterModal(false);
      }}
      className={`min-w-[120px] py-[6px] px-[10px] mr-3 mb-3 border rounded-md text-sm font-medium outline-none ${
        isSelected
          ? "text-opacity-100 border-black lg:italic lg:text-[#999999]"
          : "text-opacity-40 border-gray-400 lg:text-white"
      } lg:w-52 lg:mx-auto lg:text-4xl lg:px-0 lg:border-none`}
    >
      {name}
    </button>
  );
};

export default FilterOption;
