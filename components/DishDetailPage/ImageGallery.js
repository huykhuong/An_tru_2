import React from "react";
import Image from "next/image";

export const ImageGallery = ({ img1, img2, img3, img4 }) => {
  return (
    <section className="relative mt-10 h-fit lg:w-[2300px] lg:h-screen lg:flex-shrink-0 lg:mt-0">
      <h2 className="text-2xl mb-14 px-5 md:px-10 lg:hidden">Hình ảnh</h2>

      <div className="inline-block">
        <div className="relative w-[30vh] h-[40vh] md:w-[32vh] md:h-[42vh] lg:w-[50vh] lg:h-[60vh]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute inline-block lg:ml-[-5vw] lg:bottom-0">
        <div className="relative w-[28vh] h-[40vh] md:w-[30vh] md:h-[42vh] lg:w-[50vh] lg:h-[60vh]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute inline-block lg:ml-[70vh] lg:top-1/2 lg:-translate-y-1/2">
        <div className="relative w-[25vh] h-[35vh] md:w-[27vh] md:h-[37vh] lg:w-[40vh] lg:h-[50vh] mx-auto">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute inline-block lg:ml-[120vh] lg:top-[50px] ">
        <div className="relative w-[40vh] h-[28vh] md:w-[42vh] md:h-[30vh] lg:w-[50vh] lg:h-[60vh] mx-auto">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};
