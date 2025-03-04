import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Star, 
  GitHub, 
  Linkedin, 
  Mail, 
  Phone, 
  Award 
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      name: "E-Commerce Website",
      description: "Full-stack e-commerce application with React and Tailwind CSS frontend. Implemented secure authentication using JWT and JSON validation.",
      technologies: ["React", "Node.js", "Express", "SQLite", "JWT"],
      githubLink: "https://github.com/Debarjita/Ecommerce-website"
    },
    {
      name: "Motorque - Vehicle Management System",
      description: "API for managing vehicles with VIN decoding and rate limiting. Implemented hierarchical organization management.",
      technologies: ["Node.js", "Express"],
      githubLink: "https://github.com/Debarjita/vehicle-management-system"
    },
    {
      name: "LAMPY - Counseling App",
      description: "Mobile app for user identity verification and personalized counselor matching based on mental health needs.",
      technologies: ["React Native", "Expo"],
      githubLink: "https://github.com/Debarjita/Councelling_app"
    },
    {
      name: "Movie Review System",
      description: "Interactive platform for searching movies and managing reviews.",
      technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "MySQL"],
      githubLink: "https://debarjita.github.io/review-website/"
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure AI Fundamentals",
    "AWS Educate: Getting Started with Compute",
    "AWS Educate: Cloud Essentials",
    "AWS Knowledge: Serverless"
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="mr-2" /> About Me
            </h2>
            <p className="text-gray-700">
              Proactive 3rd-year B.Tech Computer Science student at Vellore Institute of Technology with an 8.8/10 GPA. 
              Skilled in full-stack development with proficiency in backend and frontend technologies. 
              Certified in AWS and Azure cloud platforms. Seeking internship opportunities to apply technical skills 
              and contribute to innovative projects.
            </p>
          </div>
        );
      case 'skills':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2" /> Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Backend</h3>
                <ul className="list-disc pl-5">
                  {["C++", "Java", "Python", "Node.js", "Express", "Kotlin", "MongoDB"].map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Frontend</h3>
                <ul className="list-disc pl-5">
                  {["HTML", "CSS", "JavaScript", "React", "React Native"].map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <GitHub className="mr-2 w-4 h-4" /> View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Professional Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Technical Manager - Cultural Fest Tech Team</h3>
                <p className="text-gray-600">VIT, Vellore | Dec 2024 - Feb 2025</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Led a team of 16 developers to build the official website for the university's cultural fest</li>
                  <li>Developed backend infrastructure using Go lang and Docker</li>
                  <li>Optimized platform performance for 7,000+ daily users</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Coding Educator</h3>
                <p className="text-gray-600">YaySkool Ed-Tech Platform | Dec 2022 - Feb 2023</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Conducted online classes teaching Java and C programming</li>
                  <li>Created comprehensive presentations to simplify coding concepts</li>
                  <li>Developed structured assignments to reinforce learning</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'certifications':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Award className="mr-2" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-gray-100 p-2 rounded">
                  <Star className="mr-2 text-yellow-500" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Debarjita Bhattacharjee</h1>
            <p className="text-blue-200">Computer Science Engineering Student</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Debarjita" target="_blank" rel="noopener noreferrer">
              <GitHub className="w-6 h-6 hover:text-blue-200" />
            </a>
            <a href="https://www.linkedin.com/in/debarjitabhattacharjee" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-200" />
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 bg-white rounded-lg shadow-md p-4 h-fit">
            <div className="space-y-2">
              {[
                { key: 'about', icon: User, label: 'About' },
                { key: 'skills', icon: Code, label: 'Skills' },
                { key: 'projects', icon: Briefcase, label: 'Projects' },
                { key: 'experience', icon: GraduationCap, label: 'Experience' },
                { key: 'certifications', icon: Award, label: 'Certifications' }
              ].map(section => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full flex items-center p-2 rounded ${
                    activeSection === section.key 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-blue-100'
                  }`}
                >
                  <section.icon className="mr-2" />
                  {section.label}
                </button>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" />
                  <a href="mailto:debar.bhatt10@gmail.com">debar.bhatt10@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 w-4 h-4" />
                  <span>+91 7005130107</span>
                </div>
              </div>
            </div>
          </div>

          <main className="md:w-3/4">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;