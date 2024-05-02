function Logo({ variant = "black" }: { variant?: "white" | "black" }) {
  return (
    <div
      className={`flex items-center gap-2  ${variant === "white" ? "text-white mx-8 my-4" : ""}`}
    >
      <img
        src="/icons/GraduationCap.webp"
        alt="graduation cap"
        className="h-8 w-8"
      />
      <span className=" text-2xl font-semibold ">E-tutor</span>
    </div>
  );
}

export default Logo;
