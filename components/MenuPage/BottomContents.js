import React, { useEffect } from "react";
import styles from "../../styles/menu.module.css";

const BottomContents = ({
  setOpenFilterModal,
  filter_options,
  selectedFilterOption,
  selectFilterOption,
}) => {
  useEffect(() => {
    // document
    //   .getElementById("mobile_bottom_contents")
    //   .scrollTo(
    //     document.getElementById(`${selectedFilterOption}`).offset().left,
    //     0
    //   );
    document.getElementById(`${selectedFilterOption}`).scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  }, []);

  return (
    <React.Fragment>
      {/* Mobile & Tablet */}
      <section
        className={styles.menu__mobile__bottom__contents}
        id="mobile_bottom_contents"
      >
        {filter_options.map((name, index) => (
          <button
            key={index}
            onClick={() => {
              selectFilterOption(index);
              window.scrollTo(0, 0); //new
            }}
            className={` ${styles.menu__mobile__bottom__button} ${
              selectedFilterOption === index
                ? "border-white border-1 text-white"
                : "text-opacity-40 border-opacity-40 border-white text-white"
            } `}
            id={index}
          >
            {name}
          </button>
        ))}
      </section>

      {/* Pc & laptop */}
      <section className={styles.menu__laptop__bottom__contents}>
        {/* selected filter option */}
        <p className={styles.menu__laptop__selected__filter__option}>
          {filter_options[selectedFilterOption]}
        </p>

        <div className={styles.menu__laptop__filter__button}>
          <p
            onClick={() => setOpenFilterModal(true)}
            className={styles.menu__laptop__filter__button__label}
          >
            Phân Loại
          </p>
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
    </React.Fragment>
  );
};

export default BottomContents;
