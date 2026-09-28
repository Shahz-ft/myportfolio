import { Link } from 'react-router-dom'

const journey = [
  {
    date: '2026 — PRESENT',
    type: 'PROFESSIONAL DEVELOPMENT',
    title: 'Full Stack Developer Training',
    place: 'Luminar Technolab · Thiruvananthapuram',
    description:
      'Developing practical skills in frontend and backend web development, including HTML, CSS, JavaScript, and hands-on application building.'
  },
  {
    date: 'JUNE 2025',
    type: 'INTERNSHIP',
    title: 'Data Science & Machine Learning Intern',
    place: 'Genzee Technologies LLP',
    description:
      'Online internship focused on data science and machine learning concepts.'
  },
  {
    date: 'MAY 2025',
    type: 'INTERNSHIP',
    title: 'Full Stack Web Development Intern',
    place: 'Pantech Prolabs India Pvt. Ltd.',
    description:
      'Online internship experience in full stack web development.'
  },
  {
    date: '2021 — 2025',
    type: 'EDUCATION',
    title: 'B.Tech — Electronics and Computer Engineering',
    place: 'LBS Institute of Technology for Women',
    description:
      'Studied electronics, computer engineering, programming, embedded systems, and related technologies.'
  }
]

const Experience = ()=> {
  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">THE JOURNEY / 03</p>

        <h1 className="display-title">
          Where I've
          <br />
          <span>been.</span>
        </h1>

        <p className="page-lead">
          Education, training, and experiences that have
          shaped the way I approach technology.
        </p>
      </section>

      <section className="timeline">
        {journey.map((item, index) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-marker">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <span>{item.date}</span>
                <span>{item.type}</span>
              </div>

              <h2>{item.title}</h2>
              <h3>{item.place}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="resume-callout">
        <div>
          <p className="eyebrow">WANT THE FULL PICTURE?</p>
          <h2>Take a look at my resume.</h2>
          <p className="muted">
            
          </p>
        </div>

        <a
          href="/resume.pdf"
          className="button button-light"
          target="_blank"
          rel="noreferrer"
        >
          View resume ↗
        </a>
      </section>

      <div className="page-bottom-link">
        <Link to="/skills" className="text-button">
          Explore my skills <span>↗</span>
        </Link>
      </div>
    </div>
  )
}

export default Experience