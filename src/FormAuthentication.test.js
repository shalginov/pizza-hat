import { render, fireEvent } from "@testing-library/react"
import { StaticRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { FormAuthentication } from "./FormAuthentication"

describe("form authentication", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(
            <StaticRouter>
                <FormAuthentication />
            </StaticRouter>
        )
        expect(getByLabelText(/login/i)).toBeInTheDocument
        expect(getByLabelText(/password/i)).toBeInTheDocument
    })
})

describe("on submit", () => {
    it("collects login and password", async () => {
        const formSubmit = jest.fn().mockImplementation(data => data)
        const { getByLabelText, getByText } = render(
            <StaticRouter>
                <FormAuthentication formSubmit={formSubmit} />
            </StaticRouter>
        )

        fireEvent.input(getByLabelText(/login:/i), { target: { value: "John" } })
        fireEvent.input(getByLabelText(/password:/i), { target: { value: "0123456789" } })

        await act(async () => {
            fireEvent.click(getByText("Enter"))
        })

        expect(formSubmit).toBeCalledWith({
            login: "John",
            password: "0123456789",
        })
    })
})