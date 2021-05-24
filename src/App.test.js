import { render, fireEvent } from '@testing-library/react';
import App from './App';

it.todo("Integration test of App");

describe("App", ()=>{
  test("user can configure the pizza and preview the order", ()=>{
    //Arrange
    //Act
    const {getByText} = render(<App/>)
    const pizzaConfigurator = getByText("Configure your pizza")
    //Assert
    expect(pizzaConfigurator).toBeInTheDocument()
    //Arrange
    const submitButton = getByText(/Order for:/)
    //Act
    fireEvent.submit(submitButton)
    const pizzaCheckout = getByText("Check out your pizza")
    //Assert
    expect(pizzaCheckout).toBeInTheDocument
  })
})