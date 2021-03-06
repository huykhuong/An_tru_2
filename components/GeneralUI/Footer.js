import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styles from "../../styles/general_component.module.css";

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
      className={styles.footer}
    >
      <div className={styles.footer__inner__container}>
        {/* The restaurant */}
        <div className="md:col-span-2 lg:col-span-3">
          <h1 className={styles.footer__restaurant__name}>
            Nhà hàng chay An Trú
          </h1>
          <p className={styles.footer__thank__you__message}>
            Chân thành cảm ơn quý khách đã dành sự quan tâm đến nhà hàng của
            chúng tôi
          </p>
        </div>

        {/* Overall div of opening time and social links */}
        <div className="md:col-span-2 lg:col-span-2 lg:w-fit lg:mx-auto">
          {/* Opening time */}
          <div>
            <div>
              <h1 className="text-xl">Bữa trưa</h1>
              <p className={styles.footer__opening__hours__text}>
                Từ 10h sáng - 2h chiều
              </p>
            </div>
            <div>
              <h1 className="text-xl mt-10">Bữa tối</h1>
              <p className={styles.footer__opening__hours__text}>
                Từ 5h chiều - 9h tối
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className={styles.footer__social__heading}>
              Kết nối với chúng tôi
            </h1>
            <div className={styles.footer__social__icon__div__container}>
              <FaFacebookF className={styles.footer__social__icon} />
              <BsInstagram className={styles.footer__social__icon} />
            </div>
          </div>
        </div>

        {/* Brief contact info */}
        <div className="md:col-span-4 lg:col-span-4 ">
          <h1 className="text-xl">Quý khách có câu hỏi cho chúng tôi?</h1>
          <div className={styles.footer__contact__info__div__container}>
            <div className="flex">
              <PhoneIcon className="h-6 w-6" />
              <div>
                <p className={styles.footer__contact__info__text}>
                  000 (123) 456 7890
                </p>
              </div>
            </div>

            <div className="flex">
              <LocationMarkerIcon className="h-8 w-8 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              <div>
                <p className={styles.footer__contact__info__text}>
                  230 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, Tp.HCM
                </p>
              </div>
            </div>

            <div className="flex">
              <MailIcon className="h-6 w-6" />
              <div>
                <p className={styles.footer__contact__info__text}>
                  nhahangchayantru@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
