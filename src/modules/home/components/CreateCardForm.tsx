import Button from "modules/shared/components/Button/Button";
import Input from "modules/shared/components/Input";

function CreateCardForm({ register, errors, onSubmit, handleSubmit }: any) {
  return (
    // <form className=" mt-5" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <Input
        id="name"
        name="name"
        label="Name"
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

      <div className="flex mt-5 gap-2 ">
        <input type="checkbox" name="agree" id="agree" className=" h-6 w-6" />{" "}
        <label htmlFor="agree" className=" text-sm">
          Remember this card, save it on my card list
        </label>
      </div>
      {/* </form> */}
    </div>
  );
}

export default CreateCardForm;
