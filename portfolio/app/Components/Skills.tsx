import Reveal from "./Reveal";

type SkillCategory = {
  number: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "✳",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "UI & Styling",
    description: "Creating clean, consistent, and responsive designs.",
    icon: "◈",
    skills: ["Tailwind CSS", "Bootstrap", "Mantine UI"],
  },
  {
    number: "03",
    title: "API & Integration",
    description: "Connecting frontend applications with backend services.",
    icon: "⌘",
    skills: ["REST APIs", "Axios", "JSON"],
  },
  {
    number: "04",
    title: "Tools & Exploring",
    description: "Development tools and technologies I'm learning.",
    icon: "✦",
    skills: ["Git", "GitHub", "TypeScript", "Next.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section heading */}
        <div className="skills-heading">
          <span className="section-tag">
            <span className="section-tag-dot" />
            MY TOOLKIT
          </span>

          <h2>
            Skills & <span>technologies.</span>
          </h2>

          <p>
            The tools and technologies I use to bring ideas to life and build
            meaningful web experiences.
          </p>
        </div>

        {/* Skills cards */}
       
{/* Skills cards */}
<div className="skills-grid">
  {skillCategories.map((category, index) => (
    <Reveal key={category.number} delay={index * 120}>
      <div className="skill-card">
        <div className="skill-card-top">
          <span className="skill-number">{category.number}</span>
          <span className="skill-icon">{category.icon}</span>
        </div>

        <h3>{category.title}</h3>

        <p className="skill-description">
          {category.description}
        </p>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="skill-card-line" />
      </div>
    </Reveal>
  ))}
</div>


        {/* Bottom note */}
        <div className="skills-note">
          <span className="skills-note-icon">✦</span>
          <p>
            Always curious, always learning, and always exploring better ways to
            build for the web.
          </p>
        </div>
      </div>
    </section>
  );
}
