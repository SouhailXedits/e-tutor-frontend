import CreateAccountForm from "modules/auth/components/CreateAccountForm/CreateAccountForm";
import SocialAccountsAuth from "modules/auth/components/SocialAccountsAuth/SocialAccountsAuth";
import AuthHeader from "modules/shared/components/Headers/AuthHeader";

const Register = () => {
  return (
    <>
      <AuthHeader />
      <div className=" flex items-center h-full">
        <div className=" bg-secondary-100 w-full h-full flex justify-end items-end ">
          <img
            src="/illustrations/register.webp"
            alt=" register illustration"
            className=" max-w-[800px] w-[100%] "
          />
        </div>
        <div className=" flex flex-col w-full gap-10  px-48">
          <CreateAccountForm />
          <SocialAccountsAuth />
        </div>
      </div>
    </>
  );
};

export default Register;
