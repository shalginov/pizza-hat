import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";

function App() {
  const [pizzaConfig, setPizzaConfig] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const setPizza = (prop) => {
    setPizzaConfig( {...pizzaConfig, ...prop } )
  }

  const setterSubmitted = () => {
    setSubmitted(true)
  }

  if (submitted) return <PizzaCheckouter pizza={pizzaConfig} />;
   return <div>
    <PizzaConfigurator pizzaSetter={setPizza} pizza={pizzaConfig} handlerSubmitted={setterSubmitted}  />;
    <button onClick={()=> {throw new Error("Something went wrong")}}>Break the world</button>;
   </div>
}

export default App;
