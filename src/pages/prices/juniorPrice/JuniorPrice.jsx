import { useTranslation } from "react-i18next";

const JuniorPrice = () => {
  const { t } = useTranslation();
  return {
    title: t("price.first.title"),
    text: t("price.first.text"),
    name: t("price.first.name"),
    security: t("price.first.security"),
    day: t("price.first.day"),
    pages: t("price.first.pages"),
    price: "$100",
  };
};

export default JuniorPrice;
