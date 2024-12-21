import { NavLink } from "react-router-dom";
import ChangeLng from "../../components/changeLng/ChangeLng";
import ChangeDarkMode from "../../components/changeDarkMode/ChangeDarkMode";
import { CiMenuBurger } from "react-icons/ci";
import Nav from "../../components/nav/Nav";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className="container flex justify-between items-center py-5 px-3 md:px-0">
        <div>
          <NavLink to="/">
            <img className="w-[100px]" src="./images/logoDark.svg" alt="LOGO" />
          </NavLink>
        </div>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="flex items-center md:hidden gap-2">
          <ChangeLng />
          <ChangeDarkMode />
          <CiMenuBurger
            onClick={() => setMobileMenu(true)}
            className="dark:text-customBlack text-[20px] text-customWhite"
          />
        </div>
      </div>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;
