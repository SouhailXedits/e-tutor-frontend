import { BsChatDots } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import {
  IoAddCircle,
  IoSettingsOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
export const links = [
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
