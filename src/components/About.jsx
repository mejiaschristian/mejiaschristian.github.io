function About() {
    return (
        <header data-reveal>
            <div className="greetings text-muted mb-3">
                <h1 className="d-inline fs-1">ᜉᜄ᜔ᜊᜆᜒ!</h1>
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
                    target="_blank"
                >
                    React JS
                </a>
                . While the learning curve is always moving, I genuinely love
                the challenge of figuring things out and bringing ideas to life
                on the web.{" "}
            </p>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <img src="modbear.webp" alt="Modified Bear" />
            </div>
        </header>
    );
}

export default About;
