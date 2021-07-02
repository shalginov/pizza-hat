import { Link } from "react-router-dom"
 
export const OrdersPage = () => {
    const orders = [
        "pizza for lunch on Friday",
        "pizza for breackfast on Monday",
        "pizza for dinner on Saturday"
    ]
    return <div>
        <div>            
            <h4>My orders</h4>
            <Link to="/">{String.fromCharCode(8594)}</Link>
        </div>
        <ul>
            {orders.map( order => {
                return <li key={order}>{order}</li>
            } )}
        </ul>
    </div>
}