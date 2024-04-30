export interface IPayementCard {
  id: number;
  type: string;
  number: string;
  expiry: string;
  owner: string;
  cvc: number;
}
