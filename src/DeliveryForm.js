import { useForm } from "react-hook-form"

export const DeliveryForm = ({ formSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            payMethod: "card"
        }
    })

    const onSubmit = (data) => {
        formSubmit(data)
        console.log("delivery form data", data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Delivery address</legend>
                <label>
                    Street:<input {...register("street")} placeholder="Enter address" />
                </label>
                <label>
                    Porch:<input {...register("porch")} />
                </label>
                <label>
                    Stage:<input {...register("stage")} />
                </label>
                <label>
                    Flat:<input {...register("flat")} />
                </label>
                <label>
                    <input {...register("payMethod")} type="radio" value="card" /> Visa/MC
                </label>
                <label>
                    <input {...register("payMethod")} type="radio" value="cash" /> Cash
                </label>
            </fieldset>
        </form>
    )
}