import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaOrderCheckouter } from "./PizzaOrderCheckouter";
const BASEPRICE = 200;
const SIZEADDTOPRICE = 50;
const TOPPINGADDTOPRICE = 39;

function App() {
  const [isConfiguringPizza, setIsConfiguringPizza] = useState(true);
  const [order, setOrder] = useState({})
  
  if (isConfiguringPizza) return <PizzaConfigurator constProps={{BASEPRICE, SIZEADDTOPRICE, TOPPINGADDTOPRICE}} orderProp={{order, setOrder}} setIsConfiguringPizza={setIsConfiguringPizza} />;
  if (!isConfiguringPizza) return <PizzaOrderCheckouter order={order} setIsConfiguringPizza={setIsConfiguringPizza} />;
}

export default App;
