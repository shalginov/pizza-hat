import { useState } from "react"
import {calculatePrice} from "./shared/utils"

export const PizzaConfigurator = ({submitPizzaConfig}) => {
    const [pizzaConfig, setPizzaConfig] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        submitPizzaConfig(pizzaConfig)
    }

    const handleChange = (event) => {
        const pizzaConfigPart = {[event.target.name]: event.target.value}
        setPizzaConfig({...pizzaConfig, ...pizzaConfigPart})        
    }

    return <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Configure your pizza</legend>
            <h2>STAGING</h2>
            <legend>Pizza size</legend>
            <label><input onChange={handleChange} name="size" type="radio" value="35" />35</label>
            <label><input onChange={handleChange} name="size" type="radio" value="30" />30</label>
            <legend>Dough</legend>
            <label><input onChange={handleChange} name="dough" type="radio" value="thick" />thick</label>
            <label><input onChange={handleChange} name="dough" type="radio" value="fat" />fat</label>
            <legend>Souse</legend>
            <label><input onChange={handleChange} name="souse" type="radio" value="tomato" />tomato</label>
            <label><input onChange={handleChange} name="souse" type="radio" value="white" />white</label>
            <label><input onChange={handleChange} name="souse" type="radio" value="spicy" />spicy</label>
            <legend>Cheese</legend>
            <label><input onChange={handleChange} name="cheese" type="radio" value="mozarella" />mozarella</label>
            <label><input onChange={handleChange} name="cheese" type="radio" value="chedder" />chedder</label>
            <label><input onChange={handleChange} name="cheese" type="radio" value="dorblu" />dorblu</label>
            <legend>Vegetables</legend>
            <label><input onChange={handleChange} name="vegetables" type="radio" value="tomato" />tomato</label>
            <label><input onChange={handleChange} name="vegetables" type="radio" value="mushrooms" />mushrooms</label>
            <label><input onChange={handleChange} name="vegetables" type="radio" value="pepper" />pepper</label>
            <legend>Meat</legend>
            <label><input onChange={handleChange} name="meat" type="radio" value="bacon" />bacon</label>
            <label><input onChange={handleChange} name="meat" type="radio" value="peperoni" />peperoni</label>
            <label><input onChange={handleChange} name="meat" type="radio" value="ham" />ham</label>
        </fieldset>
        <button type="submit">Order for: {calculatePrice(pizzaConfig)}$</button>
    </form>
}
