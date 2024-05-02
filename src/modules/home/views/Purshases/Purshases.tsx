import CourseCard from "modules/home/components/purshase/CourseCard";
import CreateCardForm from "modules/home/components/purshase/CreateCardForm";
import PayementCard from "modules/home/components/purshase/PayementCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { type payementCardInput } from "../../types/payementCardInput";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  fakeCourses,
  oldCards,
} from "modules/home/services/fakeData/fakePurshaseData";
import { IPayementCard } from "modules/home/types/payementCard";
import { ICourse } from "modules/home/types/course";
import PaymentGateway from "modules/home/components/purshase/PayementGateway";
import OrderSummary from "modules/home/components/purshase/OrderSummary";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { usePayementMutation } from "modules/home/services/queries/payement.query";
import { useNavigate } from "react-router";

const payementCardSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  cardNumber: yup
    .string()
    .length(16, "card number must be 16 digits")
    .required("card number is required"),
  expiry: yup
    .string()
    .matches(/^\d{2}\/\d{2}$/, "Expiry date must be in MM/YY format")
    .required("Expiry date is required"),
  cvc: yup
    .string()
    .length(3, "CVC must be 3 characters")
    .matches(/^\d+$/, "CVC must contain only digits")
    .required("CVC is required"),
});

const Purshase = () => {
  const [isCreateCardFormOpen, setIsCreateCardFormOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<IPayementCard | null>(null);
  const { mutateAsync: pay } = usePayementMutation();
  const cartItems: ICourse[] = fakeCourses;
  const stripe = useStripe();
  const elements = useElements();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset: resetForm,
  // } = useForm<payementCardInput>({
  //   resolver: yupResolver(payementCardSchema),
  // });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const cart = cartItems.map((item) => ({ id: item.id }));
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;
    const card = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    const res = (await pay({ courses: cart })) as any;
    const clientSecret = res?.client_secret;
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
    if (!paymentIntent) return;
    if(paymentIntent.status === "succeeded"){
      navigate("/home")
    }
  };
  const handleFormToggle = () => {
    setIsCreateCardFormOpen((prev) => !prev);
    setSelectedCard(null);
  };

  return (
    <form className="mt-5" onSubmit={(e) => handleSubmit(e)}>
      <div className=" flex flex-col items-center transition-all">
        <div className=" bg-gray-50 text-center py-10 flex flex-col gap-4 w-full">
          <h2 className="text-3xl font-semibold">checkout</h2>
          <p className=" text-sm font-light">
            Home / Shopping Cart /{" "}
            <span className=" font-semibold">Checkout</span>
          </p>
        </div>
        <div className="flex gap-20 justify-between items-start p-10 w-[80%] ">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-3xl font-semibold w-full">Payement methode</h2>
            <div className="flex flex-col gap-4">
              {/* {oldCards.map((card: IPayementCard) => {
                return (
                  <div onClick={() => handleCardSelection(card)} key={card.id}>
                    <PayementCard
                      card={card}
                      isSelected={selectedCard?.id === card.id}
                    />
                  </div>
                );
              })} */}
              <div
                className={`flex border p-2 gap-2 items-center justify-between ${isCreateCardFormOpen && "border-success-500"} cursor-pointer`}
                onClick={handleFormToggle}
              >
                <div className="flex gap-6 items-center">
                  <img src="/icons/payement/newCard.webp" />
                  <p>New payement Card</p>
                </div>
                <FaCheckCircle
                  color={isCreateCardFormOpen ? "green" : "gray"}
                  size={20}
                />
              </div>
              {isCreateCardFormOpen && (
                <CreateCardForm />
                // <CreateCardForm
                //   register={register}
                //   errors={errors}
                //   onSubmit={onSubmit}
                //   handleSubmit={handleSubmit}
                // />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className=" p-5 border flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Courses: {cartItems.length}
              </p>
              {cartItems.map((item: ICourse) => {
                return <CourseCard course={item} key={item.id} />;
              })}
            </div>
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Purshase;
