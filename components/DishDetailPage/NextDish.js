import React from "react";
import Image from "next/image";

const NextDish = () => {
  return (
    <section className="mt-40 lg:mt-0 lg:w-[2000px]">
      <h3 className="px-6 text-lg md:px-10">Món tiếp theo</h3>
      <h1 className="px-6 text-5xl mt-2 md:px-10">Cơm chiên Kim chi</h1>
      <div className="relative w-[100%] h-[34vh] mt-7 md:h-[40vh]">
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default NextDish;
