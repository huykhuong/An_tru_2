import React from "react";
import Image from "next/image";

export const ImageGallery = ({ img1, img2, img3, img4 }) => {
  return (
    <section className="relative mt-10 h-fit lg:w-[2000px]">
      <h2 className="text-2xl mb-14 px-5 md:px-10">Hình ảnh</h2>

      <div className="md:absolute md:left-[15vw]">
        <div className="relative w-[30vh] h-[40vh] md:w-[32vh] md:h-[42vh]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute right-0 top-[320px] md:right-[10vw]">
        <div className="relative w-[28vh] h-[40vh] md:w-[30vh] md:h-[42vh]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-[380px] md:mt-[850px]">
        <div className="relative w-[25vh] h-[35vh] md:w-[27vh] md:h-[37vh] mx-auto">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-[80px]">
        <div className="relative w-[40vh] h-[28vh] md:w-[42vh] md:h-[30vh] mx-auto">
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
