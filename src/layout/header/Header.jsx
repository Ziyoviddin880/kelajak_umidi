import Navbar from "../navbar/Navbar";

import TopMenu from "../topMenu/TopMenu";

const Header = () => {
  return (
    <header className="bg-customBlack dark:bg-customWhite sticky top-0 z-10">
      <TopMenu />
      <Navbar />
    </header>
  );
};

export default Header;
