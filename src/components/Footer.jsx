import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/" className="footer-logo">
          shahz<span>.</span>
        </Link>

        <p>
          Building things, learning constantly,
          and figuring it out along the way.
        </p>

        <Link to="/contact" className="footer-contact">
          Let's talk ↗
        </Link>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shahana Beevi</p>

        <div className="footer-socials">
          <a
            href="https://github.com/Shahz-ft"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shahana-beevi12/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <p>Designed with intention.</p>
      </div>
    </footer>
  )
}

export default Footer