import { useState } from "react";
import { Link } from "react-router-dom";
import { usePizzaContext } from "./PizzaContext";
import { calculatePrice, DELIVERYCOST } from "./shared/utils";
import { NAVURLS } from "./shared/nav";

export const PizzaCheckouter = () => {
  const { pizza } = usePizzaContext();
  const [order, setOrder] = useState({
    street: "",
    porch: "",
    stage: "",
    flat: "",
    payMethod: "",
  });
  const { street, porch, stage, flat, payMethod } = order;

  const onAdressChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  return (
    <div>
      <fieldset>
        <legend>Check out your pizza</legend>
        <ul>
          {Object.entries(pizza).map((item) => {
            return (
              <li key={item[0]}>
                <span style={{ fontWeight: "bolder" }}>{item[0]}: </span>
                <span>{item[1]}</span>
              </li>
            );
          })}
        </ul>
        <p>Price: {calculatePrice(pizza)}</p>
      </fieldset>
      <form onChange={onAdressChange}>
        <fieldset>
          <legend>Delivery address</legend>
          <label>
            Street:
            <input
              name="street"
              placeholder="Enter address"
              value={street}
            ></input>
          </label>
          <label>
            Porch:<input name="porch" value={porch}></input>
          </label>
          <label>
            Stage:<input name="stage" value={stage}></input>
          </label>
          <label>
            Flat:<input name="flat" value={flat}></input>
          </label>
          <label>
            <input
              name="payMethod"
              type="radio"
              value="card"
              checked={payMethod === "card" || payMethod === ""}
            />{" "}
            Visa/MC
          </label>
          <label>
            <input name="payMethod" type="radio" value="cash" /> Cash
          </label>
        </fieldset>
        <fieldset>
          <p>Pizza {calculatePrice(pizza)}</p>
          <p>Delivery {DELIVERYCOST}</p>
          <Link to={NAVURLS.pizzaOrder}>
            <button>Pay: {DELIVERYCOST + calculatePrice(pizza)}</button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};
