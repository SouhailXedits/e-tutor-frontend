import { logout } from "modules/home/services/api/home.service";
import Button from "modules/shared/components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  async function handleLogout() {
    await logout();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  return <div className="h-screen flex items-center justify-center">Home
  <Link to="/purshases"> Purshases</Link>
  <Button variant="primary" onClick={handleLogout} >Logout</Button>
  </div>;
};

export default Home;
