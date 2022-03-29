import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/GeneralUI/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import BottomContents from "../../components/MenuPage/BottomContents";
import FilterOption from "../../components/MenuPage/FIlterOption";
import { uiActions } from "../../store/ui-slice";
import ModalBackground from "../../components/MenuPage/ModalBackground";
import DishCard from "../../components/MenuPage/DishCard";
import { mon_an_kem, mon_canh, mon_com, mon_rau, mon_soi } from "../../data";
import BottomFilterModal from "../../components/MenuPage/BottomFilterModal";
import DishesDivWrapper from "../../components/MenuPage/DishesDivWrapper";

const filter_options = [
  "Món cơm",
  "Món sợi",
  "Món canh",
  "Món rau",
  "Món ăn kèm",
];

const Menu = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] = useState(0);
  const [numberOfDish, setNumberOfDish] = useState(mon_com.length);

  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  const dispatch = useDispatch();

  // select option function
  const selectOption = (value) => {
    setSelectedFilterOption(value);
    // Set the number of dishes of each dish category
    if (value === 0) {
      setNumberOfDish(mon_com.length);
    } else if (value === 1) {
      setNumberOfDish(mon_soi.length);
    } else if (value === 2) {
      setNumberOfDish(mon_canh.length);
    } else if (value === 3) {
      setNumberOfDish(mon_rau.length);
    } else if (value === 4) {
      setNumberOfDish(mon_an_kem.length);
    }
  };

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "menu" }));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-y-hidden">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <motion.main
        key={"menu_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "menu" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
      >
        {selectedFilterOption === 0 && (
          <DishesDivWrapper>
            {mon_com.map((item) => (
              <DishCard
                key={item.name}
                dishName={item.name}
                dishPrice={item.price}
              />
            ))}
          </DishesDivWrapper>
        )}

        {selectedFilterOption === 1 && (
          <DishesDivWrapper>
            {mon_soi.map((item) => (
              <DishCard
                key={item.name}
                dishName={item.name}
                dishPrice={item.price}
              />
            ))}
          </DishesDivWrapper>
        )}

        {selectedFilterOption === 2 && (
          <DishesDivWrapper>
            {mon_canh.map((item) => (
              <DishCard
                key={item.name}
                dishName={item.name}
                dishPrice={item.price}
              />
            ))}
          </DishesDivWrapper>
        )}

        {selectedFilterOption === 3 && (
          <DishesDivWrapper>
            {mon_rau.map((item) => (
              <DishCard
                key={item.name}
                dishName={item.name}
                dishPrice={item.price}
              />
            ))}
          </DishesDivWrapper>
        )}

        {selectedFilterOption === 4 && (
          <DishesDivWrapper>
            {mon_an_kem.map((item) => (
              <DishCard
                key={item.name}
                dishName={item.name}
                dishPrice={item.price}
              />
            ))}
          </DishesDivWrapper>
        )}

        {/* Bottom contents consitsting of filter button and dish category heading */}
        <BottomContents
          setOpenFilterModal={setOpenFilterModal}
          filter_options={filter_options}
          selectedFilterOption={selectedFilterOption}
          numberOfDish={numberOfDish}
        />

        {/* Filter Modal */}
        <>
          {/* Modal div */}
          <ModalBackground
            openFilterModal={openFilterModal}
            setOpenFilterModal={setOpenFilterModal}
          />
          {/* Bottom Content div */}
          <BottomFilterModal
            openFilterModal={openFilterModal}
            setOpenFilterModal={setOpenFilterModal}
          >
            {filter_options.map((name, index) => (
              <FilterOption
                key={name}
                name={name}
                selectFilterOption={selectOption}
                setOpenFilterModal={setOpenFilterModal}
                index={index}
                isSelected={selectedFilterOption == index}
              />
            ))}
          </BottomFilterModal>
        </>
      </motion.main>
    </div>
  );
};

export default Menu;
