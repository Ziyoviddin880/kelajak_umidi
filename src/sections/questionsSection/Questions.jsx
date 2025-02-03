import { useTranslation } from "react-i18next";
import Dropdown from "../../components/dropdown/Dropdown";
import { useState } from "react";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { t } = useTranslation();

  const quesAnsw = [
    {
      id: 1,
      title: t("questions.data.title.first"),
      text: t("questions.data.text.first"),
    },
    {
      id: 2,
      title: t("questions.data.title.second"),
      text: t("questions.data.text.second"),
    },
    {
      id: 3,
      title: t("questions.data.title.third"),
      text: t("questions.data.text.third"),
    },
    {
      id: 4,
      title: t("questions.data.title.fourth"),
      text: t("questions.data.text.fourth"),
    },
    {
      id: 5,
      title: t("questions.data.title.fiveth"),
      text: t("questions.data.text.fiveth"),
    },

    {
      id: 6,
      title: t("questions.data.title.sixth"),
      text: t("questions.data.text.sixth"),
    },
    {
      id: 7,
      title: t("questions.data.title.seventh"),
      text: t("questions.data.text.seventh"),
    },
    {
      id: 8,
      title: t("questions.data.title.eight"),
      text: t("questions.data.text.eight"),
    },
    {
      id: 9,
      title: t("questions.data.title.nineth"),
      text: t("questions.data.text.nineth"),
    },
    {
      id: 10,
      title: t("questions.data.title.tenth"),
      text: t("questions.data.text.tenth"),
    },
    {
      id: 11,
      title: t("questions.data.title.eleventh"),
      text: t("questions.data.text.eleventh"),
    },
    {
      id: 12,
      title: t("questions.data.title.twelveth"),
      text: t("questions.data.text.twelveth"),
    },
    {
      id: 13,
      title: t("questions.data.title.thirteenth"),
      text: t("questions.data.text.thirteenth"),
    },
    {
      id: 14,
      title: t("questions.data.title.fourteenth"),
      text: t("questions.data.text.fourteenth"),
    },
    {
      id: 15,
      title: t("questions.data.title.fifteenth"),
      text: t("questions.data.text.fifteenth"),
    },
  ];

  return (
    <section className="bg-customBlack dark:bg-customWhite py-14 px-4 md:px-0">
      <div className="container">
        <h5
          data-aos="fade-up"
          className="text-customWhite dark:text-customBlack text-[30px] md:text-[40px] text-center mb-10 font-bold"
        >
          {t("questions.title.text1")}
          <span className="text-customDarkGreen">
            {" "}
            {t("questions.title.text2")}
          </span>
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          {quesAnsw.map((item) => (
            <Dropdown
              key={item.id}
              setIsOpen={setIsOpen}
              item={item}
              isOpen={isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
