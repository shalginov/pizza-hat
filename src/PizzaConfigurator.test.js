<<<<<<< HEAD
import { render, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom"
import { PizzaConfigurator } from "./PizzaConfigurator";

describe("PizzaConfigurator unit test", () => {
  describe("on change inputs", () => {
    it("set changed value", () => {
      const { container, getByLabelText } = render(
        <StaticRouter>
          <PizzaConfigurator />
        </StaticRouter>
      )
      expect(container.innerHTML).toMatch("Configure your pizza")
      const sizeInput = getByLabelText("30");
      fireEvent.change(sizeInput);
      expect(sizeInput.value).toBe("30")
    });
  })
})
=======
import {render, fireEvent} from "@testing-library/react"
import {PizzaConfigurator} from "./PizzaConfigurator"

it.todo("unit test PizzaConfigurator component")

describe("PizzaConfigurator", () => {
    it("renders PizzaConfigurator", () => {
        const {getByText} = render(<PizzaConfigurator />)
        expect(getByText(/Configure your pizza/)).toBeInTheDocument
    })
    it("click submit button", () => {
        const someFunc= jest.fn()
        const {getByText} = render(<PizzaConfigurator submitPizzaConfig={someFunc} />)
        const submitButton = getByText(/Order for:/)
        fireEvent.click(submitButton)
        expect(someFunc).toHaveBeenCalled()        
    })   
})
>>>>>>> parent of c263b14 (use prettier)
