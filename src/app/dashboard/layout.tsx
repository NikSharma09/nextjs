import { ReactNode } from "react"
import NavBar from "@/app/components/NavBar-server";

export default function DashboardLayout({children, users, managers}: { children: ReactNode, users: ReactNode, managers: ReactNode }) {
    return (
        <div>
            <NavBar />
            <p>Dashboard Layout!</p>
            {children}
            {users}
            {managers}
        </div>
    )
}