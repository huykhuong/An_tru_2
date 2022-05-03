import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Footer = () => {
  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );
  return (
    <motion.footer
      key={"footer"}
      initial={{ visibility: "visible" }}
      animate={
        pageWillBeExitingFrom === "about"
          ? { visibility: "visible" }
          : { visibility: "hidden" }
      }
      className="bg-[#3A563E] text-white flex flex-col justify-center items-start px-5 py-10 mx-auto gap-y-10 md:flex-row md:max-w-full md:space-x-12 lg:px-20 lg:gap-x-20 xl:px-48 "
    >
      {/* The restaurant */}
      <div className="md:flex-1/4">
        <h1 className="text-2xl">Nhà hàng chay An Trú</h1>
        <p className="w-fit mt-4 text-white opacity-80 italic">
          Chân thành cảm ơn quý khách đã dành sự quan tâm đến nhà hàng của chúng
          tôi
        </p>
      </div>
      {/* Overall div of opening time and social links */}
      <div className="md:flex-1/3">
        {/* Opening time */}
        <div>
          <div>
            <h1 className="text-xl">Bữa trưa</h1>
            <p className="paragraph mt-4 text-white opacity-80">
              Từ 10h sáng - 2h chiều
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-10">Bữa tối</h1>
            <p className="paragraph mt-4 text-white opacity-80">
              Từ 5h chiều - 9h tối
            </p>
          </div>
        </div>
        {/* Social Media Links */}
        <div>
          <h1 className="text-xl mt-10">Kết nối với chúng tôi</h1>
          <div className="flex items-center justify-start gap-x-3 mt-5">
            <FaFacebookF className="w-6 h-6 " />
            <BsInstagram className="w-6 h-6 " />
          </div>
        </div>
      </div>
      {/* Brief contact info */}
      <div className="md:flex-1/3">
        <h1 className="text-xl">Quý khách có câu hỏi cho chúng tôi?</h1>
        <div className="space-y-5 pt-5">
          <div className="flex">
            <PhoneIcon className="h-6 w-6" />
            <div>
              <p className="ml-2 text-white opacity-80">000 (123) 456 7890</p>
            </div>
          </div>

          <div className="flex">
            <LocationMarkerIcon className="h-8 w-8 lg:h-7 lg:w-7" />
            <div>
              <p className="ml-2 text-white opacity-80">
                230 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, Tp.HCM
              </p>
            </div>
          </div>

          <div className="flex">
            <MailIcon className="h-6 w-6" />
            <div>
              <p className="ml-2 text-white opacity-80">
                nhahangchayantru@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
