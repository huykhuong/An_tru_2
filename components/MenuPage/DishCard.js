import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const DishCard = ({ dishName, dishImg, dishPrice }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const switchPage = (path) => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "dish_detail" }));
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  return (
    <div
      className="relative max-w-[183px] h-[300px] shadow-sm md:max-w-[248px] md:h-[380px]"
      onClick={() => switchPage("/menu/1")}
    >
      <img
        className="w-[98%] mx-auto rounded-md"
        src="https://swiperjs.com/demos/images/nature-1.jpg"
      />
      <h1 className="px-3 mt-3 text-[18px] leading-6 font-bold">{dishName}</h1>
      <p className="ml-3 absolute bottom-3 md:bottom-5">{dishPrice}</p>
    </div>
  );
};

export default DishCard;
