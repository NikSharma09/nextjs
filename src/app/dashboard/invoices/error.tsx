"use client";

export default function InvoicesErrorPage(
    { error, resetError }: { error: Error, resetError: () => void }
) {
    return (
        <div>
            <h1>Error at the Invoices level!</h1>
            <p>{error.message}</p>
            <button onClick={resetError}>Try Again!</button>
        </div>
    )

}