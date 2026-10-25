import { useState, useEffect } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contacts from "../components/Contacts";

function MainPage() {
    const [activeSection, setActiveSection] = useState("header");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(
                ".main-content > div[id]",
            );
            let currentId = "header";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    currentId = section.getAttribute("id");
                }
            });
            setActiveSection(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Custom scroll handler to prevent URL hash changes
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-around">
                <div>
                    <div className="table-of-contents border-end px-4">
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="#header"
                                    onClick={(e) =>
                                        scrollToSection(e, "header")
                                    }
                                    className={
                                        activeSection === "header"
                                            ? "link-active"
                                            : ""
                                    }
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    onClick={(e) =>
                                        scrollToSection(e, "projects")
                                    }
                                    className={
                                        activeSection === "projects"
                                            ? "link-active"
                                            : ""
                                    }
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#certifications"
                                    onClick={(e) =>
                                        scrollToSection(e, "certifications")
                                    }
                                    className={
                                        activeSection === "certifications"
                                            ? "link-active"
                                            : ""
                                    }
                                >
                                    Certifications
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacts"
                                    onClick={(e) =>
                                        scrollToSection(e, "contacts")
                                    }
                                    className={
                                        activeSection === "contacts"
                                            ? "link-active"
                                            : ""
                                    }
                                >
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="main-content">
                    <div id="header">
                        <Header />
                    </div>
                    <div id="projects" className="projects">
                        <Projects />
                    </div>
                    <div id="certifications" className="certifications">
                        <Certificates />
                    </div>
                    <div id="contacts" className="contacts">
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
