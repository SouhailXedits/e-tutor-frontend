import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from "react-router";
import { links } from "modules/shared/routes/constants/routes";

function TopBar() {
  const pathname = useLocation().pathname;
  return (
    <div className="w-full h-20 pr-[7.5rem] pl-[10rem] pb-4 pt-8 flex flex-row items-center justify-between">
      <div className="flex flex-col gap-[0.25rem]">
        <span className="text-gray-600">Good Morning</span>
        <span className="text-gray-900 text-bold text-lg capitalize">
          {links.find((e) => pathname.includes(e.path))?.label}
        </span>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row items-center">
          <IoIosSearch className="text-gray-900 h-6 w-6 -mr-8 z-10" />
          <input
            type="search"
            placeholder="Search"
            className="bg-gray-50 placeholder:text-gray-500 pl-10 py-2.5 min-w-[15rem] focus:outline-none rounded-md"
          />
        </div>
        <div className="relative">
          <IoNotificationsOutline className="text-gray-900 bg-gray-50 h-10 w-10 p-2 rounded-full" />
          <span className="size-2 rounded-full bg-red-600 animate-pulse absolute top-2.5 right-2.5"></span>
        </div>
        <img
          src="/default_avatar.png"
          alt=""
          className="rounded-full h-9 w-9"
        />
      </div>
    </div>
  );
}

export default TopBar;
