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
      className={`py-[6px] px-[10px] mr-3 mb-3 border rounded-md text-black text-sm font-medium outline-none ${
        isSelected
          ? "text-opacity-100 border-black"
          : "text-opacity-40 border-gray-400"
      } lg:w-40 lg:mx-auto`}
    >
      {name}
    </button>
  );
};

export default FilterOption;
