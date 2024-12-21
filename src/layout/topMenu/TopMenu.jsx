import ChangeLng from "../../components/changeLng/ChangeLng";
import ChangeDarkMode from "../../components/changeDarkMode/ChangeDarkMode";
import Media from "../../components/media/Media";

const TopMenu = () => {
  return (
    <div className="hidden md:block py-4 px-3 md:px-0">
      <div className="container  flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChangeLng />
          <ChangeDarkMode />
        </div>
        <Media />
      </div>
    </div>
  );
};

export default TopMenu;
