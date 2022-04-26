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
import { useRouter } from "next/router";

const DishDetail = () => {
  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const onWheel = (e) => {
    // e.preventDefault();
    const container = document.getElementById("dish_detail_page");
    const containerScrollPosition =
      document.getElementById("dish_detail_page").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY * 10,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "dish_detail" }));
    router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!

      if (url !== "/menu/[slug]" || url === "/menu/[slug]") {
        dispatch(uiActions.setPageExitingFrom({ exitingPage: "" }));
        setTimeout(() => {
          router.replace(as);
        }, 1100);
      }
    });
    const slider = document.getElementById("dish_detail_page");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 5; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <motion.main
        id="dish_detail_page"
        key={"dish_detail_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "dish_detail"
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        // onWheel={onWheel}
        className="mt-[100px] pt-10 w-[100%] overflow-y-scroll lg:flex lg:overflow-y-hidden lg:cursor-pointer lg:overflow-x-auto lg:mt-0 lg:scrollbar-hide lg:h-screen lg:pt-0"
      >
        <TitleAndPrice />

        <section className="relative w-[100vw] h-[100vw] lg:w-[50vw] lg:h-screen lg:flex-shrink-0">
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
