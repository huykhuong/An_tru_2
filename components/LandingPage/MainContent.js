import React from "react";
import Image from "next/image";
{
  /* Middle content */
}
const MainContent = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-y-8 text-center">
      <h1 className="text-4xl text-black font-medium">Nhà hàng chay</h1>
      <div className="relative w-[80%] h-60">
        <Image
          src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          className="object-cover"
          layout="fill"
        />
      </div>

      <h1 className="text-4xl text-black font-medium">An Trú</h1>
    </div>
  );
};

export default MainContent;
