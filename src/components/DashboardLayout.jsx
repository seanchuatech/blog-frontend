import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const DashboardLayout = () => {
    return (
        <>
            <SideBar />
            <main className="App h-screen w-screen">
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout