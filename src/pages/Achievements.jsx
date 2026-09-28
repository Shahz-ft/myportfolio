const achievements = [
  {
    number: '01',
    category: 'ACADEMIC',
    title: 'B.Tech in Electronics and Computer Engineering',
    detail:
      'Completed the undergraduate degree at LBS Institute of Technology for Women.'
  },
  {
    number: '02',
    category: 'PROJECT',
    title: "Skill'IT AI",
    detail:
      'Built an AI-assisted learning platform with summarization, quiz generation, flashcards, and question answering.'
  },
  {
    number: '03',
    category: 'INTERNSHIP',
    title: 'Full Stack Web Development',
    detail:
      'Completed an online internship with Pantech Prolabs India Pvt. Ltd.'
  },
  {
    number: '04',
    category: 'INTERNSHIP',
    title: 'Data Science & Machine Learning',
    detail:
      'Completed an online internship with Genzee Technologies LLP.'
  },
  {
    number: '05',
    category: 'COMMUNITY',
    title: 'FOSS Club & Innovation Activities',
    detail:
      'Participated in student technology and innovation activities, including FOSS Club and IEDC volunteering.'
  }
]

const Achievements =()=> {
  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">MILESTONES / 05</p>

        <h1 className="display-title">
          Small steps.
          <br />
          <span>Real progress.</span>
        </h1>

        <p className="page-lead">
          Experiences and milestones that are part of
          my learning journey so far.
        </p>
      </section>

      <section className="achievement-list">
        {achievements.map((item) => (
          <article className="achievement-row" key={item.number}>
            <span className="achievement-number">{item.number}</span>

            <div className="achievement-main">
              <span className="eyebrow">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>

            <span className="achievement-mark">↗</span>
          </article>
        ))}
      </section>

      <p className="achievement-footnote">
        Certifications and external links
      </p>
    </div>
  )
}

export default Achievements