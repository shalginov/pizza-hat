import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const OrdersPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [orders, setOrders] = useState([
        "pizza for lunch on Friday",
        "pizza for breakfast on Monday",
        "pizza for dinner on Saturday"
    ])

    useEffect(() => {
        fetch("http://localhost:8080/v1/orders")
            .then(response => response.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
            })
    }, [])

    if (error) {
        return <>
            Oh no! {error.message}
        </>
    }

    if (isLoading) {
        return <>
            Loading spinner...
        </>
    }

    return (
        <div>
            <h4>My orders</h4>
            <ul>
                {!isLoading && orders.map(order => {
                    return <li key={order.id}>{JSON.stringify(order)}</li>
                })}
            </ul>
            <Link to="/">Home</Link>
        </div>
    )
}