import { FaClipboardList } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { MdOndemandVideo, MdSlowMotionVideo } from "react-icons/md";
import AdvancedInformation from "../components/Steps/AdvancedInformation/AdvancedInformation";
import BasicInformation from "../components/Steps/BasicInformation/BasicInformation";
import Curriculum from "../components/Steps/Curriculum/Curriculum";
import Publish from "../components/Steps/Publish/Publish";

export const steps = [
  {
    title: "Basic Information",
    icon: <GoStack />,
    component: <BasicInformation />,
  },
  {
    title: "Advanced Information",
    icon: <FaClipboardList />,
    component: <AdvancedInformation />,
  },
  {
    title: "Curriculum",
    icon: <MdOndemandVideo />,
    component: <Curriculum />,
  },
  {
    title: "Publish Course",
    icon: <MdSlowMotionVideo />,
    component: <Publish />,
  },
];
