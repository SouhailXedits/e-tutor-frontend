import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginQuery } from 'modules/auth/data/queries/auth.query';
import { type LoginBody } from 'modules/auth/types/auth';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';

const Login = () => {
  const { isLoading, mutateAsync: login, isError, error } = useLoginQuery();

  const { setIsAuthenticated } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({
    resolver: yupResolver(
      yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
      })
    ),
  });

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    await login(data);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as Error)?.message, { theme: 'colored' });
    }
  }, [isError]);

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="m-auto w-[90%] md:w-[30%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center underline mb-8">
          Username: user, Password: user
        </p>

        <Input
          id="username"
          name="username"
          label="Username"
          placeholder="Username"
          register={register}
          errors={errors}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          errors={errors}
        />

        <div className="flex justify-center mt-5">
          <Button text="Login" type="submit" isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default Login;
