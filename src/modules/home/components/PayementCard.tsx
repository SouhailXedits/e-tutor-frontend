export default function PayementCard({ card , isSelected}: any) {
  const { id, type, number, expiry, owner } = card;
  const image = `/icons/payement/${type}.webp`;
  return (
    <div
      key={card.id}
      className={`flex border p-2 gap-2 items-center justify-between ${isSelected && "border-success-500"}`}
    >
      <div className="flex gap-6 items-center">
        <img src={image} />

        <p>{card.number}</p>
      </div>
      <p>{card.expiry}</p>
      <p>{card.owner}</p>
    </div>
  );
}
