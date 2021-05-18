import {render} from "@testing-library/react"
import {PizzaCheckouter} from "./PizzaCheckouter"

it.todo("unit test PizzaCheckouter component")

describe("PizzaCheckouter", ()=>{
    it("renders PizzaCheckouter", ()=> {
        //Arrange
        //Act
        const {getByText} = render(<PizzaCheckouter pizza={{}}/>)
        //Assert
        expect(getByText(/Check out your pizza/)).toBeInTheDocument()
    })
})