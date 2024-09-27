"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({ key, href, label }: { key: number, href: string, label: string }) {
    const pathname = usePathname();	
    const isActive = pathname === href ? "active" : "";

    return (
        <li key={key}>
            <Link className={isActive} href={href}>
                {label}
            </Link>
        </li>
    )
}