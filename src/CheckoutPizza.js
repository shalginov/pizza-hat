import { useForm } from "react-hook-form"
import { useHistory } from "react-router"
import { usePizzaContext } from "./PizzaContext"
import { calculatePrice, DELIVERYCOST } from "./shared/utils"
import { DeliveryForm } from "./DeliveryForm"

export const CheckoutPizza = ({ formSubmit = (data = {}) => console.log(data) }) => {
    const { pizza } = usePizzaContext()
    const history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            payMethod: "card"
        }
    })

    const onSubmit = handleSubmit((data) => {
        formSubmit(data)
        console.log("delivery form data", data);
        history.push("/pizza-order")
    })



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
            <DeliveryForm register={register} />
            <fieldset>
                <p>Pizza {calculatePrice(pizza)}</p>
                <p>Delivery {DELIVERYCOST}</p>
                <button onClick={onSubmit}>Pay: {DELIVERYCOST + calculatePrice(pizza)}</button>
            </fieldset>
        </div>
    )
}