import StudentHeader from "modules/shared/components/Headers/StudentHeader/StudentHeader";
import { Link, NavLink, Outlet } from "react-router-dom"

function HomeRoutesTabs() {
    const homeRoutes = [
        {
            label: "Home",
            path: "/home",
        },
        {
            label: "Courses",
            path: "/courses",
        },
        {
            label: "About",
            path: "/about",
        },
        {
            label: "Contact",
            path: "/contact"
        },
        {
            label: "Become an Instructor",
            path: "/be-instructor",
        },
    ]
    return (
      <>
        <ul className="flex gap-2 w-full bg-gray-900 text-gray-400 px-8 h-[52px]">
          {homeRoutes.map((route) => (
            <li key={route.path} className=" text-base flex items-center">
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-100 border-t-2  border-primary-500 font-normal h-full p-3"
                    : " font-light  h-full p-3 "
                }
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
}

export default HomeRoutesTabs
