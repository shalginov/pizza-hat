import { Link } from "react-router-dom"
import { AuthenticationForm } from "./AuthenticationForm"

export const AuthenticationPage = () => {
    return (
        <div>
            <AuthenticationForm />
            <Link to="/registration">Registration</Link>
        </div>
    )
}