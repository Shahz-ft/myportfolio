const projects = [
  {
    number: '01',
    title: "Skill'IT AI",
    category: 'AI · FULL STACK',
    year: '2026',
    description:
      'An AI-powered learning assistant with tools to ask questions, summarize notes, generate quizzes, and create flashcards.',
    tech: ['React', 'Node.js', 'Express', 'OpenRouter AI'],
    theme: 'project-visual-ai',
    github: 'https://github.com/Shahz-ft/SkillIT-AI.git',
    demo: 'https://skill-it-ai.vercel.app/'
  },
  {
    number: '02',
    title: 'Homely Hub',
    category: 'FULL STACK · WEB',
    year: '2025',
    description:
      'A homestay booking platform built to help users discover places to stay through a responsive web experience.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    theme: 'project-visual-home',
    github: '',
    demo: ''
  },
  {
    number: '03',
    title: 'Automated Laser Bird Deterrent',
    category: 'IOT · EMBEDDED SYSTEMS',
    year: '2026',
    description:
      'An automated bird deterrent concept using an ESP32, camera module, servo motors, and a laser module.',
    tech: ['ESP32', 'IoT', 'Embedded Systems'],
    theme: 'project-visual-iot',
    github: '',
    demo: ''
  },
  {
    number: '04',
    title: 'Netflix Clone',
    category: 'FRONTEND',
    year: '2025',
    description:
      'A Netflix-inspired interface created to practise responsive layouts, styling, and interactive frontend development.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    theme: 'project-visual-netflix',
    github: 'https://github.com/Shahz-ft/clonetest.git',
    demo: 'https://clonetest-sigma.vercel.app/'
  },
  {
    number: '05',
    title: 'Fish Spoilage Detector',
    category: 'IOT · SENSOR SYSTEM',
    year: '2024',
    description:
      'A prototype concept for detecting fish spoilage using gas sensing, an ESP32, and local visual or audio alerts.',
    tech: ['ESP32', 'Sensors', 'IoT'],
    theme: 'project-visual-fish',
    github: '',
    demo: ''
  }
]

const Projects = ()=> {
  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">SELECTED WORK / 02</p>

        <h1 className="display-title">
          Things I've
          <br />
          <span>made.</span>
        </h1>

        <p className="page-lead">
          A collection of projects, experiments, and ideas
          brought to life with code, circuits, and curiosity.
        </p>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className={`project-row-art ${project.theme}`}>
              <span className="art-number">{project.number}</span>

              {project.number === '01' && (
                <div className="art-window">
                  <span>skill'it / ai</span>
                  <div className="art-window-line"></div>
                  <div className="art-window-block"></div>
                  <div className="art-window-block short"></div>
                </div>
              )}

              {project.number === '02' && (
                <div className="art-house">
                  <div className="house-roof"></div>
                  <div className="house-body">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}

              {project.number === '03' && (
                <div className="art-orbit">
                  <span>✳</span>
                  <i></i>
                </div>
              )}

              {project.number === '04' && (
                <div className="netflix-art">N</div>
              )}

              {project.number === '05' && (
                <div className="sensor-art">
                  <span>NH₃</span>
                  <i></i>
                </div>
              )}
            </div>

            <div className="project-row-content">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code ↗
                  </a>
                )}

                {!project.demo && !project.github && (
                  <span className="muted">
                    Add project links
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Projects