import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[18px] transition-all duration-200 ${
            isActive
              ? "text-customDarkGreen"
              : "text-customWhite dark:text-customBlack hover:text-customLightGreen dark:hover:text-customLightGreen  "
          }`
        }
      >
        {t("homePage")}
      </NavLink>
      <NavLink
        to="services"
        className={({ isActive }) =>
          `text-[18px] transition-all duration-200 ${
            isActive
              ? "text-customDarkGreen"
              : "text-customWhite dark:text-customBlack hover:text-customLightGreen dark:hover:text-customLightGreen  "
          }`
        }
      >
        {t("services")}
      </NavLink>
      <NavLink
        to="prices"
        className={({ isActive }) =>
          `text-[18px] transition-all duration-200 ${
            isActive
              ? "text-customDarkGreen"
              : "text-customWhite dark:text-customBlack hover:text-customLightGreen dark:hover:text-customLightGreen  "
          }`
        }
      >
        {t("prices")}
      </NavLink>
      <NavLink
        to="aboutUs"
        className={({ isActive }) =>
          `text-[18px] transition-all duration-200 ${
            isActive
              ? "text-customDarkGreen"
              : "text-customWhite dark:text-customBlack hover:text-customLightGreen dark:hover:text-customLightGreen  "
          }`
        }
      >
        {t("aboutUs")}
      </NavLink>
    </div>
  );
};

export default Nav;
