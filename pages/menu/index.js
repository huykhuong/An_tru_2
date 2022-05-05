import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/GeneralUI/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import BottomContents from "../../components/MenuPage/BottomContents";
import FilterOption from "../../components/MenuPage/FIlterOption";
import { uiActions } from "../../store/ui-slice";
import ModalBackground from "../../components/MenuPage/ModalBackground";
import DishCard from "../../components/MenuPage/DishCard";
import {
  do_uong,
  mon_an_kem,
  mon_com,
  mon_rau,
  mon_soi,
  trang_mieng,
} from "../../data";
import BottomFilterModal from "../../components/MenuPage/BottomFilterModal";
import DishesDivWrapper from "../../components/MenuPage/DishesDivWrapper";
import { useRouter } from "next/router";

const filter_options = [
  "Món cơm",
  "Món sợi",
  "Món rau",
  "Món ăn kèm",
  "Tráng miệng",
  "Đồ uống",
];

const Menu = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [numberOfDish, setNumberOfDish] = useState(mon_com.length);

  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );
  const selectedFilterOption = useSelector(
    (state) => state.uiReducer.selectedFilterOption
  );
  const menuModalState = useSelector((state) => state.uiReducer.openMenu);

  const dispatch = useDispatch();
  const router = useRouter();

  // select option function
  const selectOption = (value) => {
    dispatch(uiActions.setSelectedFilterOption({ value: value }));
    // Set the number of dishes of each dish category
    if (value === 0) {
      setNumberOfDish(mon_com.length);
    } else if (value === 1) {
      setNumberOfDish(mon_soi.length);
    } else if (value === 2) {
      setNumberOfDish(mon_rau.length);
    } else if (value === 3) {
      setNumberOfDish(mon_an_kem.length);
    } else if (value === 4) {
      setNumberOfDish(trang_mieng.length);
    } else if (value === 5) {
      setNumberOfDish(do_uong.length);
    }
  };

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (as !== "/menu") {
        dispatch(uiActions.setPageExitingFrom({ exitingPage: "" }));
        setTimeout(() => {
          router.replace(as);
        }, 1100);
      }
    });
  }, [router]);

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "menu" }));
  }, [dispatch]);

  //Stop the screen from scrolling when the modal is opened
  // useEffect(() => {
  //   if (menuModalState) {
  //     const scrollY =
  //       document.documentElement.style.getPropertyValue("--scroll-y");
  //     const body = document.body;
  //     body.style.position = "fixed";
  //     body.style.top = `-${scrollY}`;
  //   } else {
  //     const body = document.body;
  //     const scrollY = body.style.top;
  //     body.style.position = "";
  //     body.style.top = "";
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   }
  // }, [menuModalState]);

  // window.addEventListener("scroll", () => {
  //   document.documentElement.style.setProperty(
  //     "--scroll-y",
  //     `${window.scrollY}px`
  //   );
  // });

  return (
    <Fragment>
      <div className="relative w-full">
        <Head>
          <title>Menu - Nhà hàng chay An Trú</title>
          <meta
            name="keywords"
            content="Menu, An Trú, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Menu" />
          <meta property="og:description" content />
          {/* <meta property="og:url" content="https://iron-fever.vn/"/> */}
          {/* <meta property="og:image:secure_url" content="https://bizweb.dktcdn.net/100/360/775/themes/729132/assets/logo.png?1622064036816"></meta> */}
          <meta property="og:site_name" content="Nhà hàng chay An Trú" />
          <link rel="canonical" href="https://nhahangchayantru.vn/menu" />
        </Head>

        <Header />

        <motion.main
          id="menu_page"
          key={"menu_page"}
          initial={{ opacity: 0 }}
          animate={
            pageWillBeExitingFrom === "menu" ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.6 }}
          className="bg-white lg:bg-transparent"
        >
          {selectedFilterOption === 0 && (
            <DishesDivWrapper>
              {mon_com.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {selectedFilterOption === 1 && (
            <DishesDivWrapper>
              {mon_soi.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {selectedFilterOption === 2 && (
            <DishesDivWrapper>
              {mon_rau.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {selectedFilterOption === 3 && (
            <DishesDivWrapper>
              {mon_an_kem.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {selectedFilterOption === 4 && (
            <DishesDivWrapper>
              {trang_mieng.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {selectedFilterOption === 5 && (
            <DishesDivWrapper>
              {do_uong.map((item, index) => (
                <DishCard
                  key={item.name}
                  dishName={item.name}
                  dishPrice={item.price}
                  dishImg={item.img}
                  index={index}
                />
              ))}
            </DishesDivWrapper>
          )}

          {/* Bottom contents consitsting of filter button and dish category heading */}
          <BottomContents
            setOpenFilterModal={setOpenFilterModal}
            selectFilterOption={selectOption}
            filter_options={filter_options}
            selectedFilterOption={selectedFilterOption}
            numberOfDish={numberOfDish}
          />

          {/* Filter Modal
          <>
            Modal div
            <ModalBackground
              openFilterModal={openFilterModal}
              setOpenFilterModal={setOpenFilterModal}
            />
            Bottom Content div
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
          </> */}
        </motion.main>
      </div>
    </Fragment>
  );
};

export default Menu;
