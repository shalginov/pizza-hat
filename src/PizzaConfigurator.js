import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { calculatePrice, makePizzaObject } from "./shared/utils"
import { usePizzaContext } from "./PizzaContext"

export const PizzaConfigurator = () => {
    const { setPizza } = usePizzaContext()
    const { register, watch, handleSubmit } = useForm()
    const history = useHistory()

    const ingredientsNames = ["size", "dough", "souse", "cheese", "vegetables", "meat"]
    const ingredientsValues = watch(ingredientsNames)
    const pizzaPart = makePizzaObject(ingredientsNames, ingredientsValues)

    const onSubmitHandler = () => {
        setPizza(pizzaPart)
        history.push("/pizza-checkouter")
    }

    return <form onSubmit={onSubmitHandler}>
        <fieldset>
            <legend>Configure your pizza</legend>
            <h2>STAGING</h2>
            <legend>Pizza size</legend>
            <label><input {...register("size")} type="radio" value="35" />35</label>
            <label><input {...register("size")} type="radio" value="30" />30</label>
            <legend>Dough</legend>
            <label><input {...register("dough")} type="radio" value="thick" />thick</label>
            <label><input {...register("dough")} type="radio" value="fat" />fat</label>
            <legend>Souse</legend>
            <label><input {...register("souse")} type="radio" value="tomato" />tomato</label>
            <label><input {...register("souse")} type="radio" value="white" />white</label>
            <label><input {...register("souse")} type="radio" value="spicy" />spicy</label>
            <legend>Cheese</legend>
            <label><input {...register("cheese")} type="radio" value="mozarella" />mozarella</label>
            <label><input {...register("cheese")} type="radio" value="chedder" />chedder</label>
            <label><input {...register("cheese")} type="radio" value="dorblu" />dorblu</label>
            <legend>Vegetables</legend>
            <label><input {...register("vegetables")} type="radio" value="tomato" />tomato</label>
            <label><input {...register("vegetables")} type="radio" value="mushrooms" />mushrooms</label>
            <label><input {...register("vegetables")} type="radio" value="pepper" />pepper</label>
            <legend>Meat</legend>
            <label><input {...register("meat")} type="radio" value="bacon" />bacon</label>
            <label><input {...register("meat")} type="radio" value="peperoni" />peperoni</label>
            <label><input {...register("meat")} type="radio" value="ham" />ham</label>
        </fieldset>
        <button>Order for: {calculatePrice(pizzaPart)}$</button>
    </form>
}
