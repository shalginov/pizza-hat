export const DeliveryForm = ({ register }) => {

    return (
        <form>
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