import React from "react";
import styles from "../../styles/menu.module.css";

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
      className={`${styles.menu__laptop__filter__option__button} ${
        isSelected
          ? "text-opacity-100 border-black lg:italic lg:text-[#999999]"
          : "text-opacity-40 border-gray-400 lg:text-white"
      } `}
    >
      {name}
    </button>
  );
};

export default FilterOption;
