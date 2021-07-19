import { useForm } from "react-hook-form"

const normalizeCardNumber = (value) => {
    return (
        value
            .replace(/\s/g, "")
            .match(/[0-9]{1,4}/g)
            ?.join(" ")
            .substr(0, 19) || ""
    )
}

const figureOutVisaOrMasterCard = (value) => {
    if (value.substr(0, 1) === 4) {
        return "Visa"
    }
    if (value.substr(0, 1) === 5) {
        return "Mastercard"
    }
    return false
}

export const FormCardPay = () => {
    const { register, handleSubmit, watch } = useForm()

    const cardNumber = register("cardNumber")
    const cardNumberValue = watch("cardNumber")

    const onSubmit = (data) => {
        console.log(data);
    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Card</legend>
            <label>Card Number
                <input
                    {...cardNumber}
                    type="tel"
                    placeholder="0000 0000 0000 0000"
                    onChange={e => {
                        cardNumber.onChange(e)
                        e.target.value = normalizeCardNumber(e.target.value)
                    }}
                >
                </input>
            </label>
            {cardNumberValue && <p>{figureOutVisaOrMasterCard(cardNumberValue)}</p>}
            <br />
            <label>Expiration Date
                <input {...register("expirationDate")} placeholder="mm/dd"></input>
            </label>
            <br />
            <label>CVV Security Code
                <input {...register("cvvCode")} placeholder="000"></input>
            </label>
            <br />
            <button>submit</button>
        </fieldset>
    </form>
}