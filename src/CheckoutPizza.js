import { Link } from "react-router-dom"
import { usePizzaContext } from "./PizzaContext"
import { calculatePrice, DELIVERYCOST } from "./shared/utils"
import { DeliveryForm } from "./DeliveryForm"

export const CheckoutPizza = ({ formSubmit }) => {
    const { pizza } = usePizzaContext()

    return (
        <div>
            <fieldset>
                <legend>Check out your pizza</legend>
                <ul>
                    {pizza && Object.entries(pizza).map((item) => {
                        return item[1] && <li key={item[0]}>
                            <span style={{ fontWeight: "bolder" }}>{item[0]}: </span><span>{item[1]}</span>
                        </li>
                    })}
                </ul>
                <p>Price: {calculatePrice(pizza)}</p>
            </fieldset>
            <DeliveryForm />
            <fieldset>
                <p>Pizza {calculatePrice(pizza)}</p>
                <p>Delivery {DELIVERYCOST}</p>
                <Link to="/pizza-order">
                    <button>Pay: {DELIVERYCOST + calculatePrice(pizza)}</button>
                </Link>
            </fieldset>
        </div>
    )
}