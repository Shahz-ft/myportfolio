import { Link } from 'react-router-dom'

const  About = ()=> {
  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">A LITTLE CONTEXT / 01</p>

        <h1 className="display-title">
          More than
          <br />
          <span>my job title.</span>
        </h1>

        <p className="page-lead">
          I'm Shahana — an engineer by education, a developer
          in progress, and someone who likes understanding
          how things work.
        </p>
      </section>

      <section className="about-editorial">
        <div className="about-image">
          <img
            src="/profile.jpg"
            alt="Shahz "
            loading="lazy"
          />
          <span className="image-caption">
            A MOMENT, NOT A HEADSHOT.
          </span>
        </div>

        <div className="about-story">
          <p className="eyebrow">THE SHORT VERSION</p>

          <h2>
            Curious by nature.
            <br />
            <span>Technical by training.</span>
          </h2>

          <p>
            I completed my B.Tech in Electronics and Computer
            Engineering at LBS Institute of Technology for Women.
            My degree introduced me to hardware, embedded systems,
            programming, and the many ways technology can solve
            real-world problems.
          </p>

          <p>
            Along the way, I became increasingly interested in
            web development — the process of turning an idea into
            an interface that people can interact with.
          </p>

          <p>
            I'm currently developing my skills through hands-on
            full stack training and projects. I enjoy the mix of
            logic and creativity involved in building something
            from scratch.
          </p>

          <p>
            Outside code, I love photography, Dancing and
            noticing the little details that make ordinary things
            feel special.
          </p>

          <Link to="/experience" className="text-button">
            Explore my journey <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="section-topline">
          <span className="eyebrow">WHAT MATTERS TO ME</span>
          <span className="small-index">02 / 03</span>
        </div>

        <div className="values-grid">
          <article>
            <span className="value-number">01</span>
            <h3>Keep learning.</h3>
            <p>
              I believe progress comes from staying curious,
              practising, and being willing to start again.
            </p>
          </article>

          <article>
            <span className="value-number">02</span>
            <h3>Make it useful.</h3>
            <p>
              I want to build things that solve real problems
              and make someone's experience a little easier.
            </p>
          </article>

          <article>
            <span className="value-number">03</span>
            <h3>Care about details.</h3>
            <p>
              Good functionality matters. So do clarity,
              thoughtful design, and the small finishing touches.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About