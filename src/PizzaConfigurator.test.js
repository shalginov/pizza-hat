import {render, fireEvent} from "@testing-library/react"
import {PizzaConfigurator} from "./PizzaConfigurator"

it.todo("unit test PizzaConfigurator component")

describe("PizzaConfigurator", () => {
    it("renders PizzaConfigurator and click submit button", () => {
        //Arrange
        const someFunc= jest.fn()
        const {getByText} = render(<PizzaConfigurator handlerSubmitted={someFunc} pizza={{}}/>)
        const submitButton = getByText(/Order for:/)
        //Act
        fireEvent.click(submitButton)
        //Assert
        expect(getByText(/Configure your pizza/)).toBeInTheDocument
        expect(someFunc).toHaveBeenCalled()        
    })
    it("calls handler on change input", () => {
        const handleInput = jest.fn()
        const {getByDisplayValue} = render(<PizzaConfigurator pizzaSetter={handleInput} pizza={{}}/>)
        const sizeInput = getByDisplayValue("30")
        // fireEvent.change(sizeInput, {target: {value: 30}})
        fireEvent.click(sizeInput)
        expect(handleInput).toHaveBeenCalled()
    })

})