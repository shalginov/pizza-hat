import {useState} from "react"

export const PizzaConfigurator = ({setIsConfiguringPizza, setOrder}) => {
    const [price, setPrice] = useState(200)    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setIsConfiguringPizza(prev=>!prev)
        setOrder(
            event.target
        )
    }

    return <form onSubmit={onSubmitHandler}>
        <fieldset>
            <legend>Configure your pizza</legend>
            <legend>Pizza size</legend>
                <label><input name="size" type="radio" value="30"/>30</label>
                <label><input name="size" type="radio" value="35"/>35</label>
            <legend>Dough</legend>
                <label><input name="dough" type="radio" value="thick"/>thick</label>
                <label><input name="dough" type="radio" value="fat"/>fat</label>
            <legend>Souse</legend>
                <label><input name="souse" type="radio" value="tomato"/>tomato</label>
                <label><input name="souse" type="radio" value="white"/>white</label>
                <label><input name="souse" type="radio" value="spicy"/>spicy</label>
            <legend>Cheese</legend>
                <label><input name="cheese" type="radio" value="mozarella"/>mozarella</label>
                <label><input name="cheese" type="radio" value="chedder"/>chedder</label>
                <label><input name="cheese" type="radio" value="dorblu"/>dorblu</label>
            <legend>Vegetables</legend>
                <label><input name="vegetables" type="radio" value="tomato"/>tomato</label>
                <label><input name="vegetables" type="radio" value="mushrooms"/>mushrooms</label>
                <label><input name="vegetables" type="radio" value="pepper"/>pepper</label>
            <legend>Meat</legend>
                <label><input name="meat" type="radio" value="bacon"/>bacon</label>
                <label><input name="meat" type="radio" value="peperoni"/>peperoni</label>
                <label><input name="meat" type="radio" value="ham"/>ham</label>
        </fieldset>
        <button type="submit">Order for: {price}$</button>
    </form>
}