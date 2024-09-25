import { ReactNode } from "react"
import NavBar from "@/app/components/navbar"

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <div>
            <NavBar />
            <p>Dashboard Layout!</p>
            {children}
        </div>
    )
}