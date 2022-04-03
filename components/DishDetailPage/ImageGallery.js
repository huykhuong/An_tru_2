import React from "react";
import Image from "next/image";

export const ImageGallery = ({ img1, img2, img3, img4 }) => {
  return (
    <section className="relative mt-10 h-fit lg:w-auto lg:h-screen lg:flex-shrink-0 lg:mt-0">
      <h2 className="text-2xl mb-14 px-5 md:px-10 lg:hidden">Hình ảnh</h2>

      <div className="inline-block lg:align-top">
        <div className="relative w-[72vw] h-[100vw] md:w-[500px] md:h-[600px] lg:w-[64vh] lg:h-[calc(100vh-210px)]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-[-34vw] ml-[28vw] md:ml-[calc(100vw-500px)] lg:relative inline-block lg:mt-[210px] lg:ml-[-10vw]">
        <div className="relative w-[72vw] h-[100vw] md:w-[500px] md:h-[600px] lg:w-[64vh] lg:h-[calc(100vh-210px)]">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-[100px] w-full inline-block lg:relative lg:w-fit lg:mt-0 lg:ml-[400px] lg:top-[15vh] lg:bottom-[15vh] lg:align-top">
        <div className="relative w-[64vw] h-[88vw] md:w-[500px] md:h-[650px] lg:w-[50vh] lg:h-[calc(100vh-30vh)] mx-auto">
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-[80px] inline-block lg:relative lg:mt-0 lg:ml-[200px] lg:top-[5vh] lg:bottom-[35vh] lg:align-top">
        <div className="relative w-[100vw] h-[100vw] md:h-[550px] lg:w-[50vh] lg:h-[calc(100vh-40vh)] mx-auto">
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
