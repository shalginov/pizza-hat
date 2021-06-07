import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it.todo("Integration test of App");

describe("App", () => {
  test("user can configure the pizza and preview the order", () => {
    const { getByText } = render(<App />);
    const pizzaConfigurator = getByText("Configure your pizza");
    expect(pizzaConfigurator).toBeInTheDocument();
    const submitButton = getByText(/Order for:/);
    fireEvent.click(submitButton);
    const pizzaCheckout = getByText("Check out your pizza");
    expect(pizzaCheckout).toBeInTheDocument;
  });

  it("renders user input", () => {
    const { getByDisplayValue, getByText } = render(<App />);
    const sizeInput = getByDisplayValue("30");
    fireEvent.click(sizeInput);
    const submitButton = getByText(/Order for:/);
    fireEvent.click(submitButton);
    const sizeRender = getByText("30");
    expect(sizeRender).toBeInTheDocument;
  });
});
