import { NavLink } from "react-router";

function Navbar() {
    const getNavClass = ({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "link-active" : "";

    return (
        <>
            {/* Desktop View */}
            <div className="table-of-contents border-end pe-4">
                <ul className="list-unstyled">
                    <li>
                        <NavLink to="/about" className={getNavClass}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={getNavClass}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/certifications" className={getNavClass}>
                            Certifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={getNavClass}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Mobile View */}
            <nav className="mobile-bottom-nav">
                <NavLink to="/about" className={getNavClass}>
                    About
                </NavLink>
                <NavLink to="/projects" className={getNavClass}>
                    Projects
                </NavLink>
                <NavLink to="/certifications" className={getNavClass}>
                    Certificates
                </NavLink>
                <NavLink to="/contacts" className={getNavClass}>
                    Contacts
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;
