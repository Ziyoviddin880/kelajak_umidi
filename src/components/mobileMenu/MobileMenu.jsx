import Media from "../media/Media";
import Nav from "../nav/Nav";
import { IoMdClose } from "react-icons/io";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      className={
        "bg-customBlack bg-opacity-50 w-full h-[100vh] fixed top-0 z-20 md:hidden transition-all duration-1000 " +
        (mobileMenu ? "translate-x-0" : "translate-x-full")
      }
    >
      <div className="dark:bg-customWhite bg-customBlack w-[70%] h-full ml-auto p-5">
        <div
          onClick={() => setMobileMenu(false)}
          className="w-[30px] h-[30px] ml-auto bg-customWhite  dark:bg-customBlack dark:bg-opacity-20 rounded mb-10"
        >
          <IoMdClose className="text-[30px] text-customBlack " />
        </div>
        <Nav />
        <div className="mt-10">
          <Media />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
