import { ReactNode } from "react"
import NavBar from "@/app/components/NavBar-server";

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <div>
            <NavBar />
            <p>Dashboard Layout!</p>
            {children}
        </div>
    )
}