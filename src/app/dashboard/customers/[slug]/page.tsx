export default function CustomerPage({ params }: any) {
    const { slug } = params;

    return (
        <p>Customer { slug } Page!</p>
    )
}