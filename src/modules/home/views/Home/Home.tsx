import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";
import Button from "modules/shared/components/Button/Button";

const Home = () => {

  function handleLogout() {
    
  }
  return <div className="h-screen flex items-center justify-center">Home
  <Button variant="primary" onClick={handleLogout} >Logout</Button>
  </div>;
};

export default Home;
