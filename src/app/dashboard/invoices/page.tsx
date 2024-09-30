import { redirect } from "next/navigation"
// import { permanentRedirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

export default function Invoices() {
    const isAuthenticated = false;
    const id = 123; // dynamically input

    if (!isAuthenticated)  {
        revalidatePath(`/dashboard/customers/${id}`);
        revalidateTag("id");
        // redirect(`/dashboard/customers/${id}`);
    }

    return (
        <p>Invoices Page!</p>
    )
}
