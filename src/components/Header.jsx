function Header() {
    return (
        <header>
            <div className="greetings text-muted mb-3">
                <h1 className="d-inline">ᜉᜄ᜔ᜊᜆᜒ! </h1>
                <span className="fst-italic">"Greetings!"</span>
            </div>
            <small>I am</small>
            <h1>Christian Mejias</h1>
            <p>
                Currently studying Information Technology at{" "}
                <span className="text-primary">N</span>ational{" "}
                <span className="text-warning">U</span>niversity with a passion
                for building helpful web tools.
                <br />
                <br />
                My goal is to create projects that solve small but meaningful
                problems for others. I'm currently teaching myself{" "}
                <a
                    className="link-info text-decoration-none"
                    href="https://react.dev/"
                >
                    React JS
                </a>
                . I love react. Been learning it for years yet I still consider
                myself a beginner, and often get overwhelmed. But, I love the
                process of bringing ideas to life on the web.{" "}
                <small className="fst-italic text-muted">
                    (Even when I don't feel like it.)
                </small>
            </p>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <img src="modbear.webp" alt="Modified Bear" />
            </div>
        </header>
    );
}

export default Header;
