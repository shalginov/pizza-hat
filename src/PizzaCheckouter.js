export const PizzaCheckouter = (pizza) => {
    return <div>
        <fieldset>
            <legend>Check out your pizza</legend>
            <ul>
                {Object.entries(pizza).map((item) => {
                    return <li>
                        <span style={{ fontWeight: "bolder" }}>{item[0]}: </span><span>{item[1]}</span>
                    </li>
                })}
            </ul>
            <p>Price: </p>
        </fieldset>
    </div>
}