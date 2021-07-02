<<<<<<< HEAD
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom"
import { PizzaCheckouter } from "./PizzaCheckouter";

describe("PizzaCheckouter unit test", () => {
  it("renders PizzaCheckouter", () => {
    const { getByText } = render(
      <StaticRouter>
        <PizzaCheckouter />
      </StaticRouter>
    );
    expect(getByText(/Check out your pizza/)).toBeInTheDocument();
  });
});
=======
import {render} from "@testing-library/react"
import {PizzaCheckouter} from "./PizzaCheckouter"

it.todo("unit test PizzaCheckouter component")

describe("PizzaCheckouter", ()=>{
    it("renders PizzaCheckouter", ()=> {
        const {getByText} = render(<PizzaCheckouter pizza={{}}/>)
        expect(getByText(/Check out your pizza/)).toBeInTheDocument()
    })
})
>>>>>>> parent of c263b14 (use prettier)
