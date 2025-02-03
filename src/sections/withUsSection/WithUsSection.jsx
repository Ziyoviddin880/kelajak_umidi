import { GiBedLamp } from "react-icons/gi";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { SiInductiveautomation } from "react-icons/si";
import { RiAdvertisementFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const WithUsSection = () => {
  const { t } = useTranslation();

  const info = [
    {
      id: 1,
      icon: <GiBedLamp className="text-[80px] text-customDarkGreen" />,
      title: t("withUs.data.first"),
    },
    {
      id: 2,
      icon: (
        <SiLinuxprofessionalinstitute className="text-[80px] text-customDarkGreen" />
      ),
      title: t("withUs.data.second"),
    },
    {
      id: 3,
      icon: (
        <BsFileEarmarkSpreadsheetFill className="text-[80px] text-customDarkGreen" />
      ),
      title: t("withUs.data.third"),
    },
    {
      id: 4,
      icon: (
        <SiInductiveautomation className="text-[80px] text-customDarkGreen" />
      ),
      title: t("withUs.data.fourt"),
    },
    {
      id: 5,
      icon: (
        <RiAdvertisementFill className="text-[80px] text-customDarkGreen" />
      ),
      title: t("withUs.data.fiveth"),
    },
    {
      id: 6,
      icon: (
        <IoIosInformationCircle className="text-[80px] text-customDarkGreen" />
      ),
      title: t("withUs.data.sixth"),
    },
  ];
  return (
    <section className="bg-customBlack dark:bg-customWhite py-16 px-4 md:px-0">
      <div className="container">
        <h4
          data-aos="fade-up"
          className=" text-[30px] sm:text-[40px] text-center text-customWhite dark:text-customBlack font-bold"
        >
          {t("withUs.title1")}
          <span className="text-customDarkGreen ">{t("withUs.title2")}</span>
        </h4>
        <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-y-16  gap-16 auto-rows-fr mt-10">
          {info.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 sm:p-10 rounded-[30px] bg-gradient-to-r from-zinc-900 to-blue-900 dark:bg-none dark:border-2 bg-opacity-20 text-center"
            >
              <div className=" bg-customWhite p-4 mt-[-60px] rounded-[20px] w-[112px] mx-auto dark:border-2">
                {item.icon}
              </div>
              <p className="text-[20px] sm:text-[30px] text-customWhite mt-5 dark:text-customBlack">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WithUsSection;
