import React, { useEffect } from "react";
import Header from "../../components/GeneralUI/Header";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Fragment } from "react";
import Heading from "../../components/AboutUs/Heading";
import Founder from "../../components/AboutUs/Founder";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "../../components/GeneralUI/Footer";

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
        id="about_page"
        key={"about_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "about" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        className="px-10 mt-40 lg:max-w-[1650px] xl:max-w-[1400px] mx-auto lg:px-10 lg:mb-[300px]"
      >
        {/* TITLE */}
        {/* <section className="relative max-w-[256px] lg:max-w-[350px] h-20 lg:h-[100px] mx-auto mb-24 lg:mb-[200px]">
          <h1 className="absolute left-0 top-0 text-4xl lg:text-5xl">
            Đôi điều
          </h1>
          <h1 className="absolute right-0 bottom-0 text-4xl lg:text-5xl">
            về chúng tôi
          </h1>
        </section> */}

        <section>
          <blockquote className="mb-10 max-w-xs mx-auto text-center text-xl italic lg:text-3xl lg:max-w-sm">
            <q>Mỗi ngày một bữa ăn chay để yêu thương cơ thể và Trái Đất.</q>
            <p className="text-right mr-2 mt-5 text-sm lg:text-lg">
              Nhà hàng chay An Trú
            </p>
          </blockquote>
        </section>

        {/* GENERAL INFO */}
        <section className="mt-[300px] lg:flex lg:space-x-20 lg:justify-between">
          <Heading order="01" title="TỔNG QUAN" />
          {/* <Heading order="01" title="TỔNG QUAN" /> */}
          <div className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70 border-b md:max-w-sm grid grid-cols-2 lg:mx-0">
            <p className="border-b font-bold text-lg py-5">Sức chứa</p>
            <p className="border-b text-lg py-5">32 chỗ</p>
            <p className="border-b font-bold text-lg py-5">Đóng cửa</p>
            <p className="border-b text-lg py-5">
              Thứ 2 hàng tuần (trừ các ngày Mùng 1 & 15 âm lịch)
            </p>
            <p className="border-b font-bold text-lg py-5">Giờ mở cửa</p>
            <div className="border-b text-lg py-5">
              <p>- Bữa trưa: 10:00 - 14:00 (Đơn cuối 13:30)</p>
              <p>- Bữa tối : 17:00 - 21:00 (Đơn cuối 20:30)</p>
            </div>
            <p className="font-bold text-lg py-5">Địa điểm</p>
            <p className="text-lg py-5">Lầu 1 & 2, 230 Nguyễn Sơn, Tân Phú</p>
          </div>
          <div className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70 md:max-w-sm grid grid-cols-2 lg:mx-0">
            <p className="font-bold text-lg py-5">Đặt bàn</p>
            <p className="text-lg py-5">
              Nếu quý khách đi theo nhóm từ 5 đến 12 người, hoan hỉ liên hệ đặt
              bàn (qua điện thoại, Facebook, Instagram, Zalo) để chúng tôi phục
              vụ quý khách tốt hơn. Trân trọng cảm ơn quý khách
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="mt-[250px] lg:flex lg:flex-row-reverse lg:mt-[400px]">
          <Heading order="02" title="CÂU CHUYỆN" />
          <div className="leading-8 lg:columns-2 lg:text-lg">
            <p className="lg:pr-10">
              Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
              nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
              hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương đại.
              Qua đó, việc ăn chay trở nên dễ dàng và gần gũi hơn với giới trẻ,
              nhằm giảm bớt yếu tố tín ngưỡng, tăng tính sở thích và lý tưởng cá
              nhân như “ăn chay vì yêu môi trường, yêu động vật”, “ăn chay vì
              sức khoẻ”, “ăn chay vì… nó ngon”.{" "}
            </p>
            <br />
            <p className="mb-auto align-top p content-start items-start lg:pr-10">
              Nhà hàng chay AN TRÚ tuy vận hành với quy mô nhỏ nhưng hứa hẹn sẽ
              mang lại chất lượng cao từ món ăn, đồ uống đến phong cách phục vụ.
              Chúng tôi luôn đề cao sự tận tâm, tận tình trong từng “điểm chạm”
              để mang đến trải nghiệm trọn vẹn cho thực khách. Tất cả nhằm phá
              bỏ quan điểm “ăn chay là phải khắc khổ” và thay bằng quan điểm mới
              “ăn chay là phải sang, xịn”.
            </p>
            <br />
            <p className="lg:pr-10">
              Nhà hàng chay AN TRÚ mang âm hưởng Phật Giáo Ứng Dụng vào cuộc
              sống hiện đại, nên các chiến lược và đường lối kinh doanh đều dựa
              trên lời dạy của Đức Phật và những vị Thầy đáng kính của chúng
              tôi. Bởi lẽ đó, sự ủng hộ của quý thực khách là “tăng thượng
              duyên” cho chúng tôi thực hiện sứ mệnh “chia sẻ một chút gì với
              Nhân - Loài và Trái Đất”.
            </p>
          </div>
        </section>

        {/* <Divider /> */}

        {/* MESSAGE */}
        <section className="md:text-center mt-[250px] lg:mt-[400px]">
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            className="h-[550px] md:h-[700px] md:w-[450px] md:inline-block md:align-top"
          />
          <div className="md:bg-[#3A563E] md:bg-opacity-90 md:-ml-[320px] md:mt-[150px]  md:inline-block lg:-ml-[150px] lg:mt-[100px]">
            <h3 className="my-10 font-semibold text-3xl md:my-0 md:text-4xl md:p-36 md:text-white">
              Chúng tôi tin rằng
            </h3>
            <q className="max-w-xs mx-auto leading-8 lg;text-opacity-70 md:max-w-sm lg:text-2xl md:text-white md:flex md:items-center md:rounded-xl md:mb-40">
              Nếu mỗi ngày bạn ăn một bữa chay, thì trong một tháng, bạn “vô
              tình” ăn chay được 10 ngày và giảm được ⅓ lượng thịt tiêu thụ một
              cách dễ dàng. Ăn chay không khó, ăn chay là phải sang, xịn.
            </q>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="mt-[250px] lg:mt-[400px]">
          <div className="lg:w-fit lg:mx-auto">
            <Heading order="04" title="CÁC NHÀ SÁNG LẬP" />
          </div>
          <div className="lg:flex lg:justify-evenly lg:mt-40">
            <Founder name="Nguyễn Minh Đạt" />
            <Founder name="Phan Duy Thịnh" />
            <Founder name="Khương Chấn Huy" />
          </div>
        </section>
      </motion.main>

      {/* CONTACT INFO */}
      <Footer />
    </Fragment>
  );
};

export default About;

{
  /* PHILOSOPHIES
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
        </section> */
}
