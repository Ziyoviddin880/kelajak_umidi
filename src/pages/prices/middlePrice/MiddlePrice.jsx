import { useTranslation } from "react-i18next";

const MiddlePrice = () => {
  const { t } = useTranslation();
  return {
    title: t("price.second.title"),
    text: t("price.second.text"),
    name: t("price.second.name"),
    security: t("price.second.security"),
    day: t("price.second.day"),
    pages: t("price.second.pages"),
    price: "$250",
  };
};

export default MiddlePrice;
