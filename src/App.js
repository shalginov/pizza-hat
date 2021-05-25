import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";

function App() {
  const [configuredPizza, setConfiguredPizza] = useState()

  const configPizza = (pizza) => {
    setConfiguredPizza(pizza)
  }

  if (configuredPizza) return <PizzaCheckouter pizza={configuredPizza} />;
   return <div>
    <PizzaConfigurator submitPizzaConfig={configPizza}  />;
    <button onClick={()=> {throw new Error("Something went wrong")}}>Break the world</button>;
   </div>
}

export default App;
