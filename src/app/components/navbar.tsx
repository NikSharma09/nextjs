"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBarLink({ key, href, label }: { key: number, href: string, label: string }) {
    const router = useRouter();
    const pathname = usePathname();	
    const isActive = pathname === href ? "active" : "";
    
    // const redirectToInvoices = () => {
    //     router.push('/dashboard/invoices');
    // }

    return (
        <li key={key}>
            <Link className={isActive} href={href}>
                {label}
            </Link>
        </li>
    )
}