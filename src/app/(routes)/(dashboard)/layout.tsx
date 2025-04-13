import LogoDashboard from "./dashboard/components/LogoDashboard/page";
import SidebarRoutes from "./dashboard/components/SidebarRoutes/page";


export default function LayoutDashboard({children}:{children: React.ReactNode}) {
  return (
    <div className="flex w-full h-full">
      <div>
     <LogoDashboard />
     <div className="hidden h-full xl:block w-80 xl:fixed px-6">
      <SidebarRoutes />
      </div>
      </div>
     <div className="w-full h-full xl:ml-80">
        NavbarDashboard...
        <div className="p-6 h-max">{children}</div>
     </div>
    </div>
  )
}
