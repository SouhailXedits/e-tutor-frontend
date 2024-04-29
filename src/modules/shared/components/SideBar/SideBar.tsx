import { BsChatDots } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import {
  IoAddCircle,
  IoSettingsOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Logo from "modules/shared/components/Logo";

export default function SideBar() {
  const pathname = useLocation().pathname;
  const links = [
    {
      label: "dahsboard",
      path: "/home",
      icon: <IoStatsChartOutline />,
    },
    {
      label: "create new course",
      path: "/create-course",
      icon: <IoAddCircle />,
    },
    {
      label: "my courses",
      path: "/my-courses",
      icon: <GoStack />,
    },
    {
      label: "earnings",
      path: "/eranings",
      icon: <CiCreditCard1 />,
    },
    {
      label: "messages",
      path: "/messages",
      icon: <BsChatDots />,
    },
    {
      label: "settings",
      path: "/settings",
      icon: <IoSettingsOutline />,
    },
  ];
  return (
    <div className="max-w-[20rem] bg-gray-900 w-full h-full flex flex-col">
      <Logo />
      <div className="bg-gray-800 mb-4 w-full h-[1px] text-gray-800"></div>
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.label}
          className={`px-6 py-4 cursor-pointer flex flex-row items-center gap-3 text-lg transition-all ease-linear  ${
            pathname.includes(link.path)
              ? "bg-primary-500 text-white"
              : "text-gray-500 hover:bg-primary-500 hover:text-white"
          }`}
        >
          <span className="text-2xl">{link.icon}</span>
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
