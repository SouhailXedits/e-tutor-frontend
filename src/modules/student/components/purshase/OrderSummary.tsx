import Button from "modules/shared/components/Button/Button";
import { ICourse } from "../../../shared/types/course";
function OrderSummary({ cartItems }: { cartItems: ICourse[] }) {
  const subtotal = cartItems.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  );
  const discount = cartItems.reduce(
    (acc: number, item: any) => acc + item.discount,
    0
  );
  const total = subtotal - discount;

  return (
    <div className=" p-5 border flex flex-col gap-3">
      <p className="text-xl font-semibold">Order Summary</p>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <div className="flex justify-between border-b pb-2">
        <p>Discount</p>
        <p>${discount}</p>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p className="text-xl font-semibold">${total} USD</p>
      </div>
      <Button variant="primary" size="lg" type="submit">
        Complete Payement
      </Button>
    </div>
  );
}

export default OrderSummary;
