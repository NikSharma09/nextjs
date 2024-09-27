async function getAllCustomersIds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve([1, 2, 3, 4, 5]);
            }
            reject('Error');
        }, 1000)
    })
}

export async function generateStaticParams() {
    // @ts-ignore
    const customerIds: any = await getAllCustomersIds();

    return customerIds.map((id: number) => {
        return {
            params: {
                id: id
            }
        }
    })  
}

function getCustomerById(id: number) {
    return {
        id,
        name: 'John Doe'
    }
}

export default function CustomerPage({ params }: { params: { id: number } }) {
    const { id } = params;
    const customer = getCustomerById(id);

    return (
        <div>
            <h1>{customer.name}</h1>
            <p>{customer.id}</p>            
        </div>
    )
}