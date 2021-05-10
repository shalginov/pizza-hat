import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaOrderCheckouter } from "./PizzaOrderCheckouter";

function App() {
  const [isConfiguringPizza, setIsConfiguringPizza] = useState(true);
  const [order, setOrder] = useState({})

  if (isConfiguringPizza) return <PizzaConfigurator setOrder={setOrder} setIsConfiguringPizza={setIsConfiguringPizza} />;
  if (!isConfiguringPizza) return <PizzaOrderCheckouter order={order} setIsConfiguringPizza={setIsConfiguringPizza} />;
}

export default App;
