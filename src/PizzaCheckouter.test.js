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
