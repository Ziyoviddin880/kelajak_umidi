import {
  FaLocationDot,
  FaSquareInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbClockHour4Filled } from "react-icons/tb";

import Contact from "../../components/footerComponents/Contact";

const Footer = () => {
  return (
    <footer className="bg-customBlack dark:bg-customWhite px-4 md:px-0 pt-12">
      <div className="container">
        <h3 className="text-customWhite dark:text-customBlack text-[30px]">
          Kontaktlar
        </h3>
        <div className="flex items-center flex-wrap flex-col-reverse md:flex-row gap-y-6 justify-between">
          <div className="w-full mx-auto md:mx-0 lg:w-[48%] grid grid-cols-1 md:grid-cols-2  gap-y-8">
            <Contact
              title="Manzil"
              icon={
                <FaLocationDot className="text-customWhite dark:text-customBlack text-[20px]" />
              }
            >
              <p className="text-customWhite dark:text-customBlack mt-2">
                Toshkent shahar Chilonzor tumani
              </p>
            </Contact>
            <Contact
              title="Telefon raqam"
              icon={
                <BsFillTelephoneInboundFill className="text-customWhite dark:text-customBlack text-[20px]" />
              }
            >
              <p className="text-customWhite dark:text-customBlack mt-2">
                +998 88 007 87 46
              </p>
            </Contact>
            <Contact
              title="Ijtimoiy tarmoqlar"
              icon={
                <IoShareSocialSharp className="text-customWhite dark:text-customBlack text-[20px]" />
              }
            >
              <div className="text-customWhite dark:text-customBlack flex gap-3 mt-2">
                <a href="">
                  <FaSquareInstagram />
                </a>
                <a href="">
                  <FaTelegram />
                </a>
                <a href="">
                  <FaYoutube />
                </a>
              </div>
            </Contact>
            <Contact
              title="Ish vaqti"
              icon={
                <TbClockHour4Filled className="text-customWhite dark:text-customBlack text-[20px]" />
              }
            >
              <p className="text-customWhite dark:text-customBlack mt-2">
                09:00 -18:00 Dushanba-Shanba
              </p>
            </Contact>
          </div>
          <div className="w-full lg:w-[48%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.9495127701474!2d69.17988330463297!3d41.29731519565107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae897ab6ed07b5%3A0x7d854f9a392966d3!2z0YPQu9C40YbQsCDQpNC-0LfQuNC70YLQtdC_0LAgMTgtMjEsIDEwMDE3Mywg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1736147142998!5m2!1sru!2s"
              className="rounded-3xl border"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-customWhite dark:text-customBlack border-t mt-4 py-6 text-[18px]">
        KELAJAK UMIDI © 2025
      </div>
    </footer>
  );
};

export default Footer;
