import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[url('./src/assets/bgImage.jpg')] pt-10 relative h-[60vh] md:h-[90vh] bg-opacity-50 bg-center bg-cover bg-no-repeat ">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm "></div>
      <div className="container">
        <h1
          data-aos="fade-right"
          className="text-customWhite font-bold text-[35px] sm:text-[60px] md:text-[80px] xl:text-[120px] tracking-[10px] text-center opacity-80  "
        >
          {t("title.title1")} <br /> {t("title.title2")}
        </h1>
        <p
          data-aos="fade-right"
          className="text-customWhite my-3  px-2 opacity-80 sm:px-0 text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:mx-[200px] text-center"
        >
          {t("title.text")}
        </p>
        <div className="text-center opacity-80 mt-10 ">
          <Button type="button">{t("apply")}</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
