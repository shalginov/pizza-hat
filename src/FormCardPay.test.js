import { render, fireEvent, getByText } from "@testing-library/react"
import { StaticRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { FormCardPay } from "./FormCardPay"
import { get } from "react-hook-form"

describe("card pay form", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(
            <StaticRouter>
                <FormCardPay />
            </StaticRouter>
        )
        expect(getByLabelText(/card number/i)).toBeInTheDocument
        expect(getByLabelText(/expiration date/i)).toBeInTheDocument
        expect(getByLabelText(/cvv security code/i)).toBeInTheDocument
    })
})

describe("inputs data", () => {
    describe("validates values", () => {
        describe("with empty data", () => {
            it("shows error message", async () => {
                const { getByText } = render(
                    <StaticRouter>
                        <FormCardPay />
                    </StaticRouter>
                )
                await act(async () => {
                    fireEvent.click(getByText("Pay"))
                })
                expect(getByText(/card number is required/i)).toBeInTheDocument
                expect(getByText(/expiration date is required/i)).toBeInTheDocument
                expect(getByText(/cvv code is required/i)).toBeInTheDocument
            })
        })
        describe("with incomplete data", () => {
            it("shows error message", async () => {
                const { getByText, getByLabelText } = render(
                    <StaticRouter>
                        <FormCardPay />
                    </StaticRouter>
                )
                fireEvent.input(getByLabelText(/card number/i), { target: { value: "000" } })
                fireEvent.input(getByLabelText(/expiration date/i), { target: { value: "01" } })
                fireEvent.input(getByLabelText(/cvv security code/i), { target: { value: "12" } })

                await act(async () => {
                    fireEvent.click(getByText("Pay"))
                })

                expect(getByText(/card number is 16 digits/i)).toBeInTheDocument
                expect(getByText(/date is day and month numbers/i)).toBeInTheDocument
                expect(getByText(/cvv securiry code is 3 digits/i)).toBeInTheDocument
            })
        })
    })
    describe("normalaize values", () => {
        it("shows normalize values", () => {
            const { getByLabelText, getByText } = render(
                <StaticRouter>
                    <FormCardPay />
                </StaticRouter>
            )

            const cardNumberInput = getByLabelText(/card number/i)
            const expirationDateInput = getByLabelText(/expiration date/i)
            const cvvCodeInput = getByLabelText(/cvv security code/i)

            fireEvent.input(cardNumberInput, { target: { value: "12341234123412341234" } })
            fireEvent.input(expirationDateInput, { target: { value: "010101" } })
            fireEvent.input(cvvCodeInput, { target: { value: "1234" } })

            expect(cardNumberInput.value).toEqual("1234 1234 1234 1234")
            expect(expirationDateInput.value).toEqual("01/01")
            expect(cvvCodeInput.value).toEqual("123")
        })
    })
})


describe("on submit", () => {
    it("collects iputs", async () => {
        const formSubmit = jest.fn().mockImplementation((data) => data)
        const { getByLabelText, getByText } = render(
            <StaticRouter>
                <FormCardPay formSubmit={formSubmit} />
            </StaticRouter>
        )
        fireEvent.input(getByLabelText(/card number/i), { target: { value: "1234123412341234" } })
        fireEvent.input(getByLabelText(/expiration date/i), { target: { value: "0101" } })
        fireEvent.input(getByLabelText(/cvv security code/i), { target: { value: "123" } })

        await act(async () => {
            fireEvent.click(getByText("Pay"))
        })

        expect(formSubmit).toBeCalledWith({
            cardNumber: "1234 1234 1234 1234",
            expirationDate: "01/01",
            cvvCode: "123"
        })

    })
})