import LoginForm from 'modules/auth/components/LoginForm';
import SocialAccountsAuth from 'modules/auth/components/SocialAccountsAuth';
import AuthHeader from 'modules/shared/components/Headers/AuthHeader';

const Login = () => {
  return (
    <>
      <AuthHeader />
      <div className=" flex items-center h-full">
        <div className=" bg-secondary-100 w-full h-full flex justify-end items-end ">
          <img
            src="/illustrations/login.webp"
            alt=" login illustration"
            className=" max-w-[800px] w-[100%] "
          />
        </div>
        <div className=" flex flex-col w-full gap-10  px-48">
          <LoginForm />
          <SocialAccountsAuth />
        </div>
      </div>
    </>
  );
};

export default Login;
