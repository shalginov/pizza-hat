import { render, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { AuthenticationForm } from "./AuthenticationForm"

describe("form authentication", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(<AuthenticationForm />)
        expect(getByLabelText(/login/i)).toBeInTheDocument
        expect(getByLabelText(/password/i)).toBeInTheDocument
    })
})

describe("on submit", () => {
    it("collects login and password", async () => {
        const formSubmit = jest.fn()
        const { getByLabelText, getByText } = render(<AuthenticationForm formSubmit={formSubmit} />)

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