import { logout } from "modules/home/services/api/home.service";
import Button from "modules/shared/components/Button/Button";

const Home = () => {
  async function handleLogout() {
    await logout();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
