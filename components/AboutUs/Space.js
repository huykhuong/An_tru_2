import React from "react";

const Space = () => {
  const styles = {
    overall__container: "lg:pt-40",
    mobile__container: "lg:hidden",
    mobile__space__element__container: "md:max-w-[768px] mx-auto",
    mobile__space__image: "md:w-[768px] md:mx-auto",
    mobile__space__description: "mt-5 mb-12 text-[15px]",
    laptop__container: "hidden lg:inline-block lg:w-full lg:text-center",
    laptop__left__column__image:
      "group relative w-[600px] inline-block mt-[150px] mr-[60px]",
    laptop__right__column__image:
      "group relative w-[600px] inline-block align-top",
    laptop__image__overlay:
      "opacity-0 group-hover:opacity-100 absolute bg-black bg-opacity-70 w-full top-0 bottom-0 right-0 transition-all duration-500 flex flex-col justify-center",
    laptop__image__card__horizontal_line:
      "w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto",
    laptop__detail__container: "my-[200px]",
    laptop__detail__upper__text: "text-white text-[16px] opacity-60",
    laptop__detail__lower__text: "text-white text-3xl font-semibold",
  };
  return (
    <div className={styles.container}>
      {/* Mobile view */}
      <div className={styles.mobile__container}>
        <div className={styles.mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className={styles.mobile__space__image}
            alt="space-1"
          />
          <p className={styles.mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
        <div className={styles.mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.mobile__space__image}
            alt="space-2"
          />
          <p className={styles.mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className={styles.mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.mobile__space__image}
            alt="space-3"
          />
          <p className={styles.mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className={styles.mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.mobile__space__image}
            alt="space-4"
          />
          <p className={styles.mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
      </div>

      {/* Laptop view */}
      <div className={styles.laptop__container}>
        <div className={styles.laptop__left__column__image}>
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-2"
          />
          <div className={styles.laptop__image__overlay}>
            <div className={styles.laptop__image__card__horizontal_line}></div>
            <div className={styles.laptop__detail__container}>
              <p className={styles.laptop__detail__upper__text}>Tầng 2</p>
              <p className={styles.laptop__detail__lower__text}>
                Không gian sao sao đó
              </p>
            </div>
            <div className={styles.laptop__image__card__horizontal_line}></div>
          </div>
        </div>

        <div className={styles.laptop__right__column__image}>
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="space-1"
          />
          <div className={styles.laptop__image__overlay}>
            <div className={styles.laptop__image__card__horizontal_line}></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Tầng 1</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className={styles.laptop__image__card__horizontal_line}></div>
          </div>
        </div>

        <div className={styles.laptop__left__column__image}>
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-3"
          />
          <div className={styles.laptop__image__overlay}>
            <div className={styles.laptop__image__card__horizontal_line}></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Nhà bếp</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className={styles.laptop__image__card__horizontal_line}></div>
          </div>
        </div>

        <div className={styles.laptop__right__column__image}>
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-4"
          />
          <div className={styles.laptop__image__overlay}>
            <div className={styles.laptop__image__card__horizontal_line}></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Nội thất</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className={styles.laptop__image__card__horizontal_line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
