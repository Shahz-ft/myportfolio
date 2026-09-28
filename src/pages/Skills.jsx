const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Building responsive, interactive interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
  },
  {
    number: '02',
    title: 'Backend & Data',
    description: 'Working with server-side development and databases.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'DBMS']
  },
  {
    number: '03',
    title: 'Programming',
    description: 'Programming fundamentals and problem-solving.',
    skills: ['Python', 'JavaScript', 'OOP', 'Java']
  },
  {
    number: '04',
    title: 'Tools & Design',
    description: 'Tools for development, collaboration, and design.',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva']
  },
  {
    number: '05',
    title: 'Hardware & IoT',
    description: 'Connecting software with physical systems.',
    skills: ['ESP32', 'IoT', 'Embedded Systems', 'Sensors']
  }
]

const Skills = ()=> {
  return (
    <div className="page inner-page container">
      <section className="page-intro">
        <p className="eyebrow">THE TOOLKIT / 04</p>

        <h1 className="display-title">
          Skills I've
          <br />
          <span>been building.</span>
        </h1>

        <p className="page-lead">
          A growing toolkit across software, design,
          and electronics. I'm always learning something new.
        </p>
      </section>

      <section className="skills-editorial">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <div className="skill-group-number">{group.number}</div>

            <div className="skill-group-info">
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="skills-note">
        <span className="note-symbol">✳</span>
        <div>
          <p className="eyebrow">ALWAYS IN PROGRESS</p>
          <h2>
            Skills grow when
            <br />
            <span>you put them to work.</span>
          </h2>
          <p>
            I focus on applying what I learn through projects,
            experiments, and practical problem-solving.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Skills