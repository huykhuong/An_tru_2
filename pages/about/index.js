import React, { useEffect } from "react";
import Header from "../../components/GeneralUI/Header";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Fragment } from "react";

const About = () => {
  const dispatch = useDispatch();

  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "about" }));
  }, []);

  return (
    <Fragment>
      <Header />

      {pageWillBeExitingFrom == "about" && (
        <main className="pt-20 h-[calc(100vh-64px)] overflow-y-scroll">
          {/* TITLE */}
          <section className="relative max-w-[256px] h-20 mx-auto mb-24 font-semibold">
            <h1 className="absolute left-0 top-0 text-4xl">Đôi điều</h1>
            <h1 className="absolute right-0 bottom-0 text-4xl">về chúng tôi</h1>
          </section>

          <blockquote className="mb-10 max-w-xs mx-auto text-center text-xl italic">
            <q>Mỗi ngày một bữa ăn chay để yêu thương cơ thể và Trái Đất.</q>
            <p className="text-right mr-2 mt-5 text-sm">Nhà hàng An Trú</p>
          </blockquote>

          {/* GENERAL INFO */}
          <section className="mt-40">
            <div className="flex flex-col gap-y-2 items-center mb-10">
              <h2 className="text-7xl">01</h2>
              <h2 className="text-xl font-semibold italic">TỔNG QUAN</h2>
            </div>
            <div className="max-w-xs mx-auto leading-8 text-[17px] text-black text-opacity-70">
              <p>
                Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
                nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
                hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương
                đại. Qua đó, việc ăn chay trở nên dễ dàng và gần gũi hơn với
                giới trẻ, nhằm giảm bớt yếu tố tín ngưỡng, tăng tính sở thích và
                lý tưởng cá nhân như “ăn chay vì yêu môi trường, yêu động vật”,
                “ăn chay vì sức khoẻ”, “ăn chay vì… nó ngon”.{" "}
              </p>
              <br />
              <p>
                Nhà hàng chay AN TRÚ tuy vận hành với quy mô nhỏ nhưng hứa hẹn
                sẽ mang lại chất lượng cao từ món ăn, đồ uống đến phong cách
                phục vụ. Chúng tôi luôn đề cao sự tận tâm, tận tình trong từng
                “điểm chạm” để mang đến trải nghiệm trọn vẹn cho thực khách. Tất
                cả nhằm phá bỏ quan điểm “ăn chay là phải khắc khổ” và thay bằng
                quan điểm mới “ăn chay là phải sang, xịn”.
              </p>
              <br />
              <p>
                Nhà hàng chay AN TRÚ mang âm hưởng Phật Giáo Ứng Dụng vào cuộc
                sống hiện đại, nên các chiến lược và đường lối kinh doanh đều
                dựa trên lời dạy của Đức Phật và những vị Thầy đáng kính của
                chúng tôi. Bởi lẽ đó, sự ủng hộ của quý thực khách là “tăng
                thượng duyên” cho chúng tôi thực hiện sứ mệnh “chia sẻ một chút
                gì với Nhân - Loài và Trái Đất”.
              </p>
            </div>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default About;
