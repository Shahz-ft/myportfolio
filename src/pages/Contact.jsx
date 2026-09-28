const Contact = ()=> {
  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    )

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )

    window.location.href =
      `mailto:shahanabeevi12@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">THE NEXT CHAPTER / 06</p>

        <h1 className="display-title">
          Have a good
          <br />
          <span>one in mind?</span>
        </h1>

        <p className="page-lead">
          Whether it's an opportunity, a collaboration,
          or just a conversation about something interesting,
          my inbox is open.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Let's make
            <br />
            something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            I'm interested in entry-level development roles,
            collaborative projects, and opportunities to keep
            learning through real work.
          </p>

          <div className="contact-links">
            <a href="mailto:shahanabeevi12@gmail.com">
              <span>Email</span>
              <span>shahanabeevi12@gmail.com ↗</span>
            </a>

            <a
              href="https://github.com/Shahz-ft"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>Shahz-ft ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shahana-beevi12/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>Connect with me ↗</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">SEND A MESSAGE</p>

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="What should I call you?"
            required
          />

          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">What's on your mind?</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me a little about it..."
            required
          ></textarea>

          <button className="button button-light" type="submit">
            Open email app <span>↗</span>
          </button>

          <p className="form-note">
            This opens your default email application with
            your message filled in.
          </p>
        </form>
      </section>

      <div className="contact-signoff">
        <span>UNTIL THEN, KEEP MAKING THINGS.</span>
        <span>✳</span>
      </div>
    </div>
  )
}

export default Contact