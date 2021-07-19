import { Route, Switch } from "react-router-dom";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";
import { FormAuth } from "./FormAuth";
import { FormRegistration } from "./FormRegistrartion";
import { PizzaOrder } from "./PizzaOrder";
import { OrdersPage } from "./OrdersPage";
import { FormCardPay } from "./FormCardPay"
import { PageNotFound } from "./PageNotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaConfigurator></PizzaConfigurator>
      </Route>
      <Route path="/login">
        <FormAuth></FormAuth>
      </Route>
      <Route path="/registration">
        <FormRegistration></FormRegistration>
      </Route>
      <Route path="/pizza-configurator">
        <PizzaConfigurator></PizzaConfigurator>
      </Route>
      <Route path="/pizza-checkouter">
        <PizzaCheckouter></PizzaCheckouter>
      </Route>
      <Route path="/pizza-order">
        <PizzaOrder></PizzaOrder>
      </Route>
      <Route path="/orders">
        <OrdersPage></OrdersPage>
      </Route>
      <Route path="/card-pay">
        <FormCardPay></FormCardPay>
      </Route>
      <Route>
        <PageNotFound></PageNotFound>
      </Route>
    </Switch>
  );
}

export default App;
