import { render, screen } from '@testing-library/react';
import App from './App';

it.todo("renders PizzaConfigurator, PizzaOrderCheckouter it depends of state isConfiguringPizza");

describe("render App's components", ()=>{
  it("render PizzaConfigurator, cause isConfiguringPizza state is true", ()=>{
    //Arrange
    //Act
    const {getByText} = render(<App/>)
    const pizzaConfigurator = getByText("Configure your pizza")
    //Assert
    expect(pizzaConfigurator).toBeInTheDocument()
  })
})