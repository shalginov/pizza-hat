import { Route, Switch } from "react-router-dom";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { CheckoutPizza } from "./CheckoutPizza";
import { AuthenticationPage } from "./AuthenticationPage";
import { RegistrationForm } from "./RegistrationForm";
import { PizzaOrder } from "./PizzaOrder";
import { OrdersPage } from "./OrdersPage";
import { CardPayForm } from "./CardPayForm"
import { PageNotFound } from "./PageNotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaConfigurator />
      </Route>
      <Route path="/login">
        <AuthenticationPage />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
      <Route path="/pizza-configurator">
        <PizzaConfigurator />
      </Route>
      <Route path="/pizza-checkouter">
        <CheckoutPizza />
      </Route>
      <Route path="/pizza-order">
        <PizzaOrder />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/card-pay">
        <CardPayForm />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
