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
import Space from "../../components/AboutUs/Space";
import Head from "next/head";
import styles from "../../styles/about.module.css";

const About = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { href } = window.location;

  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      if (as !== "/about") {
        dispatch(uiActions.setPageExitingFrom({ exitingPage: "" }));
        setTimeout(() => {
          router.replace(as);
        }, 1100);
      }
    });
    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "about" }));
  }, [dispatch]);

  useEffect(() => {
    if (href === "http://localhost:3000/about#spaceSection") {
      document.getElementById(`spaceSection`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Về chúng tôi - Nhà hàng chay An Trú</title>
        <meta
          name="keywords"
          content="Về chúng tôi, An Trú, An Tru, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay, vegetarian restaurant, antruveggie"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Về chúng tôi" />
        <meta property="og:description" content />
        <meta property="og:url" content="https://antruveggie.vn/about" />
        {/* <meta property="og:image:secure_url" content="https://bizweb.dktcdn.net/100/360/775/themes/729132/assets/logo.png?1622064036816"></meta> */}
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        <link rel="canonical" href="https://antruveggie.vn/about" />
      </Head>
      <Header />

      <motion.main
        id="about_page"
        key={"about_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "about" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        className={styles.main}
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
          <blockquote className={styles.blockquote}>
            <q>Mỗi ngày một bữa ăn chay để yêu thương cơ thể và Trái Đất.</q>
            <p className={styles.quote__author}>Nhà hàng chay An Trú</p>
          </blockquote>
        </section>

        {/* GENERAL INFO */}
        <section className={styles.general__info__section}>
          <Heading order="01" title="TỔNG QUAN" />
          {/* <Heading order="01" title="TỔNG QUAN" /> */}
          <div className={styles.first__grid__section}>
            <p className={`${styles.grid__cell__title} border-b`}>Sức chứa</p>
            <p className={`${styles.grid__cell__description} border-b`}>
              32 chỗ
            </p>
            <p className={`${styles.grid__cell__title} border-b`}>Đóng cửa</p>
            <p className={`${styles.grid__cell__description} border-b`}>
              Thứ 2 hàng tuần (trừ các ngày Mùng 1 & 15 âm lịch)
            </p>
            <p className={`${styles.grid__cell__title} border-b`}>Giờ mở cửa</p>
            <div className={`${styles.grid__cell__description} border-b`}>
              <p>- Bữa trưa: 10:00 - 14:00 (Đơn cuối 13:30)</p>
              <p>- Bữa tối: 17:00 - 21:00 (Đơn cuối 20:30)</p>
            </div>
            <p className={styles.grid__cell__title}>Địa điểm</p>
            <p className={styles.grid__cell__description}>
              230 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, Tp.HCM
            </p>
          </div>
          <div className={styles.second__grid__section}>
            <p className={styles.grid__cell__title}>Đặt bàn</p>
            <p className={styles.grid__cell__description}>
              Nếu quý khách đi theo nhóm từ 5 đến 12 người, hoan hỉ liên hệ đặt
              bàn (qua điện thoại, Facebook, Instagram, Zalo) để chúng tôi phục
              vụ quý khách tốt hơn. Trân trọng cảm ơn quý khách
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.story__section}>
          <Heading order="02" title="CÂU CHUYỆN" />
          <div className={styles.story__section__div__container}>
            <p className={styles.story__paragraph}>
              Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
              nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
              hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương đại.
              Qua đó, việc ăn chay trở nên dễ dàng và gần gũi hơn với giới trẻ,
              nhằm giảm bớt yếu tố tín ngưỡng, tăng tính sở thích và lý tưởng cá
              nhân như “ăn chay vì yêu môi trường, yêu động vật”, “ăn chay vì
              sức khoẻ”, “ăn chay vì… nó ngon”.
            </p>
            <br />
            <p className={styles.story__paragraph}>
              Nhà hàng chay AN TRÚ tuy vận hành với quy mô nhỏ nhưng hứa hẹn sẽ
              mang lại chất lượng cao từ món ăn, đồ uống đến phong cách phục vụ.
              Chúng tôi luôn đề cao sự tận tâm, tận tình trong từng “điểm chạm”
              để mang đến trải nghiệm trọn vẹn cho thực khách. Tất cả nhằm phá
              bỏ quan điểm “ăn chay là phải khắc khổ” và thay bằng quan điểm mới
              “ăn chay là phải sang, xịn”.
            </p>
            <br />
            <p className={styles.story__paragraph}>
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
        <section className={styles.message__section}>
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            className={styles.message__section__img}
            alt="message-img"
          />
          <div className={styles.message__section__div__container}>
            <h3 className={styles.message__section__heading}>
              Chúng tôi tin rằng
            </h3>
            <q className={styles.message__section__paragraph}>
              Nếu mỗi ngày bạn ăn một bữa chay, thì trong một tháng, bạn “vô
              tình” ăn chay được 10 ngày và giảm được ⅓ lượng thịt tiêu thụ một
              cách dễ dàng. Ăn chay không khó, ăn chay là phải sang, xịn.
            </q>
          </div>
        </section>

        {/* RESTAURANT SPACE */}
        <section className={styles.space__founder__section}>
          <div id="spaceSection" className="lg:w-fit lg:mx-auto">
            <Heading order="04" title="KHÔNG GIAN" />
          </div>
          <Space />
        </section>

        {/* FOUNDERS */}
        <section className={styles.space__founder__section}>
          <div className="lg:w-fit lg:mx-auto">
            <Heading order="05" title="CÁC NHÀ SÁNG LẬP" />
          </div>
          <div className={styles.founder__div__container}>
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
