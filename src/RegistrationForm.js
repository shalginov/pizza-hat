import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

export const RegistrationForm = ({ formSubmit = (data = {}) => { console.log(data); } }) => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmit = (data) => {
        formSubmit(data)
        history.push("./login")
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Registration</legend>
            <h4>Enter your login password</h4>
            <label>
                login:
                <input
                    type="text"
                    placeholder="Your login"
                    {...register("login")}>
                </input>
            </label>
            <label>
                password:
                <input
                    type="password"
                    placeholder="Your password"
                    {...register("password")}>
                </input>
            </label>
        </fieldset>
        <button>Register</button>
    </form>
}