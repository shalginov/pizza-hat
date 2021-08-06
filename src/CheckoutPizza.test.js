import { render } from "@testing-library/react"
import { StaticRouter } from "react-router-dom"
import { CheckoutPizza } from "./CheckoutPizza"

describe("Checkout pizza", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <StaticRouter>
                <CheckoutPizza />
            </StaticRouter>)
        expect(getByText(/check out your pizza/i)).toBeInTheDocument();
    })
});