import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "../../styles/landing.module.css";

{
  /* Middle content */
}
const MainContent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const switchPage = (path) => {
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  return (
    <div>
      <section className={styles.mobile__view__section}>
        <div className={styles.mobile__main__content__tile__div__container}>
          <div className={styles.mobile__main__content__tile__image__container}>
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              objectFit="cover"
              layout="fill"
              alt="mobile_home_page"
              className={styles.mobile__main__content__tile__image}
            />
          </div>
          <div
            className={styles.mobile__main__content__tile__text__div__container}
          >
            <p className={styles.mobile__main__content__tile__upper__text}>
              Nhà hàng chay
            </p>
            <h1 className={styles.mobile__main__content__tile__lower__text}>
              AN TRÚ
            </h1>
          </div>
        </div>

        <div className={styles.mobile__upper__green__tile}></div>

        <div className={styles.mobile__lower__green__tile}>
          <p className={styles.mobile__lower__green__tile__text}>
            Vegetarian House
          </p>
        </div>

        <div className={styles.mobile__social__links__container}>
          <Link href={"https://www.facebook.com/nhahangchayantru"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className={styles.mobile__social__link}
            >
              {" "}
              <path
                id="facebook-logo"
                key={"facebook-logo"}
                d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/antru.vegetarianhouse/?fbclid=IwAR3u84zUkEDbH8fOPmQDxstgTF6RJmu5D0MyA_20Ac4pCcs5VM063JOPqFI">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style={{ fill: "#000000" }}
              className={styles.mobile__social__link}
            >
              {" "}
              <path
                id="ins-logo"
                key={"ins-logo"}
                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
              ></path>
            </svg>
          </Link>
          <Link href="tel:0937930688">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style={{ fill: "#000000" }}
              className={`${styles.mobile__social__link} mt-1`}
            >
              <path
                id="phone-logo"
                key={"phone-logo"}
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Laptop view */}
      <section className={styles.laptop__section}>
        <div className={styles.laptop__main__content__area__div__container}>
          <div className={styles.laptop__restaurant__name__div__container}>
            <p className={styles.laptop__restaurant__name__upper__text}>
              nhà hàng chay
            </p>
            <h1 className={styles.laptop__restaurant__name__lower__text}>
              AN TRÚ
            </h1>
          </div>

          <div className={styles.laptop__image__area__div__container}>
            <div
              className={`${styles.laptop__img__div__container} hover:-translate-y-[40px] transition-all duration-300 cursor-pointer`}
            >
              <Image
                src="https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="aboutus-image"
                objectFit="cover"
                layout="fill"
                className={styles.laptop__image}
              />
              <div
                className={styles.laptop__image__overlay__div__container}
                onClick={() => {
                  dispatch(
                    uiActions.setPageExitingFrom({ exitingPage: "about" })
                  );
                  switchPage("/about");
                }}
              >
                <p className="text-3xl">Về chúng tôi</p>
              </div>
            </div>

            <div
              className={`${styles.laptop__img__div__container} lg:-mt-[70px] xl:-mt-[120px] lg:-ml-[100px] hover:-translate-x-[40px] transition-all duration-300 cursor-pointer`}
              onClick={() => {
                dispatch(
                  uiActions.setPageExitingFrom({ exitingPage: "about" })
                );
                switchPage("/about/#spaceSection");
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                alt="space-image"
                objectFit="cover"
                layout="fill"
                className={styles.laptop__image}
              />
              <div className={styles.laptop__image__overlay__div__container}>
                <p className="text-3xl">Không gian</p>
              </div>
            </div>

            <div
              className={`${styles.laptop__img__div__container} lg:-mt-[220px] lg:ml-[100px] xl:ml-[150px] hover:translate-x-[28px] transition-all duration-300 cursor-pointer`}
              onClick={() => {
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "menu" }));
                switchPage("/menu");
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="menu-img"
                objectFit="cover"
                layout="fill"
                priority={true}
                className={styles.laptop__image}
              />
              <div className={styles.laptop__image__overlay__div__container}>
                <p className="text-3xl">Menu</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.laptop__bottom__contents__div__container}>
          <p className={styles.laptop__bottom__left__text}>Hân hạnh phục vụ</p>
          <div className="my-auto">
            <Link href={"https://www.facebook.com/nhahangchayantru"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="inline-block mr-2 lg:cursor-pointer"
              >
                {" "}
                <path
                  id="facebook-logo"
                  key={"facebook-logo"}
                  d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                ></path>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/antru.vegetarianhouse/?fbclid=IwAR3u84zUkEDbH8fOPmQDxstgTF6RJmu5D0MyA_20Ac4pCcs5VM063JOPqFI">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ fill: "#000000" }}
                className="inline-block mr-2 lg:cursor-pointer"
              >
                {" "}
                <path
                  id="ins-logo"
                  key={"ins-logo"}
                  d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                ></path>
              </svg>
            </Link>
            <Link href="tel:0937930688">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ fill: "#000000" }}
                className="inline-block mt-1 lg:cursor-pointer"
              >
                <path
                  id="phone-logo"
                  key={"phone-logo"}
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </Link>
          </div>
          <p className={styles.laptop__bottom__right__text}>Vegetarian house</p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
