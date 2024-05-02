import Button from "../../Button/Button";
import Logo from "../../Logo";

function AuthHeader() {
  return (
    <div className="flex justify-between items-center p-4 border-b px-[200px] xl:px-[50px] sm:px-[20px]">
      <Logo />
      <div className=" flex gap-6 items-center">
        <p className=" text-sm">Dont have an account?</p>
        <Button variant="secondaryPrimary">
          <a href="/register">Create an account</a>
        </Button>
      </div>
    </div>
  );
}

export default AuthHeader;
