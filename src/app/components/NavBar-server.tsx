import NavBarLink from "./navbar";

export default async function NavBar() {
    const links = await getLink();

    return (
        <ul className="navbar">
            {
                links.map(link => {
                    return <NavBarLink key={link.id} href={link.href} label={link.label} />
                })
            }
        </ul>
    )
}

async function getLink() { 
    return [
        { id: 1, href: "/dashboard", label: "Dashboard" },
        { id: 2, href: "/dashboard/customers", label: "Customers" },
        { id: 3, href: "/dashboard/invoices", label: "Invoices" }
    ]
}