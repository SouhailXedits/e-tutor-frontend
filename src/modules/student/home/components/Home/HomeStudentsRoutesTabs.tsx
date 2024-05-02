import { Link, NavLink, Outlet } from "react-router-dom"

function HomeRoutesTabs() {
    const homeRoutes = [
        {
            label: "Dashboard",
            path: "/home/dashboard",
        },
        {
            label: "Courses",
            path: "/home/courses",
        },
        {
            label: "Teachers",
            path: "/home/teachers",
        },
        {
            label: "Messages",
            path: "/home/messages ",
        },
        {
            label: "Wishlist",
            path: "/home/wishlist",
        },
        {
            label: "Purchase History",
            path: "/home/purchases-history",
        },
        {
            label: "Settings",
            path: "/home/settings",
        },
    ]
    return (
        <div>
            <ul className="flex gap-4 justify-between w-full border border-primary-100 text-gray-700 h-12 px-6">
                {homeRoutes.map((route) => (
                    <li key={route.path} className=" flex items-center ">
                        <NavLink to={route.path} className={({ isActive }) => isActive ? "text-gray-900 border-b-2 border-primary-500 h-full p-2" : " h-full p-2"}>{route.label}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeRoutesTabs
