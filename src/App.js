import { Route, Switch } from "react-router-dom";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";
import { FormAuth } from "./FormAuth";
import { FormRegistration } from "./FormRegistrartion";
import { PizzaOrder } from "./PizzaOrder";
import { OrdersPage } from "./OrdersPage";
import { PageNotFound } from "./PageNotFound";

function App() {
<<<<<<< HEAD
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
=======
  const {home, login, registration, pizzaCheckouter, pizzaConfigurator, pizzaOrder, ordersPage} = NAVURLS
  

   return <Switch>
      <Route exact path={home}>
        <PizzaConfigurator></PizzaConfigurator>
      </Route>
      <Route path={login}>
        <FormAuth></FormAuth>
      </Route>
      <Route path={registration}>
        <FormRegistration></FormRegistration>
      </Route>
      <Route path={pizzaConfigurator}>
        <PizzaConfigurator></PizzaConfigurator>
      </Route>
      <Route path={pizzaCheckouter}>
        <PizzaCheckouter></PizzaCheckouter>
      </Route>
      <Route path={pizzaOrder}>
        <PizzaOrder></PizzaOrder>
      </Route>
      <Route path={ordersPage}>
>>>>>>> parent of c263b14 (use prettier)
        <OrdersPage></OrdersPage>
      </Route>
      <Route>
        <PageNotFound></PageNotFound>
      </Route>
<<<<<<< HEAD
    </Switch>
  );
=======
  </Switch>  
>>>>>>> parent of c263b14 (use prettier)
}

export default App;
