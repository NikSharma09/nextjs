import ClientComponent from "../components/clientComponent"
import ServerComponent from "../components/serverComponent"

export default function Dashboard() {
    return (
        <>
        <p>Dashboard! {process.env.customKey}</p>
        <ClientComponent>
            <ServerComponent />
        </ClientComponent>
        </>
    )
}