
import Input from "modules/shared/components/Input";


function CreateCardForm({register, errors}: any) {
  

  return (
    <form className=" mt-5">
      <Input
        id="name"
        name="name"
        label="name"
        placeholder="Name on card"
        register={register}
        errors={errors}
        className=" gap-3 w-full"
      />
      <Input
        id="cardNumber"
        name="cardNumber"
        label="Card Number"
        placeholder="Label"
        register={register}
        errors={errors}
        className=" gap-3 w-full"
      />
      <div className=" flex items-center gap-4 w-full justify-between">
        <Input
          id="expiry"
          name="expiry"
          label="MM/YY"
          placeholder="MM/YY"
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
        <Input
          id="cvc"
          name="cvc"
          label="CVC"
          type="number"
          placeholder="Security code"
          register={register}
          errors={errors}
          className=" gap-3 w-full"
        />
      </div>

      {/* <div className=" flex items-center gap-4 w-full justify-between">
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
      </div> */}

      <div className="flex mt-5 gap-2 ">
        <input type="checkbox" name="agree" id="agree" className=" h-6 w-6" />{" "}
        <label htmlFor="agree" className=" text-sm">
          Remember this card, save it on my card list
        </label>
      </div>
    </form>
  );
}

export default CreateCardForm;
