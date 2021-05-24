
export const calculatePrice = (pizza) => {
    const BASEPRICE = 200;
    const SIZEADDTOPRICE = 50;
    const TOPPINGADDTOPRICE = 39;

    let newPrice = BASEPRICE;
    Object.values(pizza).map(value => {
        value === "35" ? newPrice += SIZEADDTOPRICE : newPrice += TOPPINGADDTOPRICE
        if (value === "30") newPrice -= TOPPINGADDTOPRICE
        return 0
    })
    return newPrice
}


export const PizzaConfigurator = ({pizzaSetter, pizza, handlerSubmitted}) => {
  
    const onSubmitHandler = (event) => {
        event.preventDefault()
        handlerSubmitted()
    }


    const handlerChangeInput = (name, value) => {
        pizzaSetter({[name]: value})        
    }


    return <form onSubmit={onSubmitHandler}>
        <fieldset>
            <legend>Configure your pizza</legend>
            <h2>STAGING</h2>
            <legend>Pizza size</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="size" type="radio" value="30" />30</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="size" type="radio" value="35" />35</label>
            <legend>Dough</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="dough" type="radio" value="thick" />thick</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="dough" type="radio" value="fat" />fat</label>
            <legend>Souse</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="souse" type="radio" value="tomato" />tomato</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="souse" type="radio" value="white" />white</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="souse" type="radio" value="spicy" />spicy</label>
            <legend>Cheese</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="cheese" type="radio" value="mozarella" />mozarella</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="cheese" type="radio" value="chedder" />chedder</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="cheese" type="radio" value="dorblu" />dorblu</label>
            <legend>Vegetables</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="vegetables" type="radio" value="tomato" />tomato</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="vegetables" type="radio" value="mushrooms" />mushrooms</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="vegetables" type="radio" value="pepper" />pepper</label>
            <legend>Meat</legend>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="meat" type="radio" value="bacon" />bacon</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="meat" type="radio" value="peperoni" />peperoni</label>
            <label><input onChange={event => handlerChangeInput(event.target.name, event.target.value)} name="meat" type="radio" value="ham" />ham</label>
        </fieldset>
        <button type="submit">Order for: {calculatePrice(pizza)}$</button>
    </form>
}
