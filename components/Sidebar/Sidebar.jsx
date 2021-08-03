import { ViewGridIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import SidebarMainCategory from "./SidebarMainCategory";
import SidebarSubCategory from "./SidebarSubCategory";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-900 border-t-2 border-gray-700 p-6 max-w-[300px] font-montserrat h-screen text-white hidden lg:block">
      <div>
        <SidebarMainCategory Icon={ViewGridIcon} name="Categories" selected />

        <SidebarSubCategory name="Echo and Alexa" />
        <SidebarSubCategory name="Kindle" />
        <SidebarSubCategory name="Echo and Alexa" />
        <SidebarSubCategory name="Electronics" />
        <SidebarSubCategory name="Electronics" />
        <SidebarSubCategory name="Home and Garden" />

        <SidebarMainCategory name="Sell On Amazon" foawe={faPercent} />
        <SidebarMainCategory Icon={QuestionMarkCircleIcon} name="Help" />
      </div>
    </div>
  );
};

export default Sidebar;
