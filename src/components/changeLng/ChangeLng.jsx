import { useTranslation } from "react-i18next";
import Uz from "../../icons/Uz";
import Ru from "../../icons/Ru";
import En from "../../icons/En";
import { useState } from "react";

const ChangeLng = () => {
  const options = [
    { label: "UZ", img: <Uz /> },
    { label: "УЗ", img: <Uz /> },
    { label: "EN", img: <En /> },
    { label: "RU", img: <Ru /> },
  ];
  const { i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const [selected, setSelected] = useState(
    options.find((item) => {
      return item.label.toLowerCase() === language;
    }) || { label: "UZ", img: <Uz /> }
  );
  return (
    <div className="relative inline-block w-[80px]">
      <button
        onClick={() => {
          document.querySelectorAll(".dropdown-menu").forEach((element) => {
            element.classList.toggle("hidden");
          });
        }}
        className=" bg-transparent text-customWhite dark:text-customBlack  flex justify-between items-center"
      >
        <span className="flex items-center gap-2">
          {selected.label}
          {selected.img}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className="dropdown-menu absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg hidden z-20"
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSelected(option);
              document.querySelectorAll(".dropdown-menu").forEach((element) => {
                element.classList.toggle("hidden");
              });
              i18n.changeLanguage(option.label.toLowerCase());
            }}
          >
            {option.label}

            {option.img}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeLng;
