import { render } from "@testing-library/react";
import { PizzaCheckouter } from "./PizzaCheckouter";

it.todo("unit test PizzaCheckouter component");

describe("PizzaCheckouter", () => {
  it("renders PizzaCheckouter", () => {
    const { getByText } = render(<PizzaCheckouter pizza={{}} />);
    expect(getByText(/Check out your pizza/)).toBeInTheDocument();
  });
});
