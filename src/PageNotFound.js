import { Link } from "react-router-dom";
import { NAVURLS } from "./shared/nav";

export const PageNotFound = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>404 Page not found</h1>
      <Link to={NAVURLS.home}>Home</Link>
    </div>
  );
};
