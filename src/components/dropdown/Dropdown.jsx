import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Dropdown = ({ item, isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
      className={
        "py-5 px-3 border-2 self-start  rounded-lg w-[100%] mt-3 cursor-pointer transition-all duration-200  " +
        (isOpen === item.id ? "border-customDarkGreen" : "")
      }
    >
      <div className="flex justify-between items-center gap-3">
        <p
          className={
            "text-[18px] md:text-[20px] font-bold  " +
            (isOpen === item.id
              ? "text-customDarkGreen"
              : "text-customWhite dark:text-customBlack truncate ")
          }
        >
          {item.id}. {item.title}
        </p>
        <TbPlayerTrackNextFilled
          className={
            "text-[18px] block md:text-[20px] flex-shrink-0 transition-all duration-200 " +
            (isOpen === item.id
              ? "rotate-90 text-customDarkGreen"
              : "text-customWhite dark:text-customBlack")
          }
        />
      </div>
      <p
        className={
          "mt-5 text-[15px] transition-all duration-200 text-customWhite dark:text-customBlack " +
          (isOpen === item.id ? "block " : "hidden")
        }
      >
        {item.text}
      </p>
    </div>
  );
};

export default Dropdown;
