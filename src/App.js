import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";

function App() {
  const [pizzaConfig, setPizzaConfig] = useState({})

  const setPizza = (name, value) => {
    setPizzaConfig( {...pizzaConfig, [name]: value } )
  }

  if (true) return <PizzaConfigurator  pizzaSetter={setPizza}  />;
   return <PizzaCheckouter pizza={pizzaConfig} />;
}

export default App;
