import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";
import { logout } from "modules/home/services/api/home.service";
import Button from "modules/shared/components/Button/Button";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate()

  async function handleLogout() {
    await logout();
    navigate("/login");
  }
  return <div className="h-screen flex items-center justify-center">Home
  <Button variant="primary" onClick={handleLogout} >Logout</Button>
  </div>;
};

export default Home;
