import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export const FormRegistration = () => {
    const { register, handleSubmit } = useForm()

    return <div>
        <form onSubmit={handleSubmit(() => { })}>
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
        <Link to="./login" data-testid="login-link">login</Link>
    </div>
}