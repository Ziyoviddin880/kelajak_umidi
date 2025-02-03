import React from "react";
import { useTranslation } from "react-i18next";

const PriceTitle = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-customBlack dark:bg-customWhite">
      <div className="container px-3 lg:px-0">
        <p className="text-customWhite dark:text-customBlack font-bold text-[30px] lg:text-[40px] text-center">
          {t("priceTitle")}
        </p>
      </div>
    </section>
  );
};

export default PriceTitle;
