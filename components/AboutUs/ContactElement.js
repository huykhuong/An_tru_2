import React from "react";

const styles = {
  container:
    "max-w-[300px] mx-auto grid grid-cols-5 mb-8 items-center md:max-w-sm",
  contact__info: "col-span-4",
};

const ContactElement = ({ svgPath, text }) => {
  return (
    <div className={styles.container}>
      {svgPath}
      <p className={styles.contact__info}>{text}</p>
    </div>
  );
};

export default ContactElement;
