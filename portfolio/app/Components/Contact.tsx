const contactLinks = [
  {
    label: "Email",
    value: "priyankadoif@gmail.com",
    href: "mailto:priyankadoif@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/priyanka-doifode-69339a268/",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/Priyanka-WebDev",
    icon: "⌘",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-tag">
            <span className="section-tag-dot" />
            GET IN TOUCH
          </span>

          <h2>
            Let's create something <span>great.</span>
          </h2>

          <p>
            I'm always open to discussing frontend opportunities, interesting
            projects, and new connections. Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk!</h3>

            <p>
              Have an opportunity or just want to connect? I'd love to hear from
              you.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="contact-link"
                >
                  <span className="contact-link-icon">{link.icon}</span>

                  <span className="contact-link-text">
                    <small>{link.label}</small>
                    <strong>{link.value}</strong>
                  </span>

                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-message-card">
            <span className="contact-message-icon">✦</span>

            <h3>Have a project or opportunity in mind?</h3>

            <p>
              I'm interested in frontend developer opportunities where I can
              contribute my React.js skills and continue growing as a developer.
            </p>

            <a
              href="mailto:priyankadoif@gmail.com?subject=Frontend%20Developer%20Opportunity"
              className="contact-email-button"
            >
              Say Hello <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
