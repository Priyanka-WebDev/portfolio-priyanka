// type Project = {
//   number: string;
//   category: string;
//   title: string;
//   description: string;
//   highlights: string[];
//   technologies: string[];
//   featured?: boolean;
// };

import Reveal from "./Reveal";

// const projects: Project[] = [
//   {
//     number: "01",
//     category: "PROFESSIONAL PROJECT",
//     title: "NexHRMS",
//     description:
//       "A SaaS-based Human Resource Management System that helps organizations manage employee information, attendance, leave management, and other HR operations through a centralized platform.",
//     highlights: [
//       "Developed reusable and responsive UI components using React.js.",
//       "Integrated REST APIs to connect frontend modules with backend services.",
//       "Implemented role-based access control for admin, manager, branch, and employee-level access.",
//       "Worked on filtering, data handling, and improving the user experience across modules.",
//     ],
//     technologies: [
//       "React.js",
//       "JavaScript",
//       "Mantine UI",
//       "REST APIs",
//       "Axios",
//       "CSS",
//     ],
//     featured: true,
//   },
//   {
//     number: "02",
//     category: "FEATURE IMPLEMENTATION",
//     title: "Role-Based Access Control",
//     description:
//       "An access management feature within NexHRMS that controls which employee records and sections users can access based on their roles and assigned permissions.",
//     highlights: [
//       "Handled admin and employee access permissions.",
//       "Implemented manager-wise and branch-wise data access.",
//       "Managed conditional UI rendering based on user permissions.",
//       "Worked with authentication data to control access to relevant views.",
//     ],
//     technologies: [
//       "React.js",
//       "JavaScript",
//       "Role-Based Access",
//       "REST APIs",
//     ],
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">
//         <div className="projects-heading">
//           <span className="section-tag">
//             <span className="section-tag-dot" />
//             SELECTED WORK
//           </span>

//           <h2>
//             Projects & <span>experience.</span>
//           </h2>

//           <p>
//             A closer look at the applications and features I've worked on
//             as a frontend developer.
//           </p>
//         </div>

//         <div className="projects-list">
//           {projects.map((project) => (
//             <article
//               key={project.number}
//               className={`project-card ${
//                 project.featured ? "project-card-featured" : ""
//               }`}
//             >
//               <div className="project-top">
//                 <span className="project-number">{project.number}</span>
//                 <span className="project-category">{project.category}</span>
//               </div>

//               <div className="project-content">
//                 <div className="project-main">
//                   <h3>{project.title}</h3>
//                   <p className="project-description">
//                     {project.description}
//                   </p>

//                   <div className="project-tech">
//                     {project.technologies.map((technology) => (
//                       <span key={technology}>{technology}</span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-highlights">
//                   <h4>What I worked on</h4>
//                   <ul>
//                     {project.highlights.map((highlight) => (
//                       <li key={highlight}>
//                         <span className="project-check">↗</span>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="project-bottom-line" />
//             </article>
//           ))}
//         </div>

//         <p className="projects-note">
//           More projects and learning experiments coming soon.
//         </p>
//       </div>
//     </section>
//   );
// }

// type Project = {
//   number: string;
//   title: string;
//   category: string;
//   description: string;
//   technologies: string[];
//   image?: string;
//   liveLink?: string;
//   featured?: boolean;
// };

// const projects: Project[] = [
//   {
//     number: "01",
//     title: "NexHRMS",
//     category: "PROFESSIONAL PROJECT",
//     description:
//       "A SaaS-based HR Management System for managing employee information, attendance, leave management, and other HR operations. I worked on responsive interfaces, reusable React components, REST API integration, and role-based access control.",
//     technologies: [
//       "React.js",
//       "JavaScript",
//       "Mantine UI",
//       "REST APIs",
//       "Axios",
//     ],
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "Quiz App",
//     category: "INTERNSHIP PROJECT",
//     description:
//       "An interactive quiz application where users can attempt quizzes and test their knowledge.",
//     technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Angular"],
//     // image:
//     //   "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img1.jpeg",
//     liveLink: "https://developyourmind-2af71.web.app",
//   },
//   {
//     number: "03",
//     title: "Tic Tac Toe",
//     category: "INTERNSHIP PROJECT",
//     description:
//       "A classic Tic Tac Toe game with an interactive interface and game logic for two players.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     // image:
//     //   "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img3.jpeg",
//     liveLink: "https://priyanka-webdev.github.io/Tic-Tac-Toe/",
//   },
//   {
//     number: "04",
//     title: "Rock Paper Scissors",
//     category: "INTERNSHIP PROJECT",
//     description:
//       "A browser-based Rock Paper Scissors game where users play against the computer.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     liveLink: "https://priyanka-webdev.github.io/Rock-Paper-Scissors/",
//   },
//   {
//     number: "05",
//     title: "UI/UX Website",
//     category: "INTERNSHIP PROJECT",
//     description:
//       "A responsive website built using HTML, CSS, and Bootstrap, focusing on layout, styling, and user experience.",
//     technologies: ["HTML", "CSS", "Bootstrap"],
//     image:
//       "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img4.png",
//     liveLink: "https://priyanka-webdev.github.io/Website-Portfolio/",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">
//         <div className="projects-heading">
//           <span className="section-tag">
//             <span className="section-tag-dot" />
//             MY WORK
//           </span>

//           <h2>
//             Projects & <span>experience.</span>
//           </h2>

//           <p>
//             A collection of professional work and projects
//             I've built while learning and growing as a developer.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project) => (
//             <article
//               key={project.number}
//               className={`project-card ${
//                 project.featured ? "project-featured" : ""
//               }`}
//             >
//               {project.image ? (
//                 <div className="project-image">
//                   <img
//                     src={project.image}
//                     alt={`${project.title} preview`}
//                     loading="lazy"
//                   />
//                 </div>
//               ) : (
//                 <div className="project-image project-placeholder">
//                   <span>{project.title}</span>
//                   <small>Professional React Project</small>
//                 </div>
//               )}

//               <div className="project-card-content">
//                 <div className="project-card-top">
//                   <span className="project-number">
//                     {project.number}
//                   </span>
//                   <span className="project-category">
//                     {project.category}
//                   </span>
//                 </div>

//                 <h3>{project.title}</h3>

//                 <p className="project-description">
//                   {project.description}
//                 </p>

//                 <div className="project-tech">
//                   {project.technologies.map((tech) => (
//                     <span key={tech}>{tech}</span>
//                   ))}
//                 </div>

//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="project-link"
//                   >
//                     View Live Project <span>↗</span>
//                   </a>
//                 )}

//                 {project.featured && (
//                   <span className="project-private-note">
//                     Professional experience
//                   </span>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveLink: string;
};

const internshipProjects: Project[] = [
  {
    number: "01",
    title: "Quiz App",
    description:
      "An interactive quiz application that allows users to attempt quizzes and test their knowledge.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Angular"],
    // image:
    //   "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img1.jpeg",
    liveLink: "https://developyourmind-2af71.web.app",
  },
  {
    number: "02",
    title: "Tic Tac Toe",
    description:
      "A classic two-player game with an interactive interface and game logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    // image:
    //   "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img3.jpeg",
    liveLink: "https://priyanka-webdev.github.io/Tic-Tac-Toe/",
  },
  {
    number: "03",
    title: "Rock Paper Scissors",
    description:
      "A browser-based game where users play Rock Paper Scissors against the computer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyanka-webdev.github.io/Rock-Paper-Scissors/",
  },
  {
    number: "04",
    title: "UI/UX Website",
    description:
      "A responsive website created with a focus on layout, styling and user experience.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    // image:
    //   "https://raw.githubusercontent.com/Priyanka-WebDev/resume/main/img4.png",
    liveLink: "https://priyanka-webdev.github.io/Website-Portfolio/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-tag">
            <span className="section-tag-dot" />
            MY WORK
          </span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            From building interactive web applications during my internship to
            developing real-world features in professional projects.
          </p>
        </div>

        {/* Professional project */}
        <div className="featured-project">
          <div className="featured-project-label">
            <span>01 / PROFESSIONAL EXPERIENCE</span>
            <span className="featured-status">React.js Project</span>
          </div>

          <div className="featured-project-content">
            <div className="featured-project-info">
              <span className="project-eyebrow">HR MANAGEMENT SYSTEM</span>
              <h3>NexHRMS</h3>

              <p>
                A SaaS-based Human Resource Management System that helps
                organizations manage employee information, attendance, leave
                management and other HR operations through a centralized
                platform.
              </p>

              <div className="project-tech">
                {[
                  "React.js",
                  "JavaScript",
                  "Mantine UI",
                  "REST APIs",
                  "Axios",
                ].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="featured-contributions">
              <h4>My contributions</h4>
              <ul>
                <li>Developed reusable and responsive React components.</li>
                <li>Integrated REST APIs with frontend modules.</li>
                <li>
                  Implemented role-based access for admins, managers and
                  employees.
                </li>
                <li>
                  Worked on data filtering and user interface improvements.
                </li>
              </ul>
              <span className="project-private-note">
                Developed as part of my professional role
              </span>
            </div>
          </div>
        </div>

        {/* Internship projects */}
        <div className="internship-heading">
          <div>
            <span className="project-eyebrow">EARLY DEVELOPMENT WORK</span>
            <h3>
              Internship projects<span>.</span>
            </h3>
          </div>
          <p>
            Some of my early frontend projects built while learning and
            practising web development.
          </p>
        </div>

        
<div className="projects-grid">
  {internshipProjects.map((project, index) => (
    <Reveal key={project.number} delay={index * 120}>
      <article className="project-card">
        {project.image ? (
          <div className="project-image">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="project-image project-placeholder">
            <span>{project.title}</span>
            <small>Interactive Web Project</small>
          </div>
        )}

        <div className="project-card-content">
          <div className="project-card-top">
            <span className="project-number">{project.number}</span>
            <span className="project-category">INTERNSHIP</span>
          </div>

          <h4>{project.title}</h4>
          <p className="project-description">{project.description}</p>

          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Live Project <span>↗</span>
          </a>
        </div>
      </article>
    </Reveal>
  ))}
</div>
  <span className="project-tech">so on...</span>

      </div>
    </section>
  );
}
