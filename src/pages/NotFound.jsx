import { Link } from "react-router";

function NotFound() {
    return (
        <div className="text-center mt-5">
            <i className="text-muted">you are not supposed to be here, sir</i>
            <br />
            <Link className="text-decoration-none link-info" to="/">
                go back?
            </Link>
        </div>
    );
}

export default NotFound;
