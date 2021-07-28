import { useForm } from "react-hook-form"

const normalizeCardNumber = (value = "") => {
    return (
        value
            .replace(/\s/g, "")
            .match(/[0-9]{1,4}/g)
            ?.join(" ")
            .substr(0, 19) || ""
    )
}

const normalizeExpirationDate = (value = "") => {
    return (
        value
            .replace(/\s/g, "")
            .match(/[0-9]{1,2}/g)
            ?.join("/")
            .substr(0, 5) || ""
    )
}

const normalizeCvvCode = (value = "") => {
    return (
        value
            .replace(/\s/g, "")
            .match(/[0-9]/g)
            ?.join("")
            .substr(0, 3) || ""
    )
}

const figureOutVisaOrMasterCard = (value) => {
    if (value.substr(0, 1) === "4") {
        return "Visa"
    }
    if (value.substr(0, 1) === "5") {
        return "Mastercard"
    }
    return false
}

export const FormCardPay = ({ formSubmit }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const cardNumber = register("cardNumber", {
        required: {
            value: true,
            message: "card number is required"
        },
        minLength: {
            value: 19,
            message: "card number is 16 digits"
        },
    })

    const cardNumberValue = watch("cardNumber")
    const expirationDateValue = watch("expirationDate")
    const cvvCodeValue = watch("cvvCode")

    const onSubmit = (data) => {
        console.log(data);
        formSubmit(data)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Card</legend>
            <label>Card Number
                <input {...cardNumber}
                    placeholder="0000 0000 0000 0000"
                    value={normalizeCardNumber(cardNumberValue)}
                >
                </input>
            </label>
            {errors?.cardNumber && <p>{errors.cardNumber.message}</p>}
            {cardNumberValue && <p>{figureOutVisaOrMasterCard(cardNumberValue)}</p>}
            <br />
            <label>Expiration Date
                <input {
                    ...register("expirationDate", {
                        required: {
                            value: true,
                            message: "expiration date is required"
                        },
                        minLength: {
                            value: 5,
                            message: "date is day and month numbers"
                        }
                    })
                }
                    placeholder="mm/dd"
                    value={normalizeExpirationDate(expirationDateValue)}
                ></input>
            </label>
            {errors?.expirationDate && <p>{errors.expirationDate.message}</p>}
            <br />
            <label>CVV Security Code
                <input {
                    ...register("cvvCode", {
                        required: {
                            value: true,
                            message: "cvv code is required"
                        },
                        minLength: {
                            value: 3,
                            message: "cvv securiry code is 3 digits"
                        }
                    })
                }
                    placeholder="000"
                    value={normalizeCvvCode(cvvCodeValue)}
                ></input>
            </label>
            {errors?.cvvCode && <p>{errors.cvvCode.message}</p>}
            <br />
            <button>Pay</button>
        </fieldset>
    </form>
}