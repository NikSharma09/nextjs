import Link from "next/link"

export default function Customers() {
    return (
        <>
        <p>Customers!</p>
        <ul>
            <li>
                <Link href="/dashboard/customers/1">Customer 1</Link>
            </li>
            <li>
                <Link href="/dashboard/customers/2">Customer 2</Link>
            </li>
            <li>
                <Link href="/dashboard/customers/3">Customer 3</Link>
            </li>
        </ul>
        </>
        
    )
}