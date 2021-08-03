import { StarIcon } from "@heroicons/react/solid";
import {
  DesktopComputerIcon,
  GiftIcon,
  DeviceMobileIcon,
  BookOpenIcon,
  CameraIcon,
  MusicNoteIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

import SingleHomeCategory from "./SingleHomeCategory";

const HomeCategories = () => {
  return (
    <div>
      <h1
        className="popular-categories
                font-bold
                text-gray-700 text-2xl
                flex
                items-center
                mt-6 font-poppins"
      >
        Popular Categories
        <StarIcon className="h-6 w-6 text-yellow-500 mt-1 ml-1" />
      </h1>

      <div className="mt-5 flex gap-4 flex-wrap">
        <SingleHomeCategory Icon={DesktopComputerIcon} />
        <SingleHomeCategory Icon={GiftIcon} />
        <SingleHomeCategory Icon={DeviceMobileIcon} />
        <SingleHomeCategory Icon={BookOpenIcon} />
        <SingleHomeCategory Icon={CameraIcon} />
        <SingleHomeCategory Icon={MusicNoteIcon} />
        <SingleHomeCategory Icon={LightBulbIcon} />
      </div>
    </div>
  );
};

export default HomeCategories;
