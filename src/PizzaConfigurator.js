import { useState } from "react"

export const PizzaConfigurator = ({ setIsConfiguringPizza, orderProp: { order, setOrder },
     constProps: { BASEPRICE, SIZEADDTOPRICE, TOPPINGADDTOPRICE } }) => {
    const [price, setPrice] = useState(BASEPRICE)
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setIsConfiguringPizza(prev => !prev)
        const form = event.target
        console.log("size ", form.size);
        if (form.size.valu == 35) setPrice(prev => prev + 50)

    }

    const onChangeIput = (name, value) => {
        setOrder(prev => {
            return { ...prev, [name]: value }
        })
        console.log("order:", order);
        changePrice()
    }

    const changePrice = () => {
        let newPrice = BASEPRICE;
        Object.values(order).map(value => {
            console.log("value", value);
            if(value==35) newPrice += SIZEADDTOPRICE
            newPrice += TOPPINGADDTOPRICE
        })
        setPrice(newPrice)
    }

    return <form onSubmit={onSubmitHandler} onChange={(e) => onChangeIput(e.target.name, e.target.value)}>
        <fieldset>
            <legend>Configure your pizza</legend>
            <legend>Pizza size</legend>
            <label><input name="size" type="radio" value="30" />30</label>
            <label><input name="size" type="radio" value="35" />35</label>
            <legend>Dough</legend>
            <label><input name="dough" type="radio" value="thick" />thick</label>
            <label><input name="dough" type="radio" value="fat" />fat</label>
            <legend>Souse</legend>
            <label><input name="souse" type="radio" value="tomato" />tomato</label>
            <label><input name="souse" type="radio" value="white" />white</label>
            <label><input name="souse" type="radio" value="spicy" />spicy</label>
            <legend>Cheese</legend>
            <label><input name="cheese" type="radio" value="mozarella" />mozarella</label>
            <label><input name="cheese" type="radio" value="chedder" />chedder</label>
            <label><input name="cheese" type="radio" value="dorblu" />dorblu</label>
            <legend>Vegetables</legend>s
                <label><input name="vegetables" type="radio" value="tomato" />tomato</label>
            <label><input name="vegetables" type="radio" value="mushrooms" />mushrooms</label>
            <label><input name="vegetables" type="radio" value="pepper" />pepper</label>
            <legend>Meat</legend>
            <label><input name="meat" type="radio" value="bacon" />bacon</label>
            <label><input name="meat" type="radio" value="peperoni" />peperoni</label>
            <label><input name="meat" type="radio" value="ham" />ham</label>
        </fieldset>
        <button type="submit">Order for: {price}$</button>
    </form>
}