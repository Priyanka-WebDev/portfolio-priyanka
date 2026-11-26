import Link from "next/link";
import Reveal from "./Reveal";

const highlights = [
  {
    number: "02+",
    label: "Years of experience",
  },
  {
    number: "01",
    label: "HRMS product experience",
  },
  {
    number: "React",
    label: "Primary technology",
  },
  {
    number: "UI",
    label: "Development focus",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <Reveal>
        {/* Section heading */}
        <div className="about-heading">
          <span className="section-tag">
            <span className="section-tag-dot" />
            GET TO KNOW ME
          </span>

          <h2>
            A little about
            <span> myself.</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left content */}
          <div className="about-content">
            <p className="about-intro">
              I&apos;m a <strong>Frontend Developer</strong> who enjoys
              transforming ideas into clean, responsive, and user-friendly web
              experiences.
            </p>

            <p className="about-description">
              I have hands-on experience working with React.js, JavaScript,
              HTML, CSS, and REST APIs. I&apos;ve worked on real-world
              applications, including NexHRMS, a SaaS-based HR management
              system.
            </p>

            <p className="about-description">
              I enjoy building reusable components, solving UI challenges, and
              continuously improving my frontend development skills. Currently,
              I&apos;m exploring TypeScript and Next.js to expand my knowledge.
            </p>

            <Link href="#contact" className="about-link">
              Let&apos;s connect <span>↗</span>
            </Link>
          </div>

          {/* Right content */}
          <div className="about-details">
            {/* Experience card */}
            <div className="about-info-card">
              <div className="about-card-icon">✳</div>

              <div>
                <span className="about-card-label">EXPERIENCE</span>
                <h3>Frontend Development</h3>
                <p>
                  Building responsive interfaces and reusable components with
                  React.js.
                </p>
              </div>
            </div>

            {/* Education card */}
            <div className="about-info-card">
              <div className="about-card-icon">✦</div>

              <div>
                <span className="about-card-label">EDUCATION</span>
                <h3>B.E. Computer Science</h3>
                <p>Savitribai Phule Pune University</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.label} className="highlight-item">
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
