import React from "react";
import Image from "next/image";
{
  /* Middle content */
}
const MainContent = () => {
  return (
    <section className="relative max-w-[100vw] mt-20 mx-auto flex flex-col justify-center items-center gap-y-6 text-center md:justify-center lg:max-w-[750px]">
      <h1 className="text-3xl text-black tracking-widest font-medium md:text-4xl">
        Nhà hàng chay
      </h1>

      <div className="relative">
        <div className="relative w-[75vw] h-[50vh] md:w-[450px] md:h-[530px] lg:w-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-black bg-opacity-40 absolute top-0 flex justify-center items-center w-full h-full">
          <h1 className="w-fit text-9xl text-white font-bold md:w-[270px] md:text-[170px]">
            An Trú
          </h1>
        </div>
      </div>

      <div>
        <h2 className="mt-16 mb-16 font-semibold text-xl md:mt-24 md:text-2xl">
          Hân hạnh phục vụ
        </h2>
      </div>

      <div className="hidden lg:inline absolute bg-black w-[2px] h-[150px] left-0 bottom-36"></div>
      <div className="hidden lg:inline absolute bg-black w-[2px] h-[150px] right-0 top-20"></div>

      <div className="hidden lg:inline-flex absolute right-0 bottom-[62px] items-center justify-center">
        {/* lg:bg-black lg:text-white lg:px-3 lg:py-3 lg:rounded-full */}
        {/* <p className="text-lg ">Khám phá</p> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default MainContent;
