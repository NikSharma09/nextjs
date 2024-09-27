export default function GlobalError({ error } : { error: string}) {
    return (
        <div>
            <h1>Global Error!</h1>
            <p>{error}</p>
        </div>
    )
}