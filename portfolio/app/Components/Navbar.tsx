"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navLinks
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter((section): section is HTMLElement => section !== null);

      let currentSection = "home";
      const activationPoint = 150;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationPoint) {
          currentSection = section.id;
        }
      });

      // Make Contact active when reaching the bottom of the page
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);
    window.addEventListener("resize", handleActiveSection);

    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);
const resumeUrl = `${
  process.env.NODE_ENV === "production" ? "/portfolio-priyanka" : ""
}/resume.pdf`;
  return (
    <header className="navbar-wrapper">
      <nav
        className={`navbar-pill ${scrolled ? "navbar-scrolled" : ""}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="nav-logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-icon">P</span>
          <span className="logo-name">
            Priyanka<span className="logo-dot">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${
                activeSection === link.href.slice(1) ? "nav-active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume button */}
        <a
          href={resumeUrl}
          download="Priyanka-Doifode-Resume.pdf"
          className="nav-resume"
        >
          <span>Resume</span>
          <span className="resume-arrow">↗</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className={`nav-menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className={`mobile-nav-link ${
              activeSection === link.href.slice(1) ? "mobile-nav-active" : ""
            }`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="mobile-nav-number">0{index + 1}</span>
            <span>{link.name}</span>
            <span className="mobile-nav-arrow">↗</span>
          </Link>
        ))}

        <a
          href={resumeUrl}
          download="Priyanka-Doifode-Resume.pdf"
          className="nav-resume"
        >
          <span>Resume</span>
          <span className="resume-arrow">↗</span>
        </a>
      </div>
    </header>
  );
}
