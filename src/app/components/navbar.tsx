"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();	

    return (
        <ul>
            <li>
                <Link className={
                    pathname === "/dashboard" ? "active" : ""
                } href="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link className={
                    pathname === "/dashboard/customers" ? "active" : ""
                } href="/dashboard/customers">
                    Customers
                </Link>
            </li>
            <li>
                <Link className={
                    pathname === "/dashboard/invoices" ? "active" : ""
                } href="/dashboard/invoices">
                    Invoices
                </Link>
            </li>
        </ul>
    )
}