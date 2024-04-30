import CourseCard from "modules/home/components/CourseCard";
import CreateCardForm from "modules/home/components/CreateCardForm";
import PayementCard from "modules/home/components/PayementCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type registerBody } from "modules/auth/types/auth";
import * as yup from "yup";
import { payementCardInput } from "../../types/payementCardInput";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "modules/shared/components/Button/Button";

const fakeCourses = [
  {
    createdAt: "2024-04-23T07:29:03.768Z",
    updatedAt: "2024-04-23T07:29:03.768Z",
    id: 26,
    title: "Instagram Marketing 2021: Complete Guide To Instagram",
    subtitle: "Intelligent Metal Ball",
    topic: "Refined Frozen Gloves",
    level: "Expert",
    duration: 10,
    description: '{"text": "hi"}',
    subjects: ["Ai", "Machine learninig"],
    audience: ["strudnets"],
    requirements: ["Human (Optional)"],
    welcomeMessage: "maiores animi deleniti",
    congratsMessage: "aut modi placeat",
    price: 100,
    discount: 13,
    thumbnail: {
      id: "f39d372c-3552-4b62-a954-7957f9a7d497",
      path: "http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg",
    },
    trailer: {
      id: "f39d372c-3552-4b62-a954-7957f9a7d497",
      path: "http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg",
    },
    instructors: [
      {
        createdAt: "2024-04-17T07:10:53.938Z",
        updatedAt: "2024-04-17T07:10:53.938Z",
        deletedAt: null,
        id: 49,
        socialId: null,
        firstName: "souhail",
        lastName: "brahmi",
        username: null,
        title: null,
        bigoraphie: null,
        persenalWebsite: null,
        linkedin: null,
        twitter: null,
        facebook: null,
        instagram: null,
        whatsapp: null,
        youtube: null,
      },
      {
        createdAt: "2024-04-16T15:38:54.787Z",
        updatedAt: "2024-04-16T15:38:54.787Z",
        deletedAt: null,
        id: 31,
        socialId: null,
        firstName: "rayen",
        lastName: "mabrouk",
        username: null,
        title: null,
        bigoraphie: null,
        persenalWebsite: null,
        linkedin: null,
        twitter: null,
        facebook: null,
        instagram: null,
        whatsapp: null,
        youtube: null,
      },
    ],
  },
  {
    createdAt: "2024-04-23T07:29:03.768Z",
    updatedAt: "2024-04-23T07:29:03.768Z",
    id: 26,
    title: "Graphic Design Masterclass - Learn GREAT Design",
    subtitle: "Intelligent Metal Ball",
    topic: "Refined Frozen Gloves",
    level: "Expert",
    duration: 10,
    description: '{"text": "hi"}',
    subjects: ["Ai", "Machine learninig"],
    audience: ["strudnets"],
    requirements: ["Human (Optional)"],
    welcomeMessage: "maiores animi deleniti",
    congratsMessage: "aut modi placeat",
    price: 50,
    discount: 5,
    thumbnail: {
      id: "f39d372c-3552-4b62-a954-7957f9a7d497",
      path: "http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg",
    },
    trailer: {
      id: "f39d372c-3552-4b62-a954-7957f9a7d497",
      path: "http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg",
    },
    instructors: [
      {
        createdAt: "2024-04-17T07:10:53.938Z",
        updatedAt: "2024-04-17T07:10:53.938Z",
        deletedAt: null,
        id: 49,
        socialId: null,
        firstName: "souhail",
        lastName: "brahmi",
        username: null,
        title: null,
        bigoraphie: null,
        persenalWebsite: null,
        linkedin: null,
        twitter: null,
        facebook: null,
        instagram: null,
        whatsapp: null,
        youtube: null,
      },
      {
        createdAt: "2024-04-16T15:38:54.787Z",
        updatedAt: "2024-04-16T15:38:54.787Z",
        deletedAt: null,
        id: 31,
        socialId: null,
        firstName: "rayen",
        lastName: "mabrouk",
        username: null,
        title: null,
        bigoraphie: null,
        persenalWebsite: null,
        linkedin: null,
        twitter: null,
        facebook: null,
        instagram: null,
        whatsapp: null,
        youtube: null,
      },
    ],
  },
];
const oldCards = [
  {
    id: 1,
    type: "masterCard",
    number: "1234 **** **** ****",
    expiry: "12/24",
    owner: "John Doe",
    cvc: 123,
  },
  {
    id: 2,
    type: "visa",
    number: "4321 **** **** ****",
    expiry: "12/24",
    owner: "Souhail Brahmi",
    cvc: 123,
  },
];
const Purshase = () => {
  const [isCreateCardFormOpen, setIsCreateCardFormOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const {
    register,
    formState: { errors },
  } = useForm<payementCardInput>({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("name is required"),
        cardNumber: yup.number().required("card number is required"),
        expiry: yup.string().required("expiry date is required"),
        cvc: yup.number().required("cvc is required"),
      })
    ),
  });
  const cartItems = fakeCourses;
  return (
    <div className=" flex flex-col items-center">
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
                <div
                  onClick={() => {
                    setSelectedCard(card);
                    setIsCreateCardFormOpen(false);
                  }}
                >
                  <PayementCard
                    card={card}
                    key={card.id}
                    isSelected={selectedCard?.id === card.id}
                  />
                </div>
              );
            })}
            <div
              className={`flex border p-2 gap-2 items-center justify-between ${isCreateCardFormOpen && "border-success-500"}`}
              onClick={() => {
                setIsCreateCardFormOpen(
                  (isCreateCardFormOpen) => !isCreateCardFormOpen
                );
                setSelectedCard(null);
              }}
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
              <CreateCardForm register={register} errors={errors} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className=" p-5 border flex flex-col gap-3">
            <p className="text-xl font-semibold">Courses: {cartItems.length}</p>
            {cartItems.map((item) => {
              return <CourseCard course={item} key={item.id} />;
            })}
          </div>
          <div className=" p-5 border flex flex-col gap-3">
            <p className="text-xl font-semibold">Order Summary</p>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Discount</p>
              <p>${cartItems.reduce((acc, item) => acc + item.discount, 0)}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p className="text-xl font-semibold">
                $
                {cartItems.reduce((acc, item) => acc + item.price, 0) -
                  cartItems.reduce((acc, item) => acc + item.discount, 0)} USD
              </p>
            </div>
            <Button variant="primary" size="lg">Complete Payement</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purshase;
