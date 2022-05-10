import React from "react";
import styles from "../../styles/about.module.css";

const Space = () => {
  return (
    <div className={styles.space__overall__container}>
      {/* Mobile view */}
      <div className={styles.space__mobile__container}>
        <div className={styles.space__mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className={styles.space__mobile__space__image}
            alt="space-1"
          />
          <p className={styles.space__mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
        <div className={styles.space__mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.space__mobile__space__image}
            alt="space-2"
          />
          <p className={styles.space__mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className={styles.space__mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.space__mobile__space__image}
            alt="space-3"
          />
          <p className={styles.space__mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className={styles.space__mobile__space__element__container}>
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.space__mobile__space__image}
            alt="space-4"
          />
          <p className={styles.space__mobile__space__description}>
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
      </div>

      {/* Laptop view */}
      <div className={styles.space__laptop__container}>
        <div className={`${styles.space__laptop__left__column__image} group`}>
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-2"
          />
          <div
            className={`${styles.space__laptop__image__overlay} group-hover:opacity-100`}
          >
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
            <div className={styles.space__laptop__detail__container}>
              <p className={styles.space__laptop__detail__upper__text}>
                Tầng 2
              </p>
              <p className={styles.space__laptop__detail__lower__text}>
                Không gian sao sao đó
              </p>
            </div>
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
          </div>
        </div>

        <div className={`${styles.space__laptop__right__column__image} group`}>
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="space-1"
          />
          <div
            className={`${styles.space__laptop__image__overlay} group-hover:opacity-100`}
          >
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
            <div className={styles.space__laptop__detail__container}>
              <p className={styles.space__laptop__detail__upper__text}>
                Tầng 1
              </p>
              <p className={styles.space__laptop__detail__lower__text}>
                Không gian sao sao đó
              </p>
            </div>
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
          </div>
        </div>

        <div className={`${styles.space__laptop__left__column__image} group`}>
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-3"
          />
          <div
            className={`${styles.space__laptop__image__overlay} group-hover:opacity-100`}
          >
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
            <div className={styles.space__laptop__detail__container}>
              <p className={styles.space__laptop__detail__upper__text}>
                Nhà bếp
              </p>
              <p className={styles.space__laptop__detail__lower__text}>
                Không gian sao sao đó
              </p>
            </div>
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
          </div>
        </div>

        <div className={`${styles.space__laptop__right__column__image} group`}>
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-4"
          />
          <div
            className={`${styles.space__laptop__image__overlay} group-hover:opacity-100`}
          >
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
            <div className={styles.space__laptop__detail__container}>
              <p className={styles.space__laptop__detail__upper__text}>
                Nội thất
              </p>
              <p className={styles.space__laptop__detail__lower__text}>
                Không gian sao sao đó
              </p>
            </div>
            <div
              className={styles.space__laptop__image__card__horizontal_line}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
