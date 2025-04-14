import LogoDashboard from "../LogoDashboard/page";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";


export function Sidebar() {
  return (
    <div className="h-screen">
        <div className="flex flex-col h-full border-r">
            <LogoDashboard />
            <SidebarRoutes />
        </div>
    </div>
  )
}
