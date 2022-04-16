import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

{
  /* Middle content */
}
const MainContent = () => {
  const router = useRouter();

  const switchPage = (path) => {
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  return (
    <>
      <section className="relative max-w-[100vw] h-full mx-auto flex flex-col flex-shrink-0 justify-center items-center gap-y-6 text-center lg:hidden">
        <h1 className="text-3xl text-black tracking-widest font-medium md:text-4xl">
          Nhà hàng chay
        </h1>

        <div className="relative">
          <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[530px] lg:w-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="bg-black bg-opacity-40 absolute top-0 flex justify-center items-center w-full h-full">
            <h1 className="w-fit text-9xl text-white font-bold md:w-[270px] md:text-[170px]">
              An Trú
            </h1>
          </div>
        </div>

        <div>
          <h2 className="mt-16 mb-10 font-semibold text-xl md:text-2xl">
            Hân hạnh phục vụ
          </h2>
        </div>

        {/* <div className="hidden lg:inline absolute bg-black w-[2px] h-[150px] left-0 bottom-36"></div>
      <div className="hidden lg:inline absolute bg-black w-[2px] h-[150px] right-0 top-20"></div> */}

        <div className="hidden lg:inline-flex absolute -right-20 bottom-[40px] items-center justify-center gap-x-2">
          {/* lg:bg-black lg:text-white lg:px-3 lg:py-3 lg:rounded-full */}
          <p className="text-lg font-medium">Khám phá</p>
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => router.push("/menu")}
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>

      {/* Laptop view */}
      <section className="h-0 lg:relative lg:h-screen">
        <div className="hidden lg:flex mt-0 mx-auto lg:h-[calc(100vh-105.766px)] lg:max-w-[1650px] xl:max-w-[1400px]">
          <div className="flex flex-col justify-center w-1/2 px-10 mt-[10vh]">
            <h2 className="text-lg">nhà hàng chay</h2>
            <h1 className="text-9xl">An Trú</h1>
          </div>

          <div className="flex flex-col justify-center mx-auto mt-[8vh]">
            <div className="relative lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] hover:-translate-y-[40px] transition-all duration-300 cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                objectFit="cover"
                layout="fill"
              />
              <div className="relative w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center hover:text-white text-transparent transition-all duration-300">
                <p className="text-3xl">Về chúng tôi</p>
              </div>
            </div>
            <div className="relative lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] lg:-mt-[70px] xl:-mt-[120px] lg:-ml-[100px] hover:-translate-x-[40px] transition-all duration-300 cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                objectFit="cover"
                layout="fill"
              />
              <div className="relative w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center hover:text-white text-transparent transition-all duration-300">
                <p className="text-3xl">Không gian</p>
              </div>
            </div>
            <div className="relative lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] lg:-mt-[220px] lg:ml-[100px] xl:ml-[150px] hover:translate-x-[28px] transition-all duration-300 cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                objectFit="cover"
                layout="fill"
              />
              <div className="relative w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center hover:text-white text-transparent transition-all duration-300">
                <p className="text-3xl">Menu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-between absolute bottom-0 w-full mx-auto px-10 pb-[4vh]">
          <h2 className="text-center my-auto text-xl">Hân hạnh phục vụ</h2>
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
          </div>
          <h2 className="text-center my-auto text-xl">Vegetarian house</h2>
        </div>
      </section>
    </>
  );
};

export default MainContent;
