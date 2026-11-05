import { NavLink } from "react-router";

function Navbar() {
    const getNavClass = ({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "link-active" : "";

    return (
        <>
            {/* Desktop View */}
            <div className="table-of-contents border-end pe-4">
                <ul className="list-unstyled ">
                    <li>
                        <NavLink to="/about" className={getNavClass}>
                            <i class="fa-solid fa-circle-info"></i> About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={getNavClass}>
                            <i class="fa-solid fa-briefcase"></i> Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/certifications" className={getNavClass}>
                            <i class="fa-solid fa-graduation-cap"></i> Certifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={getNavClass}>
                            <i class="fa-solid fa-address-book"></i> Contacts
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
                    Certifications
                </NavLink>
                <NavLink to="/contacts" className={getNavClass}>
                    Contacts
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;
