import React from "react";
import Image from "next/image";
{
  /* Middle content */
}
const MainContent = () => {
  return (
    <section className="relative max-w-[90vw] mx-auto h-[calc(100vh-144px)] flex flex-col justify-start items-center gap-y-8 text-center mt-20">
      <h1 className="text-3xl text-black tracking-widest font-medium">
        Nhà hàng chay
      </h1>
      <div className="relative">
        <div className="relative w-[75vw] h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-black bg-opacity-40 absolute top-0 flex justify-center items-center w-full h-full">
          <h1 className="w-fit text-9xl text-white font-bold">An Trú</h1>
        </div>
      </div>
      <div>
        <h2 className="mt-14 font-semibold text-xl">Hân hạnh phục vụ</h2>
      </div>
      <div className="absolute bg-black w-[2px] h-32 left-0 bottom-20"></div>
    </section>
  );
};

export default MainContent;
