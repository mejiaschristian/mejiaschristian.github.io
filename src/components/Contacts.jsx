function Contacts() {
    return (
        <div className="contacts">
            <div className="section-header">
                <h2>Contact Me!</h2>
                <p>
                    I'm currently open to new opportunities! Feel free to reach
                    out.
                </p>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
                <a
                    href="mailto:xtian.mejias@proton.me"
                    className="btn btn-outline-light"
                >
                    <i class="fa-solid fa-envelope"></i>
                </a>

                <a
                    href="https://github.com/mejiaschristian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i class="fa-brands fa-github"></i>
                </a>

                <a
                    href="https://www.instagram.com/hujjkei_p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a
                    href="https://x.com/xtianity19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <img src="smiley.webp" alt="smiley" />
            </div>
        </div>
    );
}

export default Contacts;
