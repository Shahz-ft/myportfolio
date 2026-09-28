import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/', end: true },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' }
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="logo">
          shahz<span>.</span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a className="nav-availability" href="mailto:YOUR_EMAIL@example.com">
          <span className="availability-dot"></span>
          Available for work
        </a>
      </div>
    </header>
  )
}

export default Navbar