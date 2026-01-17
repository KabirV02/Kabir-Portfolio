import React, { useState } from 'react';
import { Moon, Sun, Download, Mail, Linkedin, Github, Code, Database, Server, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  const projects = [
    {
      title: "AI-Based Trip Planner",
      tech: "React.js, Tailwind, Firebase, Gemini AI",
      date: "June 2025 – July 2025",
      github: "https://github.com/KabirV02/ai-trip-planner",
      live: "https://ai-trip-planner-weld-seven.vercel.app",
      points: [
        "Developed a React-based web application that generates personalized travel itineraries using Google Gemini AI",
        "Integrated OAuth 2.0 authentication for secure user login",
        "Configured Firebase Authentication and Firestore for real-time data storage"
      ]
    },
    {
      title: "GYM Management System",
      tech: "MERN Stack",
      date: "April 2025 – May 2025",
      points: [
        "Created a full-stack GYM management web application",
        "Established role-based authentication using JWT",
        "Built features for member registration, attendance tracking, and trainer assignment"
      ]
    },
    {
      title: "E-Commerce Website",
      tech: "MERN Stack",
      date: "Jan 2025 – Mar 2025",
      points: [
        "Designed a full-stack e-commerce platform with dynamic product listings",
        "Implemented RESTful APIs using Node.js and Express.js",
        "Applied secure user authentication and admin product management"
      ]
    }
  ];

  const skills = {
    languages: ["C++", "JavaScript"],
    frontend: ["HTML", "CSS", "React.js", "Tailwind"],
    backend: ["Node.js", "Express.js"],
    databases: ["MySQL", "MongoDB", "Firebase"],
    tools: ["Git", "GitHub", "Postman", "VS Code"]
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-linear-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md shadow-lg`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold bg-linear-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent cursor-pointer`}
          >
            {`<KABIR VERMA/>`}
          </h1>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          <div className="text-center">
            <div className={`inline-block mb-6 px-6 py-3 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} animate-pulse`}>
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>🚀 Full Stack Developer</span>
            </div>
            <h1 className={`text-6xl font-bold mb-4 bg-linear-to-r ${darkMode ? 'from-blue-400 via-purple-400 to-pink-400' : 'from-blue-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-linear`}>
              KABIR VERMA
            </h1>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Computer Science Engineering Student | MERN Stack Enthusiast
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/kabir-verma-87a753249" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/KabirV02" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg`}
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <button
            className={`px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg ${darkMode ? 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' : 'bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'} text-white flex items-center gap-2 mx-auto`}
            >
            <a
              href="/resume.pdf"
              download
              className='flex items-center gap-3'
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            </button>
          </div>
          <div className="mt-12 text-center animate-bounce">
            <ChevronDown className={`w-8 h-8 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <div className={`p-6 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Chandigarh Group of Colleges</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>July 2022 – July 2026 | CGPA: 7.7</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
              <h3 className="text-2xl font-bold mb-2">Higher Secondary Education</h3>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Aggarsain International Public School</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>April 2021 – March 2022 | Percentage: 73.2%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all hover:scale-105 hover:shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.tech}
                </p>
                <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {project.date}
                </p>
                <ul className="space-y-2 mb-4">
                  {project.points.map((point, i) => (
                    <li key={i} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex gap-2`}>
                      <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  {project?.github && (
                    <a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} flex items-center gap-2`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                <Code className="w-5 h-5" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                <Code className="w-5 h-5" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                <Server className="w-5 h-5" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <Database className="w-5 h-5" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg lg:col-span-2`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                <Code className="w-5 h-5" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-pink-900/30 text-pink-400' : 'bg-pink-100 text-pink-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className={`w-8 h-8 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h2 className="text-4xl font-bold">Achievements & Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-all`}>
              <h3 className="text-xl font-bold mb-2">🏆 600+ DSA Problems Solved</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                500+ on LeetCode, 150+ on GeeksforGeeks
              </p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-all`}>
              <h3 className="text-xl font-bold mb-2">🔥 365-Day Consistency Badge</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                LeetCode Problem-Solving Practice
              </p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-all`}>
              <h3 className="text-xl font-bold mb-2">🎓 Ethical Hacking Certification</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Hacker Central
              </p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-all`}>
              <h3 className="text-xl font-bold mb-2">💻 Web Technologies Training</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Makes360
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Feel free to reach out for collaborations or opportunities
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kabirv052@gmail.com"
              target='_blank'
              className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center gap-2`}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/kabir-verma-87a753249"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-700 hover:bg-gray-800'} text-white flex items-center gap-2`}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/KabirV02"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-700 hover:bg-gray-800'} text-white flex items-center gap-2`}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} text-center`}>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Kabir Verma. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
    </>
  );
}