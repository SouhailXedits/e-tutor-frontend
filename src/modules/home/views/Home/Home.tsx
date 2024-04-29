import { useNavigate } from "react-router";
import { logout } from "modules/home/services/api/home.service";
import Button from "modules/shared/components/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }
  return (
    <main>
      Home
      <Button variant="primary" onClick={handleLogout}>
        Logout
      </Button>
    </main>
  );
};

export default Home;
