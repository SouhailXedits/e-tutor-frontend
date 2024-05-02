import { MdOutlineLogout } from "react-icons/md";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "modules/auth/data/queries/auth.query";
import Logo from "modules/shared/components/Logo";
import { links } from "modules/shared/routes/constants/routes";

export default function SideBar() {
  const pathname = useLocation().pathname;
  const { mutateAsync: logout } = useLogoutMutation();
  async function handleLogout() {
    await logout();
  }
  return (
    <div className="max-w-[20rem] bg-gray-900 w-full h-full flex flex-col">
      <Logo variant="white" />
      <div className="bg-gray-800 mb-4 w-full h-[1px] text-gray-800"></div>
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.label}
          className={`px-8 py-4 cursor-pointer flex flex-row items-center gap-3 text-lg transition-all ease-linear  ${
            pathname.includes(link.path)
              ? "bg-primary-500 text-white"
              : "text-gray-500 hover:bg-primary-500 hover:text-white"
          }`}
        >
          <span className="text-2xl">{link.icon}</span>
          <span className="capitalize">{link.label}</span>
        </Link>
      ))}
      <button
        className={`pl-2 pr-4 rounded-md py-3 mt-auto mb-6 w-fit ml-4 cursor-pointer flex flex-row items-center gap-2 text-lg transition-all ease-linear text-gray-500 hover:bg-primary-500 hover:text-white`}
        onClick={handleLogout}
      >
        <MdOutlineLogout className="text-2xl" />
        sign-out
      </button>
    </div>
  );
}
