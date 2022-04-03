import React, { useEffect } from "react";
import Header from "../../components/GeneralUI/Header";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Fragment } from "react";
import Heading from "../../components/AboutUs/Heading";
import ContactElement from "../../components/AboutUs/ContactElement";
import Founder from "../../components/AboutUs/Founder";
import Philosophy from "../../components/AboutUs/Philosophy";
import Divider from "../../components/AboutUs/Divider";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const About = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "about" }));
    router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!

      if (as !== "/about" || as === "/about") {
        dispatch(uiActions.setPageExitingFrom({ exitingPage: "" }));
        setTimeout(() => {
          router.replace(as);
        }, 1100);
      }
    });
  }, []);

  return (
    <Fragment>
      <Header />

      <motion.main
        key={"about_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "about" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        className="px-5 py-20 h-[calc(100vh-64px)] overflow-y-scroll"
      >
        {/* TITLE */}
        <section className="relative max-w-[256px] h-20 mx-auto mb-24 font-semibold">
          <h1 className="absolute left-0 top-0 text-4xl">Đôi điều</h1>
          <h1 className="absolute right-0 bottom-0 text-4xl">về chúng tôi</h1>
        </section>

        <section>
          <blockquote className="mb-10 max-w-xs mx-auto text-center text-xl italic">
            <q>Mỗi ngày một bữa ăn chay để yêu thương cơ thể và Trái Đất.</q>
            <p className="text-right mr-2 mt-5 text-sm">Nhà hàng chay An Trú</p>
          </blockquote>
        </section>

        {/* GENERAL INFO */}
        <section className="mt-40">
          <Heading order="01" title="TỔNG QUAN" />
          <div className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70 md:max-w-sm">
            <p>
              Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
              nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
              hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương đại.
              Qua đó, việc ăn chay trở nên dễ dàng và gần gũi hơn với giới trẻ,
              nhằm giảm bớt yếu tố tín ngưỡng, tăng tính sở thích và lý tưởng cá
              nhân như “ăn chay vì yêu môi trường, yêu động vật”, “ăn chay vì
              sức khoẻ”, “ăn chay vì… nó ngon”.{" "}
            </p>
            <br />
            <p>
              Nhà hàng chay AN TRÚ tuy vận hành với quy mô nhỏ nhưng hứa hẹn sẽ
              mang lại chất lượng cao từ món ăn, đồ uống đến phong cách phục vụ.
              Chúng tôi luôn đề cao sự tận tâm, tận tình trong từng “điểm chạm”
              để mang đến trải nghiệm trọn vẹn cho thực khách. Tất cả nhằm phá
              bỏ quan điểm “ăn chay là phải khắc khổ” và thay bằng quan điểm mới
              “ăn chay là phải sang, xịn”.
            </p>
            <br />
            <p>
              Nhà hàng chay AN TRÚ mang âm hưởng Phật Giáo Ứng Dụng vào cuộc
              sống hiện đại, nên các chiến lược và đường lối kinh doanh đều dựa
              trên lời dạy của Đức Phật và những vị Thầy đáng kính của chúng
              tôi. Bởi lẽ đó, sự ủng hộ của quý thực khách là “tăng thượng
              duyên” cho chúng tôi thực hiện sứ mệnh “chia sẻ một chút gì với
              Nhân - Loài và Trái Đất”.
            </p>
          </div>
        </section>

        <Divider />

        {/* PHILOSOPHIES */}
        <section className="mt-16">
          <Heading order="02" title="TRIẾT LÝ" />
          <div className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70 md:max-w-sm">
            <Philosophy
              title="Tầm nhìn"
              content="Một cánh én vẫn quyết tâm kêu gọi mùa xuân."
            />
            <Philosophy
              title="Sứ mệnh"
              content="Chia sẻ một chút gì với Nhân - Loài và Trái Đất."
            />
            <Philosophy
              title="Giá trị cốt lõi"
              content="Hy sinh - Nhẫn nhục - Siêng năng - Chân thật - Tình thương."
            />
            <Philosophy
              title="Cam kết xã hội"
              content="Tuân thủ luật pháp và đạo đức bằng tình thương và sự hiểu biết."
            />
          </div>
        </section>

        <Divider />

        {/* MESSAGE */}
        <section className="mt-16">
          <Heading order="03" title="THÔNG ĐIỆP" />
          <p className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70 md:max-w-sm">
            Nếu mỗi ngày bạn ăn một bữa chay, thì trong một tháng, bạn “vô tình”
            ăn chay được 10 ngày và giảm được ⅓ lượng thịt tiêu thụ một cách dễ
            dàng. Ăn chay không khó, ăn chay là phải sang, xịn.
          </p>
        </section>

        <Divider />

        {/* FOUNDERS */}
        <section className="mt-16">
          <Heading order="04" title="CÁC NHÀ SÁNG LẬP" />
          <Founder name="Nguyễn Minh Đạt" />
          <Founder name="Phan Duy Thịnh" />
          <Founder name="Khương Chấn Huy" />
        </section>

        <Divider />

        {/* CONTACT INFO */}
        <section className="mt-16">
          <Heading order="05" title="LIÊN LẠC" />
          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 col-span-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="230 Nguyễn Sơn, phường Phú Thọ Hòa, quận Tân Phú, TP. HCM"
          />

          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 col-span-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            text="0903940533"
          />

          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 col-span-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            }
            text="nhahangchayantru.vn"
          />
          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 col-span-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            }
            text="nhahangchayantru@gmail.com"
          />

          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 col-span-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            }
            text="Fax"
          />

          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="h-7 w-7 col-span-1"
                fill="#000000"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            }
            text="Nhà hàng chay An Trú"
          />
          <ContactElement
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 col-span-1"
                fill="#000000"
              >
                <path
                  id="ins-logo"
                  key={"ins-logo"}
                  d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                ></path>
              </svg>
            }
            text="Nhà hàng chay An Trú"
          />
        </section>
      </motion.main>
    </Fragment>
  );
};

export default About;
