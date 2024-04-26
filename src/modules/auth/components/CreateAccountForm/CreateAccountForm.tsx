import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterQuery } from 'modules/auth/data/queries/auth.query';
import { type registerBody } from 'modules/auth/types/auth';
// import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import { ArrowRight } from 'lucide-react';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CreateAccountForm() {
  const { isLoading, mutateAsync: login, isError, error } = useRegisterQuery();
  const navigate = useNavigate();
  

  // const { setIsAuthenticated } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerBody>({
    resolver: yupResolver(
      yup.object().shape({
        username: yup.string().required('Username is required'),
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        password: yup.string().required('Password is required'),
      })
    ),
  });

  const onSubmit: SubmitHandler<registerBody> = async (data) => {
    await login(data);
    navigate("/confirm");
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
        Create your account
      </p>
      <p>Full name</p>
      <div className=" flex items-center gap-4 w-full justify-between">
        <Input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
        <Input
          id="lastName"
          name="lastName"
          placeholder="Username or email address..."
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
      </div>
      <Input
        id="username"
        name="username"
        label="Username"
        placeholder="Username..."
        register={register}
        errors={errors}
        className=" gap-3 w-full"
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="Email adress"
        register={register}
        errors={errors}
        className=" gap-3 w-full"
      />

      <div className=" flex items-center gap-4 w-full justify-between">
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
      </div>

      <div className="flex justify-between mt-5 ">
        <div className="flex items-center gap-3 text-gray-700">
          <input type="checkbox" name="agree" id="agree" className=" h-6 w-6" />{' '}
          <label htmlFor="agree" className=" text-sm">
            I Agree with all of your <a href="#" className=' text-secondary-500'>Terms & Conditions</a>
          </label>
        </div>
        <Button
          type="submit"
          isLoading={isLoading}
          className="flex gap-2 px-6"
          size="lg"
        >
          Create account <ArrowRight className="" />
        </Button>
      </div>
    </form>
  );
}

export default CreateAccountForm;
