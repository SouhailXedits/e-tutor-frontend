import StudentHeader from "modules/shared/components/Headers/StudentHeader/StudentHeader"
import HomeRoutesTabs from "./StudentsRoutesTabs"
import { Outlet } from "react-router"

function StudentMainLayout() {
    return (
        <div>
            <HomeRoutesTabs/>
            <StudentHeader/>
            <Outlet/>
        </div>
    )
}

export default StudentMainLayout
