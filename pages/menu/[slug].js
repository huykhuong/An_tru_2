import Image from "next/image";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/GeneralUI/Header";
import { motion } from "framer-motion";
import TitleAndPrice from "../../components/DishDetailPage/TitleAndPrice";
import Ingredients from "../../components/DishDetailPage/Ingredients";
import AllergyWarning from "../../components/DishDetailPage/AllergyWarning";
import { ImageGallery } from "../../components/DishDetailPage/ImageGallery";
import NextDish from "../../components/DishDetailPage/NextDish";
import { uiActions } from "../../store/ui-slice";

const DishDetail = () => {
  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "dish_detail" }));
  }, []);

  return (
    <Fragment>
      <Header />

      <motion.main
        key={"dish_detail_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "dish_detail"
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        className="pt-10 h-[calc(100vh-64px)] overflow-y-scroll"
      >
        <TitleAndPrice />

        <section className="relative w-[100%] h-[40vh]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </section>

        <Ingredients />

        <AllergyWarning />

        {/* Gallery */}
        <ImageGallery />

        {/* NEXT DISH */}
        <NextDish />
      </motion.main>
    </Fragment>
  );
};

export default DishDetail;
