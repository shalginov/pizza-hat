import { useState } from "react"
import { Link } from "react-router-dom"
import { NAVURLS } from "./shared/nav"

export const FormAuth = () => {
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    return <div>
        <form>
            <fieldset>
                <legend>Authorization</legend>
                <h4>Enter your login password</h4>
                <label>
                    login: 
                    <input 
                        type="text"
                        placeholder="Your login"
                        name="login"
                        value={login}>
                    </input>
                </label>
                <label>
                    password:
                    <input
                        type="password"
                        placeholder="Your password"
                        name="pass"
                        value={pass}>
                    </input>
                </label>
            </fieldset>
            <button>Enter</button>
        </form>
        <Link to={NAVURLS.registration}>Registration</Link>
    </div>
}