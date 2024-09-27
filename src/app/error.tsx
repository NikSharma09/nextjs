"use client";

export default function RootError({ error }: { error: Error }) {
    return (
        <div>
            <h1>Error at root level!</h1>
            <p>{error.message}</p>
        </div>
    )
}