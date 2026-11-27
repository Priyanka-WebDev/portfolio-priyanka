import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              Priyanka<span>.</span>
            </Link>
            <p>
              Building thoughtful and user-friendly web experiences with React
              and modern frontend technologies.
            </p>
          </div>

          <div className="footer-navigation">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect with me</h4>
            <a
              href="https://github.com/Priyanka-WebDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-doifode-69339a268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:priyankadoif@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Priyanka. All rights reserved.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
          <p className="footer-credit">Designed & built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
