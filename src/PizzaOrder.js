import { usePizzaContext } from "./PizzaContext";
import { calculatePrice } from "./shared/utils";

export const PizzaOrder = () => {
  const { pizza } = usePizzaContext();
  const error = false;

  if (error) {
    return (
      <div>
        <h4>Payment failed</h4>
        <button>Try again</button>
      </div>
    );
  }

  return (
    <div>
      <h4>Thanks for order!</h4>
      <p>Order successfully paid, wait your pizza in an hour</p>
      <p>order #2390</p>
      <p>date, time</p>
      <fieldset>
        <legend>Your pizza</legend>
        <p>{pizza && Object.values(pizza).map((item) => `${item} - `)}</p>
        <p>{calculatePrice(pizza)}$</p>
        <p style={{ fontWeight: "bolder" }}>card number</p>
        <p>delivered</p>
      </fieldset>
    </div>
  );
};
