import Button from "modules/shared/components/Button/Button";

const Home = () => {
  function handleLogout() {}
  return (
    <div className="h-screen flex items-center justify-center">
      Home
      <Button variant="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
