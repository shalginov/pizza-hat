export const PizzaOrderCheckouter = ({order, setIsConfiguringPizza}) => {
    return <div>
        <fieldset>
            <legend>Check out your pizza</legend>
            <p>Price: </p>
           
        </fieldset>
        <button onClick={()=>setIsConfiguringPizza(prev=>!prev)}>back</button>
    </div>
}