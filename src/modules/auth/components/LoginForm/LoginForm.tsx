import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterQuery } from 'modules/auth/data/queries/auth.query';
import { type LoginBody } from 'modules/auth/types/auth';
import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import { ArrowRight } from 'lucide-react';

function LoginForm() {

    const { isLoading, mutateAsync: login, isError, error } = useRegisterQuery();

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
      // await login(data);
      // setIsAuthenticated(true);
    };

    useEffect(() => {
      if (isError) {
        toast.error((error as Error)?.message, { theme: 'colored' });
      }
    }, [isError]);
    return (
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center text-3xl mb-8 font-semibold">
          Sign in to your account
        </p>

        <Input
          id="username"
          name="username"
          label="Email"
          placeholder="Username or email address..."
          register={register}
          errors={errors}
          className=" gap-3"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          errors={errors}
          className=" gap-3"
        />

        <div className="flex justify-between mt-5 ">
          <div className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className=" h-6 w-6"
            />{' '}
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button
            type="submit"
            isLoading={isLoading}
            className="flex gap-2 px-16"
            size="lg"
          >
            Sign in <ArrowRight className="" />
          </Button>
        </div>
      </form>
    );
}

export default LoginForm
