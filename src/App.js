import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaOrderCheckouter } from "./PizzaOrderCheckouter";

function App() {
  const [isConfiguringPizza, setIsConfiguringPizza] = useState(true);
  const [order, setOrder] = useState({})
  const [price, setPrice] = useState(0)

  const transferFunc = (dataFromPizzaConfigurator) => {
    setPrice(dataFromPizzaConfigurator)
  }

  if (isConfiguringPizza) return <PizzaConfigurator funcFromApp={transferFunc} orderProps={{ order, setOrder }} setIsConfiguringPizza={setIsConfiguringPizza} />;
  if (!isConfiguringPizza) return <PizzaOrderCheckouter orderProps={order} priceProps={price} setIsConfiguringPizza={setIsConfiguringPizza} />;
}

export default App;
