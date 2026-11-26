import Link from "next/link";
const resumeUrl = `${
  process.env.NODE_ENV === "production" ? "/portfolio-priyanka" : ""
}/resume.pdf`;
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-container">
        {/* Availability */}
        <div className="hero-availability hero-animate hero-delay-1">
          <span className="availability-dot" />
          <span>Open to new opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="hero-title hero-animate hero-delay-2">
          Hi, I&apos;m <span className="hero-name">Priyanka.</span>
          <br />
          I build things for
          <br />
          <span className="hero-highlight">
            the web<span className="hero-period">.</span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-description hero-animate hero-delay-3">
          Frontend Developer specializing in React.js. I enjoy turning ideas
          into responsive, intuitive, and engaging digital experiences.
        </p>

        {/* Buttons */}
        <div className="hero-actions hero-animate hero-delay-4">
          <Link href="#projects" className="hero-btn-primary">
            Explore my work
            <span className="hero-btn-arrow">↗</span>
          </Link>

          <a href={resumeUrl} download className="hero-btn-secondary">
            Download resume
            <span>↓</span>
          </a>
        </div>

        {/* Tech badges */}
        <div className="hero-tech hero-animate hero-delay-5">
          <span className="hero-tech-label">Currently working with</span>

          <div className="hero-tech-list">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Next.js</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="hero-scroll">
          <span className="scroll-line" />
          <span>Scroll to explore</span>
        </a>

        {/* Decorative element */}
        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-orb" />
        </div>
      </div>
    </section>
  );
}
