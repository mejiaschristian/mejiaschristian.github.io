const learningStages = [
    {
        number: "01",
        period: "Senior High School + 1st Year IT",
        title: "Building the foundations",
        description:
            "In my early development years, I explored the fundamentals of web development and got my first experience creating simple applications.",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Android Studio"],
    },
    {
        number: "02",
        period: "2nd–3rd Year IT · Current",
        title: "Growing into React",
        description:
            "I’m currently learning and working with React.js and backend developement, growing my front-end and back-end skills as I continue through my IT studies.",
        skills: ["React.js", "Node.js", "MongoDB", "Still learning :)"],
    },
];

function Experience() {
    return (
        <section className="experience" aria-labelledby="experience-title">
            <header className="section-header" data-reveal>
                <p className="experience-eyebrow">My development journey</p>
                <h2 id="experience-title">Learning by building.</h2>
                <p>
                    Tools and technologies I’ve explored through
                    my Information Technology studies.
                </p>
            </header>

            <ol className="experience-timeline" data-reveal>
                {learningStages.map((stage) => (
                    <li
                        className="experience-stage"
                        data-reveal
                        key={stage.number}
                    >
                        <span className="experience-marker" aria-hidden="true">
                            {stage.number}
                        </span>
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
                                    <li key={skill}>{skill}</li>
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
