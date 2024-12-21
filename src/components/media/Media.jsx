import { useTranslation } from "react-i18next";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegram, FaInstagramSquare } from "react-icons/fa";

const Media = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <a href="tel:+998880078746" className="flex items-center group gap-2">
        <BsFillTelephoneFill className="text-customWhite dark:text-customBlack text-[20px] group-hover:text-customLightGreen transition-all duration-200" />
        <span className="text-customWhite dark:text-customBlack  group-hover:text-customLightGreen transition-all duration-200">
          +998880078746
        </span>
      </a>
      <a href="" className="flex items-center group gap-2">
        <FaTelegram className="text-customWhite dark:text-customBlack text-[20px]  group-hover:text-customLightGreen transition-all duration-200" />
        <span className="text-customWhite dark:text-customBlack  group-hover:text-customLightGreen transition-all duration-200">
          {t("telegram")}
        </span>
      </a>
      <a href="" className="flex items-center group gap-2">
        <FaInstagramSquare className="text-customWhite dark:text-customBlack  text-[20px] group-hover:text-customLightGreen transition-all duration-200" />
        <span className="text-customWhite dark:text-customBlack  group-hover:text-customLightGreen transition-all duration-200">
          {t("instagram")}
        </span>
      </a>
    </div>
  );
};

export default Media;
