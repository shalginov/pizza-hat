import { render } from "@testing-library/react"
import { StaticRouter } from "react-router-dom"
import { PizzaCheckouter } from "./PizzaCheckouter"

describe("PizzaCheckouter", () => {
    it("Pizza chekouter renders correctly", () => {
        const { getByText } = render(
            <StaticRouter>
                <PizzaCheckouter />
            </StaticRouter>
        );
        expect(getByText(/Check out your pizza/i)).toBeInTheDocument();
    })
});