import React, { useEffect, useState } from "react";
import "./App.css";
import subaPic from './assets/suba.png';
import uipathPic from "./assets/uipath2_pic.jpg";
import blazeATrail from "./assets/blaze_a_trail.jpg";
import keralaHack from "./assets/kerala_hack_pic.jpg";
import womensHack from "./assets/WH_pic.jpg";
import hackHustle from "./assets/hackhustle_pic.jpg";
import grpPhoto from "./assets/grp.jpg";
import ignitePic from "./assets/ignite_pic.jpg"
import subaPic2 from "./assets/suba_pic.jpg";

// ✅ Correct import
// at the very top of the file
import {
  FaBars,
  FaTimes,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBirthdayCake,
  FaCamera,
  FaMagic,
  FaRocket,
  FaMicrophone,
  FaLeaf,
  FaPalette,
  FaLanguage
} from "react-icons/fa";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">Subaharini G</a>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
        <button className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const roles = ["Aspiring Full Stack Developer", "ML Learner", "RPA Explorer","UI/UX Designer","Tech Enthusiast", "CS Student"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change role every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Floating Icons */}
      <div className="floating-element"><FaCode style={{ fontSize: "4rem" }} /></div>
      <div className="floating-element"><FaLaptopCode style={{ fontSize: "3rem" }} /></div>
      <div className="floating-element"><FaBrain style={{ fontSize: "5rem" }} /></div>

      <div className="hero-content">
        <h1>Subaharini G</h1>
        <p className="hero-subtitle">
          <span className="role-animation">{roles[currentRole]}</span>
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}



function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        {/* Left side - Text */}
        <div className="about-text fade-in">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm Subaharini, a Computer Science and Engineering undergraduate at
            St. Joseph's Institute of Technology. An aspiring full-stack
            developer and tech enthusiast, I'm passionate about exploring
            emerging technologies and applying them to real-world challenges. I
            have a growing interest in machine learning and have worked on
            numerous RPA projects. As a proactive leader and organizer, I've
            participated in multiple hackathons and successfully conducted
            various technical events, showcasing my commitment to innovation and
            collaboration.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="about-image fade-in">
          <img src={subaPic} alt="Subaharini" />
        </div>
      </div>
    </section>
  );
}




function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Education</h2>
        <div className="education-card fade-in">
          <h3>St. Joseph's Institute of Technology</h3>
          <p>Bachelor of Engineering in Computer Science and Engineering</p>
          <div className="cgpa">CGPA: 8.53</div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectData = [
    {
      icon: <FaLeaf className="project-icon"/>,
      title: "Glow Guardians – AI-Powered Health & Beauty Companion",
      description: "Developed a smart mirror-style platform using facial analysis to assess skin, hair, and wellness. Integrated ML models for personalized beauty tips, product suggestions, and health insights.",
      tech: ["HTML", "CSS", "JavaScript", "Flask", "MySQL", "Python", "Scikit-learn", "OpenCV"]
    },
    
    {
      icon: <FaBirthdayCake className="project-icon" />,
      title: "Whisk and Wish – Customize Your Cravings",
      description:
        "Developed a personalized cake and bakery ordering platform with a gamified customization module (flavors, layers, themes). Integrated secure payments, responsive UI, and real-time order management for enhanced user engagement.",
      tech: ["React", "Node.js", "Flask", "Python", "MongoDB"]
    },
    {
      icon: <FaBrain className="project-icon" />,
      title: "FluxRoute – AI-Driven Dynamic Public Transportation Scheduler",
      description:
        "Developed an AI platform for commuter demand prediction and dynamic public transport scheduling using real-time traffic, weather, and event data. Applied ML for forecasting, adaptive routing, and optimized dispatch to reduce congestion and wait times.",
      tech: ["Python", "TensorFlow", "Flask", "ML", "HTML", "CSS", "JS"]
    },
    {
      icon: <FaMicrophone className="project-icon" />,
      title: "JARVIS – Emotion-Aware AI Voice Assistant",
      description:
        "Developed an AI-powered TTS & STT system with emotion/context awareness, aimed at aiding communication for differently-abled individuals in healthcare.",
      tech: ["NLP", "Speech API", "Emotion AI", "Accessibility"]
    },
    {
      icon: <FaRocket className="project-icon" />,
      title: "HR Onboarding Automation using UiPath",
      description:
        "Designed an end-to-end HR onboarding automation to generate and deliver offer letters with zero manual intervention. Automated data extraction from Excel, document generation in Word, PDF conversion, and email delivery, improving process efficiency.",
      tech: ["UiPath Studio", "Excel Automation", "Word Automation", "SMTP"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, idx) => (
            <div key={idx} className="project-card fade-in">
              {project.icon}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillData = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C", level: 40 },
        { name: "Java", level: 50 },
        { name: "Python", level: 40 },
        { name: "HTML", level: 70 },
        { name: "CSS", level: 40 },
        { name: "JavaScript", level: 40 },
        { name: "SQL", level: 50 }
      ]
    },
    {
      category: "Frameworks & Tools",
      icon: <FaLaptopCode />,
      skills: [
        { name: "Flask", experience: 1.5 },
        { name: "React", experience: 1 },
        { name: "Git", experience: 3 },
        { name: "MySQL", experience: 2},
        { name: "VS Code", experience: 3 },
        { name: "MongoDB", experience: 2},
        { name: "UiPath", experience: 2 },
        { name: "N8N", experience: 1 }
      ]
    },
    {
      category: "ML & AI",
      icon: <FaBrain />,
      skills: [
        { name: "Scikit-learn", projects: ["Glow Guardians", "FluxRoute"] },
        { name: "TensorFlow", projects: ["FluxRoute"] },
        { name: "OpenCV", projects: ["Glow Guardians"] }
      ]
    },
    {
      category: "Design & Others",
      icon: <FaPalette />,
      skills: [
        { name: "Figma", },
        { name: "Canva",  },
        { name: "MS Office", },
        { name: "Team Management",  },
        { name: "Leadership", }
      ]
    },
    {
      category: "Languages",
      icon: <FaLanguage />,
      skills: [
        { name: "English", proficiency: 70 },
        { name: "Marati", proficiency: 80 },
        { name: "Tamil", proficiency: 80 },
        { name: "Hindi", proficiency: 50 }
      ]
    }
  ];

  const getLevelText = (level) => {
    if (level < 50) return "Basic";
    if (level < 65) return "Beginner";
    if (level < 80) return "Intermediate";
    if (level < 90) return "Advanced";
    return "Expert";
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title fade-in">Technical Skills</h2>
        <div className="skills-grid">
          {skillData.map((skillCat, idx) => (
            <div key={idx} className="skill-category fade-in">
              <h3 className="skill-category-title">{skillCat.icon} {skillCat.category}</h3>
              <div className="skill-list">
                {skillCat.skills.map((s, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-row">
                      <span className="skill-name">{s.name}</span>

                      {s.level && <span className="experience-right">{getLevelText(s.level)}</span>}
                      {s.experience && <span className="experience-right">{s.experience} yrs</span>}
                    </div>

                    {s.projects && <span className="projects">Projects: {s.projects.join(", ")}</span>}

                    {s.proficiency && (
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${s.proficiency}%` }}>
                          {s.proficiency}%
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function Gallery() {
  const galleryItems = [
    {
      img: subaPic,
      title: "Leading with Confidence",
      desc: "From planning to execution – contributing as part of the organizing team that made this event a success."
    },
    {
      img: uipathPic,
      title: "UiPath Community Day",
      desc: "Exploring automation and discovering the future of agentic AI with UiPath – a step forward in intelligent automation."
    },
    {
      img: hackHustle,
      title: "Hack & Hustle Competition",
      desc: "24 hours of intense coding, collaboration, and creative problem-solving"
    },
    {
      img: keralaHack,
      title: "HackAthena'25 – Kerala National Hackathon",
      desc: "An unforgettable 48-hour journey of teamwork, problem-solving, and innovation in healthcare technology, securing Runner-Up honors."
    },
    {
      img: blazeATrail,
      title: "Blaze A Trail 2.0 – Winner",
      desc: "Secured the Winner position in Blaze A Trail 2.0 and represented my team in the SIH Internal Hackathon with the Clean & Green Technology problem statement."
    },
    {
      img: ignitePic,
      title: "Tech Ignite Conference",
      desc: "Learning from industry experts and networking with fellow tech enthusiasts"
    },
    {
      img: grpPhoto,
      title: "Student Developers Summit – Chennai Chapter",
      desc: "Served as Event Coordinator and Media Team member, connecting with UiPath MVPs and industry experts while fostering collaboration among developers."
    },
    {
      img: womensHack,
      title: "Tech Divathon",
      desc: "24-hour Women's Hackathon with 1500+ teams — proud to be among the Top 60. Incredible opportunity to connect with our judge, Dr. Srimathy Kesan."
    },
    {
      img: subaPic2,
      title: "Consistency",
      desc: "Consistent participation in multiple hackathons, leading my team to success. Gained industry exposure through internships at software companies and contributed to impactful live projects."
    }
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title fade-in">My Journey in Pictures</h2>
        <div className="gallery-collage">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="gallery-item fade-in">
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h3>Let's Connect</h3>
        
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/subaharini21/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/subaharinig"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>

          <a href="mailto:subaharini@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>

  
        <p>&copy; 2024 Subaharini G. All rights reserved.</p>
      </div>
    </footer>
  );
}



function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(15, 23, 42, 0.98)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.backdropFilter = "blur(20px)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;