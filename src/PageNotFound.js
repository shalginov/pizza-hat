import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return <div>
        <h1 style={{ textAlign: "center" }}>404 Page not found</h1>
        <Link to="/">Home</Link>
    </div>
}
