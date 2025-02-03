import { useTranslation } from "react-i18next";

const SeniorPrice = () => {
  const { t } = useTranslation();
  return {
    title: t("price.third.title"),
    text: t("price.third.text"),
    name: t("price.third.name"),
    security: t("price.third.security"),
    day: t("price.third.day"),
    pages: t("price.third.pages"),
    language: t("price.third.language"),
    dizayn: t("price.third.dizayn"),
    price: "$500+",
  };
};

export default SeniorPrice;
