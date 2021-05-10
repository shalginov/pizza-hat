export const PizzaOrderCheckouter = ({ orderProps, priceProps, setIsConfiguringPizza }) => {
    return <div>
        <fieldset>
            <legend>Check out your pizza</legend>
            <ul>
                {Object.entries(orderProps).map((item) => {
                    return <li>
                        <span style={{ fontWeight: "bolder" }}>{item[0]}: </span><span>{item[1]}</span>
                    </li>
                })}
            </ul>
            <p>Price: {priceProps}$</p>
        </fieldset>
        <button onClick={() => setIsConfiguringPizza(prev => !prev)}>back</button>
    </div>
}