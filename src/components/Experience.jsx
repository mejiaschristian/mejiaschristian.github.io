const learningStages = [
    {
        period: "Senior high school – first year IT",
        title: "Web development basics",
        description:
            "I started learning how websites and simple applications are built.",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Android Studio"],
    },
    {
        period: "Second–third year IT · Current",
        title: "Frontend and backend",
        description:
            "I’m currently studying React and backend development as part of my IT studies.",
        skills: ["React", "Node.js", "MongoDB"],
    },
];

function Experience() {
    return (
        <section className="experience" aria-labelledby="experience-title">
            <header className="section-header" data-reveal>
                <h2 id="experience-title">What I’ve been learning</h2>
                <p>
                    A short timeline of my IT studies and the tools I’ve used.
                </p>
            </header>

            <ol className="experience-timeline" data-reveal>
                {learningStages.map((stage) => (
                    <li
                        className="experience-stage"
                        data-reveal
                        key={stage.period}
                    >
                        <article className="experience-entry">
                            <p className="experience-period">{stage.period}</p>
                            <h3>{stage.title}</h3>
                            <p className="experience-description">
                                {stage.description}
                            </p>
                            <ul
                                className="experience-skills"
                                aria-label={`${stage.title} technologies`}
                            >
                                {stage.skills.map((skill) => (
                                    <li key={skill}>
                                        <span className="card pb-0 mx-2 skill-badge" >{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Experience;
