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