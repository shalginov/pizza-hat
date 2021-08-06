import { render, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import { RegistrationForm } from "./RegistrationForm"

describe("registration form", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(<RegistrationForm />)

        expect(getByLabelText(/login/i)).toBeInTheDocument
        expect(getByLabelText(/password/i)).toBeInTheDocument
    })
})

describe("on submit", () => {
    it("collects inputs", async () => {
        const formSubmit = jest.fn().mockImplementation(data => data)
        const history = createMemoryHistory()
        const { getByLabelText, getByText } = render(
            <Router history={history}>
                <RegistrationForm formSubmit={formSubmit} />
            </Router>
        )


        fireEvent.input(getByLabelText(/login/i), { target: { value: "John" } })
        fireEvent.input(getByLabelText(/password/i), { target: { value: "0123456789" } })

        await act(async () => {
            fireEvent.click(getByText("Register"))
        })

        expect(formSubmit).toBeCalledWith({
            login: "John",
            password: "0123456789"
        })
    })
})