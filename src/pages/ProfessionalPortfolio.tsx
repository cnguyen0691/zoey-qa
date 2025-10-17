import React, { useState } from 'react';
import { Download, Phone, ExternalLink, UserCircle, Linkedin, Github, Mail, MapPin, Calendar, Star, Eye, Code, Database, TestTube, Wrench, GraduationCap, Briefcase, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  rating: number;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  field: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const ProfessionalPortfolio: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 'trex',
      title: 'QA Analyst / WEB Admin',
      company: 'Trex Company Inc',
      period: 'Dec 2019 - Present',
      location: 'Remote',
      type: 'REMOTE',
      description: 'Develop and maintain automated test scripts using Selenium WebDriver with Java for regression and functional testing.',
      achievements: [
        'Develop and maintain automated test scripts using Selenium WebDriver with Java for regression and functional testing',
        'Design and execute Test Plans, Test Scenarios, and Test Cases for website releases and marketing applications',
        'Integrate automation scripts with Jenkins CI/CD pipelines, improving test efficiency and build validation',
        'Conduct API testing using Postman and REST Assured, validating endpoints and response payloads',
        'Identify and implement Page Factory models for scalable web automation frameworks',
        'Collaborate with developers, product owners, and QA leads to validate features in Agile sprints using Jira and Azure DevOps',
        'Perform cross-browser, responsive, and integration testing across desktop and mobile environments',
        'Log, track, and verify defects through resolution, ensuring on-time and high-quality software releases'
      ],
      technologies: ['Selenium', 'Java', 'Jenkins', 'Postman', 'REST Assured', 'Jira', 'Azure DevOps'],
      rating: 5
    },
    {
      id: 'ei-systems',
      title: 'Application Developer',
      company: 'EI Systems',
      period: 'Dec 2018 - Dec 2019',
      location: 'Houston, TX',
      type: 'ON-SITE',
      description: 'Supported the development and testing of claims processing applications using C# and SQL.',
      achievements: [
        'Supported the development and testing of claims processing applications using C# and SQL',
        'Performed data validation and backend testing using SQL queries for claims processing applications',
        'Conducted API testing and manual verification for application logic and system performance',
        'Partnered with developers and BAs to ensure accurate implementation of business requirements'
      ],
      technologies: ['C#', 'SQL', 'API Testing', 'Data Validation'],
      rating: 4
    }
  ];

  const education: EducationItem[] = [
    {
      degree: 'Master of Science',
      institution: 'University of Houston Clear Lake',
      period: 'Jan 2016 - May 2018',
      location: 'Houston, TX',
      field: 'Business Management Information Systems'
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'University of Technology Ho Chi Minh',
      period: 'Sep 2009 - May 2014',
      location: 'Ho Chi Minh, Vietnam',
      field: 'Information Systems'
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      name: 'Automation & Tools',
      icon: <Wrench className="w-5 h-5" />,
      skills: ['Selenium WebDriver', 'Cucumber', 'TestNG', 'Maven', 'Jenkins', 'Git', 'Postman', 'REST Assured']
    },
    {
      name: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      skills: ['Java', 'Python', 'SQL', 'JavaScript']
    },
    {
      name: 'Testing Types',
      icon: <TestTube className="w-5 h-5" />,
      skills: ['Functional Testing', 'Regression Testing', 'Integration Testing', 'UAT', 'API Automation']
    },
    {
      name: 'Frameworks & Methodologies',
      icon: <Database className="w-5 h-5" />,
      skills: ['BDD', 'Data-Driven', 'Hybrid Frameworks', 'Agile/Scrum', 'CI/CD', 'SDLC/STLC']
    }
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCircle className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Zoey Nguyen</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Skills</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>
  <div className="flex items-center gap-4">
    <a href="https://www.linkedin.com/in/chaunguyen0691/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="https://github.com/cnguyen0691" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
      <Github className="w-5 h-5" />
    </a>
  </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-black/80"></div>
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Zoey Nguyen
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
            Automation Test Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proficient in designing, developing, and executing automated test frameworks using Selenium WebDriver, Java, and Cucumber for web-based applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Houston, TX</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-5 h-5" />
              <span>281-740-3534</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5" />
              <span>chaunguyen0691@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors inline-flex"
    href="ZOEY NGUYEN_QA.pdf"
    download="ZOEY NGUYEN_QA.pdf"
    rel="noopener noreferrer"
  >
    <Download className="w-5 h-5" />
    Download Resume
  </a>
            <button className="bg-transparent border-2 border-blue-600 hover:border-blue-700 text-blue-400 hover:text-blue-300 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
              <Phone className="w-5 h-5" />
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Skilled in API automation (Postman, REST Assured) and continuous integration through Jenkins pipelines. 
              Adept at translating functional requirements into reusable automated test scripts, improving test coverage, 
              and reducing manual effort. Experienced in Agile/Scrum environments with tools like Jira and Rally for test 
              management, defect tracking, and sprint coordination. Strong understanding of QA methodologies, SDLC/STLC, 
              and credit card servicing workflows, ensuring test alignment with business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <Code className="w-16 h-16 text-white" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      experience.type === 'REMOTE' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {experience.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < experience.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-gray-600 text-sm ml-1">{experience.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{experience.company} • {experience.period}</p>
                  <p className="text-gray-700 text-sm mb-4">{experience.description}</p>
                  
                  {expandedCard === experience.id && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{experience.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => toggleCard(experience.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      {expandedCard === experience.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Less
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          View More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{edu.field}</p>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring automation excellence to your team? Let's discuss how my QA expertise can drive your project's success.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Houston, TX<br />US Citizen</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">281-740-3534</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">chaunguyen0691@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors justify-center">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button className="bg-transparent border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors justify-center">
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <button className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </button>
            <button className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-400">
            © 2024 Zoey Nguyen. Automation Test Engineer specializing in quality assurance and test automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalPortfolio;
