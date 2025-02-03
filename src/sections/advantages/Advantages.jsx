import { FaComputer } from "react-icons/fa6";
import { GiGrowth } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdDomain } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();
  const advantages = [
    {
      id: "01",
      icon: <FaComputer className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.first"),
      text: t("advantages.data.text.first"),
    },
    {
      id: "02",
      icon: <GiGrowth className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.second"),
      text: t("advantages.data.text.second"),
    },
    {
      id: "03",
      icon: <IoSpeedometer className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.third"),
      text: t("advantages.data.text.third"),
    },
    {
      id: "04",
      icon: <MdPriceChange className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.fourth"),
      text: t("advantages.data.text.fourth"),
    },
    {
      id: "05",
      icon: <MdOutlineSecurity className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.fiveth"),
      text: t("advantages.data.text.fiveth"),
    },
    {
      id: "06",
      icon: <FaRecycle className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.sixth"),
      text: t("advantages.data.text.sixth"),
    },
    {
      id: "07",
      icon: <RiAdminFill className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.seventh"),
      text: t("advantages.data.text.seventh"),
    },
    {
      id: "08",
      icon: <MdDomain className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.eight"),
      text: t("advantages.data.text.eight"),
    },
    {
      id: "09",
      icon: <BiSupport className="text-customDarkGreen text-[50px]" />,
      title: t("advantages.data.title.nineth"),
      text: t("advantages.data.text.nineth"),
    },
  ];

  return (
    <section className="bg-customBlack dark:bg-customWhite py-16 px-4 md:px-0">
      <div className="container">
        <h4
          data-aos="fade-up"
          className="text-[30px] md:text-[40px] text-center text-customWhite dark:text-customBlack md:mx-14 font-bold"
        >
          {t("advantages.title.text1")}
        </h4>
        <h4
          data-aos="fade-up"
          className="text-[30px] md:text-[40px] text-center font-bold text-customDarkGreen"
        >
          {t("advantages.title.text2")}
        </h4>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-fr mt-10">
          {advantages.map((advantage) => (
            <div
              data-aos="fade-up"
              key={advantage.id}
              className="p-4 sm:p-10 rounded-[30px] bg-gradient-to-r from-blue-900 to-zinc-900 dark:bg-none bg-opacity-20 flex flex-col sm:flex-row  gap-x-6 dark:border-2"
            >
              <div className="flex  sm:flex-col justify-between items-center">
                {advantage.icon}
                <code className="text-customWhite text-[25px] dark:text-customBlack font-bold">
                  {advantage.id}
                </code>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-customDarkGreen text-[20px] md:text-[25px] font-bold">
                  {advantage.title}
                </p>
                <p className="text-customWhite dark:text-customBlack    ">
                  {advantage.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
