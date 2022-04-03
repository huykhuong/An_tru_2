import React from "react";
import Image from "next/image";

const NextDish = () => {
  return (
    <section className="mt-40 mb-20 mt lg:mt-0 lg:w-full lg:h-full lg:flex-shrink-0 lg:flex lg:justify-center lg:items-center">
      <div className="group lg:flex lg:flex-col lg:justify-center lg:h-fit">
        <h1 className="px-6 text-lg md:px-10 lg:text-xl lg:text-center">
          Món tiếp theo
        </h1>
        <h1 className="px-6 text-5xl mt-2 md:px-10 lg:text-center lg:text-[90px] lg:group-hover:scale-110 transition-all duration-700 ease-[0.85, 0.01, 0.4, 1] lg:cursor-pointer">
          Cơm chiên Kim chi
        </h1>
      </div>
      {/* <div className="relative w-[100%] h-[34vh] mt-7 md:h-[40vh] lg:w-1/2 lg:h-screen lg:mt-0 lg:invisible">
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
    </section>
  );
};

export default NextDish;
