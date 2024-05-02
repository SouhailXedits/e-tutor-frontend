import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
} from "@stripe/react-stripe-js";
import { STRIPE_PUBLIC_KEY } from "config";

const PaymentGateway = ({children}: {children: React.ReactNode}) => {
  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  )
};

export default PaymentGateway;