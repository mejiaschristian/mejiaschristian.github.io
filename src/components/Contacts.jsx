function Contacts() {
    return (
        <div className="contacts" data-reveal>
            <div className="section-header" data-reveal>
                <h2>Contact Me!</h2>
                <p>
                    I'm currently open to new opportunities! Feel free to reach
                    out.
                </p>
                Email me @{" "}
                <a
                    className="email text-decoration-none"
                    href="mailto:xtian.mejias@proton.me"
                >
                    xtian.mejias@proton.me
                </a>
            </div>

            <div
                className="social-links d-flex justify-content-center gap-3 mt-4"
                data-reveal
            >
                <a
                    href="https://github.com/mejiaschristian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i className="fa-brands fa-github"></i>
                </a>

                <a
                    href="https://www.instagram.com/hujjkei_p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                    href="https://x.com/xtianity19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center" data-reveal>
                <img src="smiley.webp" alt="smiley" />
            </div>
        </div>
    );
}

export default Contacts;
