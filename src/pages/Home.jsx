import { Link } from 'react-router-dom'

const featuredProjects = [
  {
    number: '01',
    title: "Skill'IT AI",
    type: 'AI LEARNING PLATFORM',
    description:
      'An AI-powered learning assistant for summaries, quizzes, flashcards, and questions.',
    stack: 'React · Node.js · Express · AI',
    path: '/projects',
    className: 'project-visual-ai'
  },
  {
    number: '02',
    title: 'Homely Hub',
    type: 'HOMESTAY BOOKING PLATFORM',
    description:
      'A homestay booking platform designed to help users discover places to stay.',
    stack: 'React · Redux · Node.js · MongoDB',
    path: '/projects',
    className: 'project-visual-home'
  },
  {
    number: '03',
    title: 'Laser Bird Deterrent',
    type: 'IOT / EMBEDDED SYSTEMS',
    description:
      'An automated bird deterrent concept using an ESP32, camera, servo motors, and laser module.',
    stack: 'ESP32 · IoT · Embedded Systems',
    path: '/projects',
    className: 'project-visual-iot'
  }
]

const Home=()=> {
  return (
    <div className="page home-page">
      <section className="home-hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            FULL STACK DEVELOPER · DESIGNER
          </p>

          <h1 className="hero-title">
            Ideas into
            <br />
            <span>reality.</span>
          </h1>

          <p className="hero-intro">
            Hi, I'm <strong>Shahana Beevi</strong> — a developer
            with an engineer's curiosity and a creative eye.
            I enjoy building useful digital experiences,
            exploring new technologies, and learning by making.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button button-light">
              Explore my work <span>↗</span>
            </Link>

            <Link to="/about" className="text-button">
              A little about me <span>→</span>
            </Link>
          </div>

          <div className="hero-note">
            <span className="availability-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="Portrait of Shahz "
              className="portrait-image"
            />
          </div>

          <span className="portrait-caption">
            FIG. 01 — A WORK IN PROGRESS
          </span>

          <span className="portrait-side-note">
            THIRUVANANTHAPURAM, INDIA
          </span>

          <span className="portrait-star">✳</span>
        </div>

        <div className="hero-index">
          <span>PORTFOLIO / 2026</span>
          <span>01 — 07</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <span className="eyebrow">A LITTLE ABOUT MY APPROACH</span>
          <p>
            Technical thinking. Creative problem-solving.
            A curiosity that keeps going.
          </p>
          <Link to="/about" className="arrow-link">
            More about me ↗
          </Link>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-topline">
          <span className="eyebrow">01 / SELECTED WORK</span>
          <Link to="/projects" className="text-button">
            All projects <span>↗</span>
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="featured-project" key={project.number}>
              <Link to={project.path} className="project-art-link">
                <div className={`project-art ${project.className}`}>
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

                  <span className="art-arrow">↗</span>
                </div>
              </Link>

              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.number}</span>
              </div>

              <h3>
                <Link to={project.path}>{project.title}</Link>
              </h3>

              <p>{project.description}</p>

              <span className="project-stack">{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-statement">
        <div className="container statement-inner">
          <p className="eyebrow">02 / THE PERSON BEHIND THE SCREEN</p>

          <h2>
            Still learning.
            <br />
            <span>Always becoming.</span>
          </h2>

          <div className="statement-bottom">
            <p>
              From electronics and embedded systems to full stack
              development, I'm interested in how ideas become
              things people can actually use.
            </p>

            <Link to="/experience" className="button button-outline">
              Explore my journey ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="container home-contact">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>Let's make it <span>happen.</span></h2>
        <Link to="/contact" className="button button-light">
          Get in touch ↗
        </Link>
      </section>
    </div>
  )
}

export default Home