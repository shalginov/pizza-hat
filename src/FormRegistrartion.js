import { Link } from "react-router-dom";
import { useState } from "react";
import { NAVURLS } from "./shared/nav";

export const FormRegistration = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <form>
        <fieldset>
          <legend>Registration</legend>
          <h4>Enter your login password</h4>
          <label>
            login:
            <input
              type="text"
              placeholder="Your login"
              name="login"
              value={login}
            ></input>
          </label>
          <label>
            password:
            <input
              type="password"
              placeholder="Your password"
              name="pass"
              value={pass}
            ></input>
          </label>
        </fieldset>
        <button>Register</button>
      </form>
      <Link to={NAVURLS.login}>login</Link>
    </div>
  );
};
