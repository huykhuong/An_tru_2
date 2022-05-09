import React from "react";
import Image from "next/image";

const Founder = ({ name }) => {
  const styles = {
    container: "mb-20",
    img__container:
      "relative h-40 w-40 mx-auto md:h-48 md:w-48 lg:h-64 lg:w-64",
    img: "rounded-full",
    founder__name: "text-center text-xl mt-6 font-medium md:text-[22px]",
  };

  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          layout="fill"
          objectFit="contain"
          className={styles.img}
          alt="founder-img"
        />
      </div>
      <p className={styles.founder__name}>{name}</p>
    </div>
  );
};

export default Founder;
