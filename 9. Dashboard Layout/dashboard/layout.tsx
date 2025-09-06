//this layout is only applicable for dashboard and its nested routes
import Link from "next/link";
export default function CommonAdminDashboardLayout({children}:{
    children:React.ReactNode
}){
    return(
        <div>
            <div className="flex">
                <aside className="w-65 p-4 border-r">
                    <h2>Dashboard</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/dashboard'}>Dashboard Home</Link>
                            </li>
                             <li>
                                <Link href={'/dashboard/analytics'}>Dashboard Analytics</Link>
                            </li>
                        </ul>
                    </nav>

                </aside>
                <div className="flex-1 p-5">{children}</div>
            </div>
        </div>
    )
}