type ExperienceItem = {
  number: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    number: "01",
    role: "Frontend Developer",
    company: "NEXFLARE DYNAMICS PVT. LTD.",
    duration: "August 2024 - May 2026",
    type: "Full-time",
    description:
      "Worked on NexHRMS, a SaaS-based Human Resource Management System, developing responsive user interfaces and implementing frontend features.",
    responsibilities: [
      "Developed reusable UI components using React.js.",
      "Integrated REST APIs using Axios.",
      "Implemented role-based access control for different user roles.",
      "Collaborated with backend developers to deliver application features.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Mantine UI",
      "REST APIs",
      "Axios",
      "HTML",
      "CSS",
      "Next Js"
    ],
  },
  {
    number: "02",
    role: "Frontend Developer Intern",
    company: "Radiant IT Services",
    duration: "July 2023 - December 2023",
    type: "Internship",
    description:
      "Gained practical experience in frontend development and worked on web interfaces and application features.",
    responsibilities: [
      "Worked with HTML, CSS, JavaScript and Bootstrap.",
      "Developed responsive web pages and UI components.",
      "Practised frontend development through hands-on projects.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Angular", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="section-tag">
            <span className="section-tag-dot" />
            MY JOURNEY
          </span>

          <h2>
            Where I've <span>worked.</span>
          </h2>

          <p>
            My professional journey, from gaining practical experience during
            internships to building real-world frontend applications.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item) => (
            <article className="experience-item" key={item.number}>
              <div className="experience-marker">
                <span>{item.number}</span>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <span className="experience-type">{item.type}</span>
                  <span className="experience-duration">{item.duration}</span>
                </div>

                <h3>{item.role}</h3>
                <h4>{item.company}</h4>

                <p className="experience-description">{item.description}</p>

                <div className="experience-responsibilities">
                  <h5>Key responsibilities</h5>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
