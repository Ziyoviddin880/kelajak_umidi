import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[url('/images/bgImage.jpg')] relative h-[100vh] bg-opacity-50 bg-center bg-cover bg-no-repeat z-[-10]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[-9]"></div>
      <div className="container">
        <h1 className="text-customWhite font-bold text-[40px] sm:text-[60px] md:text-[80px] xl:text-[120px] tracking-[10px] text-center opacity-80 ">
          {t("title.title1")} <br /> {t("title.title2")}
        </h1>
        <p className="text-customWhite px-2 sm:px-0 text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:mx-[200px] text-center">
          {t("title.text")}
        </p>
      </div>
    </section>
  );
};

export default Home;
