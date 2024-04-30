import CourseCard from "modules/home/components/CourseCard";
import CreateCardForm from "modules/home/components/CreateCardForm";
import PayementCard from "modules/home/components/PayementCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { type payementCardInput } from "../../types/payementCardInput";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import OrderSummary from "modules/home/components/OrderSummary";
import {
  fakeCourses,
  oldCards,
} from "modules/home/services/fakeData/fakePurshaseData";
import { IPayementCard } from "modules/home/types/payementCard";

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
  const [selectedCard, setSelectedCard] = useState<IPayementCard | null>(null);
  const cartItems = fakeCourses;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<payementCardInput>({
    resolver: yupResolver(payementCardSchema),
  });
  const onSubmit: SubmitHandler<payementCardInput> = async (data) => {
    // console.log(data);
  };
  const handleCardSelection = (card: IPayementCard) => {
    setSelectedCard(card);
    setIsCreateCardFormOpen(false);
    resetForm();
  };
  const handleFormToggle = () => {
    setIsCreateCardFormOpen((prev) => !prev);
    setSelectedCard(null);
    resetForm();
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
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
              {oldCards.map((card) => {
                return (
                  <div onClick={() => handleCardSelection(card)} key={card.id}>
                    <PayementCard
                      card={card}
                      isSelected={selectedCard?.id === card.id}
                    />
                  </div>
                );
              })}
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
                <CreateCardForm
                  register={register}
                  errors={errors}
                  onSubmit={onSubmit}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className=" p-5 border flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Courses: {cartItems.length}
              </p>
              {cartItems.map((item) => {
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
