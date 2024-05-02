import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { getMe } from "modules/auth/data/api/auth.service";
import Button from "modules/shared/components/Button/Button";

const Home = () => {
  const{} = useQuery({
    queryKey: ["user"],
    queryFn: () => getMe()
  })
  console.log("me")
  
  return <div className=" flex flex-col items-center">instructor</div>;
};

export default Home;
