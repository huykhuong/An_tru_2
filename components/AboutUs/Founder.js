import React from "react";
import Image from "next/image";

const Founder = ({ name }) => {
  return (
    <div className="mb-20">
      <div className="relative h-40 w-40 mx-auto md:h-48 md:w-48">
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <p className="text-center text-xl mt-6 font-medium md:text-[22px]">
        {name}
      </p>
    </div>
  );
};

export default Founder;
