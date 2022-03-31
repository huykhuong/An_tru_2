import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const DishCard = ({ dishName, dishImg, dishPrice, index }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const switchPage = (path) => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "dish_detail" }));
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  return (
    <>
      <div
        className="relative max-w-[183px] h-[300px] shadow-sm md:max-w-[248px] md:h-[380px] lg:max-w-[300px] lg:h-[400px] 2xl:max-w-[350px] 2xl:h-[450px] lg:hidden"
        onClick={() => switchPage("/menu/1")}
      >
        <img
          className="w-[98%] mx-auto rounded-md"
          src="https://swiperjs.com/demos/images/nature-1.jpg"
        />
        <h1 className="px-3 mt-3 text-[18px] leading-6 font-bold">
          {dishName}
        </h1>
        <p className="ml-3 absolute bottom-3 md:bottom-5">{dishPrice}</p>
      </div>

      <div className="hidden lg:flex items-center justify-around">
        <div className="group min-w-[500px] h-full flex flex-shrink-0 items-center hover:bg-[url('https://raw.githubusercontent.com/taimoorshahzada/Gallery-Landing-Page-Website-using-HTML-CSS-and-GSAP/main/3.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="w-[100%] h-full pt-[64px] flex flex-col items-center justify-between border-l-[1px] border-[#272727] border-opacity-20">
            <div>
              <h1 className="w-[300px] text-[3rem] text-center font-light uppercase transition-colors group-hover:text-white duration-[600ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)]">
                {dishName}
                {/* The <br />
                night <br />
                watch */}
              </h1>
              {/* <p className="px-[8px] text-[12px] tracking-[1px] transition-colors group-hover:text-white duration-[600ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)]">
                MDCLIIX
              </p> */}
            </div>
            <div className="text-[30vh] mb-[50px] text-[#8f0000] transition-colors group-hover:text-white duration-[600ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)]">
              {index + 1}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;
