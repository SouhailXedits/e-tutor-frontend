import { ArrowRight } from "lucide-react";
import Button from "modules/shared/components/Button/Button";
import { Outlet } from "react-router-dom";
import UserProfile from "../../components/UserProfile";
import HomeRoutesTabs from "../../components/Home/HomeStudentsRoutesTabs";

const Home = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className=" bg-primary-100 h-[200px] w-full"></div>
      <div className=" relative top-[-150px] w-[60%]">
        <div className="bg-white flex items-center justify-between p-10 border border-primary-100">
          <UserProfile />
          <Button
            variant="secondaryPrimary"
            className=" flex items-center gap-3"
          >
            {" "}
            Become an Instructor <ArrowRight />
          </Button>
        </div>
        <div>
          <HomeRoutesTabs />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
