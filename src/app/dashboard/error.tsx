"use client";

export default function DashboardErrorPage(
    { error, resetError }: { error: Error, resetError: () => void }
) {
    return (
        <div>
            <h1>Error at the Dashboard level!</h1>
            <p>{error.message}</p>
            <button onClick={resetError}>Try Again!</button>
        </div>
    )

}