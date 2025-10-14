import React from 'react'
import resume from '@/assets/Zoey_Nguyen_Resume.pdf'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ZN</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Zoey Nguyen</span>
                <p className="text-sm text-gray-600">QA & Web Development Specialist</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:2817403534" className="text-gray-700 hover:text-blue-600 transition-colors">
                <i data-lucide="phone" className="w-5 h-5"></i>
              </a>
              <a href="mailto:chaunguyen0691@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <i data-lucide="mail" className="w-5 h-5"></i>
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Zoey Nguyen</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quality Assurance & Web Development Specialist</h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">5+ years of experience ensuring high-quality digital solutions through data-driven testing, system analysis, and web development.</p>
              <div className="flex items-center gap-2 mb-8 text-lg">
                <i data-lucide="map-pin" className="w-5 h-5"></i>
                <span>Houston, TX | US Citizen | Remote Available</span>
              </div>
              <div>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors" onClick={() => window.open(resume, '_blank')}>
                  <i data-lucide="download" className="w-5 h-5"></i>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&h=400" 
                alt="Professional workspace" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Quality Assurance and Web Development Specialist with 5+ years of experience ensuring 
              high-quality digital solutions through data-driven testing, system analysis, and web development. 
              Skilled in building and maintaining enterprise websites and dashboards using AEM, WordPress, 
              and UmbracoCMS, with strong proficiency in Python (pandas, NumPy, BeautifulSoup, 
              webscraping), ETL pipelines, Power BI, and SAP ERP. Proven ability to optimize workflows, 
              validate data integrity, and enhance system performance across business and technology teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testing & QA */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="shield-check" className="w-6 h-6 text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Testing & QA</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Test Strategy & Planning</li>
                <li>Test Protocol Design</li>
                <li>Functional Testing</li>
                <li>Regression Testing</li>
                <li>Integration Testing</li>
                <li>Load & Stress Testing</li>
              </ul>
            </div>

            {/* Data & Business Analysis */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="bar-chart" className="w-6 h-6 text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data & Business Analysis</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Data Cleaning & Transformation</li>
                <li>ETL Workflow Design</li>
                <li>KPI & Forecasting Analysis</li>
                <li>Power BI Dashboards</li>
                <li>Jupyter Notebook</li>
              </ul>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="wrench" className="w-6 h-6 text-gray-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools & Frameworks</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Jira, Azure DevOps</li>
                <li>API Testing, Postman</li>
                <li>DataPower, BrowserStack</li>
                <li>Test Directory Management</li>
                <li>Appium</li>
              </ul>
            </div>

            {/* Automation & Programming */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="code" className="w-6 h-6 text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Programming</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Python (pandas, NumPy, BeautifulSoup)</li>
                <li>AEM, WordPress, Umbraco CMS</li>
                <li>Selenium, JavaScript</li>
                <li>HTML5, CSS3, SQL</li>
              </ul>
            </div>

            {/* Web & Mobile QA */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="smartphone" className="w-6 h-6 text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Web & Mobile QA</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Cross-Browser Testing</li>
                <li>Mobile App Testing (Android/iOS)</li>
                <li>Accessibility & Usability Testing</li>
                <li>Responsive Design Validation</li>
              </ul>
            </div>

            {/* Workflow & Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <i data-lucide="users" className="w-6 h-6 text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Workflow & Management</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Agile/Scrum</li>
                <li>CI/CD, Release Management</li>
                <li>Defect Tracking</li>
                <li>Test Data Management</li>
                <li>Post-Project Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {/* Current Position */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <i data-lucide="code" className="w-12 h-12 text-white"></i>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">CURRENT</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Trex Company Inc</h3>
                  <div className="flex items-center gap-1">
                    <i data-lucide="briefcase" className="w-4 h-4 text-blue-600"></i>
                    <span className="text-gray-600 text-sm">Current</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3">QA Analyst / Web Admin • Remote • Dec 2019 - Present</p>
                <ul className="text-gray-700 text-sm mb-4 space-y-2">
                  <li>• Develop Power BI dashboards and Python ETL workflows integrating SAP ERP and CRM data to support sales and financial reporting.</li>
                  <li>• Perform data validation, trend analysis, and anomaly detection using pandas, Numpy, and Jupyter Notebook.</li>
                  <li>• Conduct web scraping with BeautifulSoup for competitive analysis and product benchmarking.</li>
                  <li>• Manage all QA activities from requirements validation to QA sign-off for multiple website releases and marketing applications.</li>
                  <li>• Develop and execute Test Plans, Test Scenarios, and Test Cases for new features and content deployments across AEM and WordPress.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Power BI</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">SAP ERP</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">AEM</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">WordPress</span>
                </div>
              </div>
            </div>

            {/* Previous Position */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-600 to-gray-800 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <i data-lucide="database" className="w-12 h-12 text-white"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">EI Systems</h3>
                  <div className="flex items-center gap-1">
                    <i data-lucide="briefcase" className="w-4 h-4 text-gray-600"></i>
                    <span className="text-gray-600 text-sm">Previous</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3">Application Developer • Houston, TX • Dec 2018 - Dec 2019</p>
                <ul className="text-gray-700 text-sm mb-4 space-y-2">
                  <li>• Supported the development and testing of claims processing applications using C# and SQL.</li>
                  <li>• Designed and executed test plans and data validation queries to ensure application accuracy and performance.</li>
                  <li>• Created and maintained SQL scripts for production data checks and troubleshooting.</li>
                  <li>• Partnered with business analysts and developers to ensure customer-ready, high-quality software solutions.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">C#</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">SQL</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Claims Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="graduation-cap" className="w-8 h-8 text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Information Management Systems</p>
              <p className="text-gray-600 mb-2">University of Technology</p>
              <p className="text-sm text-gray-500">Sep 2009 - May 2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">Ready to enhance your digital solutions with expert QA and development?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <i data-lucide="phone" className="w-8 h-8 mb-3"></i>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:2817403534" className="hover:text-blue-200 transition-colors">(281) 740-3534</a>
            </div>
            <div className="flex flex-col items-center">
              <i data-lucide="mail" className="w-8 h-8 mb-3"></i>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:chaunguyen0691@gmail.com" className="hover:text-blue-200 transition-colors">chaunguyen0691@gmail.com</a>
            </div>
            <div className="flex flex-col items-center">
              <i data-lucide="map-pin" className="w-8 h-8 mb-3"></i>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p>Houston, TX • Remote Available</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
              <i data-lucide="download" className="w-5 h-5"></i>
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ZN</span>
            </div>
            <span className="text-lg font-bold">Zoey Nguyen</span>
          </div>
          <p className="text-gray-400 mb-4">QA & Web Development Specialist | Houston, TX</p>
          <div className="flex items-center justify-center gap-6">
            <a href="tel:2817403534" className="text-gray-400 hover:text-white transition-colors">
              <i data-lucide="phone" className="w-5 h-5"></i>
            </a>
            <a href="mailto:chaunguyen0691@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i data-lucide="mail" className="w-5 h-5"></i>
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">© 2024 Zoey Nguyen. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Initialize Lucide Icons */}
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        `
      }} />
    </div>
  )
}
