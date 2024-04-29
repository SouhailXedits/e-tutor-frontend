import Button from "modules/shared/components/Button/Button";

const Home = () => {
  function handleLogout() {}
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
