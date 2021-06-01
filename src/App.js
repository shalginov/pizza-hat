import { Route, Switch } from "react-router-dom"
import { PizzaConfigurator } from "./PizzaConfigurator";
import { PizzaCheckouter } from "./PizzaCheckouter";
import { FormAuth } from "./FormAuth"
import { FormRegistration } from "./FormRegistrartion"
import { PageNotFound } from "./PageNotFound"
import { NAVURLS } from "./shared/nav"

function App() {
  const {home, login, registration, pizzaCheckouter, pizzaConfigurator} = NAVURLS
  

   return <div>
  <Switch>
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
      <Route>
        <PageNotFound></PageNotFound>
      </Route>
    </Switch>  
    <button onClick={()=> {throw new Error("Something went wrong")}}>Break the world</button>;
   </div>

}

export default App;
