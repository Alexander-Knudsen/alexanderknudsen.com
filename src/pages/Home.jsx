import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_686eebb3d0dbf754cb1d7a4e/ea363da25_AlexanderinnKnudsen-CV.pdf";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-[#1e3a5f]">Alexander Knudsen</span>
          <div className="hidden md:flex gap-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-600 hover:text-[#d4884a] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#d4884a] font-medium mb-4 tracking-wide">CURRICULUM VITAE</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Alexander Óðinn<br />Knudsen
            </h1>
            <p className="text-[#d4884a] text-xl mb-6">
              B.Sc. in Mechanical Engineering | Finishing B.Sc. in Computer Science (Spring 2026)
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Engineering graduate and final-semester Computer Science student with hands-on experience delivering AI/software projects and technical customer-facing work.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Reykjavik, Iceland
              </span>
              <a href="mailto:alexander.odinn@gmail.com" className="px-4 py-2 bg-white/10 text-white rounded-full text-sm flex items-center gap-2 hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" /> alexander.odinn@gmail.com
              </a>
              <a href="tel:+3546919886" className="px-4 py-2 bg-white/10 text-white rounded-full text-sm flex items-center gap-2 hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" /> +354 691 9886
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/alexander-knudsen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-[#d4884a] transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://github.com/Alexander-Knudsen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-[#d4884a] transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-80 h-96 bg-[#d4884a] rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-[#d4884a] to-[#c47a3f] flex items-center justify-center">
                <span className="text-8xl font-bold text-white/20">AK</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">About Me</h2>
            <div className="w-20 h-1 bg-[#d4884a] mb-8"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'm a B.Sc. graduate in Mechanical Engineering and currently finishing my second degree in Computer Science at the University of Iceland, graduating Spring 2026. My passion lies at the intersection of engineering problem-solving and modern software development, particularly in AI-assisted workflows and rapid prototyping.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#d4884a]">
                <h3 className="font-semibold text-[#1e3a5f] mb-4">Core Strengths</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI and software prototyping in real-world use cases</li>
                  <li>• Applied engineering problem solving</li>
                  <li>• Customer-facing technical communication</li>
                  <li>• Leadership in sports and youth coaching roles</li>
                  <li>• Fast onboarding across tools and domains</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#1e3a5f]">
                <h3 className="font-semibold text-[#1e3a5f] mb-4">Technical Capabilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-assisted development workflows</li>
                  <li>• Rapid language adaptation across stacks</li>
                  <li>• API integration and backend implementation</li>
                  <li>• Data handling and automation</li>
                  <li>• Web application delivery from design to deployment</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#1e3a5f] p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-3">Languages</h3>
                <p>English (Native) • Icelandic (Native)</p>
              </div>
              <div className="bg-[#d4884a] p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-3">Athletics</h3>
                <p>Iceland U16, U18, U20 National Teams (Basketball) • Current player with KV</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">Selected Projects</h2>
            <div className="w-20 h-1 bg-[#d4884a] mb-8"></div>

            <div className="grid gap-6">
              {[
                {
                  title: "Stilling Bot MVP",
                  description: "Built an AI chatbot MVP for product and customer-support workflows using internal company and product data.",
                  status: "Completed"
                },
                {
                  title: "Slideshow Agent",
                  description: "Building an AI-powered slideshow agent for dynamic, data-driven presentation generation.",
                  status: "Current Project"
                },
                {
                  title: "Basketmob API",
                  description: "Developed an API-based project for basketball workflows, including backend data handling and integration.",
                  status: "School Project"
                },
                {
                  title: "Botahusid Website",
                  description: "Designed and deployed botahusid.is for a law-related business.",
                  status: "Completed"
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#d4884a]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#1e3a5f] text-lg">{project.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${project.status === "Current Project" ? "bg-[#d4884a] text-white" : "bg-gray-100 text-gray-600"}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">Experience & Education</h2>
            <div className="w-20 h-1 bg-[#d4884a] mb-8"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">Professional Experience</h3>
                <div className="space-y-6">
                  {[
                    { title: "Auto Parts Sales and Installation Support", company: "Stilling", period: "Summer 2024, Summer 2025" },
                    { title: "Instructor and Student Support", company: "Vinnuskoli Reykjavikur / Rettarholtsskoli", period: "2021-2024" },
                    { title: "Assistant Basketball Coach", company: "KR Sports Club", period: "2019-2021" },
                    { title: "Retail Associate", company: "The North Face", period: "2022" }
                  ].map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-gray-200">
                      <div className="absolute w-3 h-3 bg-[#d4884a] rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-medium text-[#1e3a5f]">{exp.title}</h4>
                      <p className="text-sm text-[#d4884a]">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">Education</h3>
                <div className="space-y-6">
                  {[
                    { title: "Computer Science", school: "University of Iceland", period: "2025-Present (Expected Spring 2026)" },
                    { title: "B.Sc. in Mechanical Engineering", school: "University of Iceland", period: "2021-2025" },
                    { title: "Physics-Math Specialization", school: "Menntaskolinn vid Sund", period: "2018-2021" },
                    { title: "Accelerated Study Track", school: "Laugalaekjarskoli", period: "2016-2018" }
                  ].map((edu, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-gray-200">
                      <div className="absolute w-3 h-3 bg-[#1e3a5f] rounded-full -left-[7px] top-1"></div>
                      <h4 className="font-medium text-[#1e3a5f]">{edu.title}</h4>
                      <p className="text-sm text-[#d4884a]">{edu.school}</p>
                      <p className="text-xs text-gray-500">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-[#d4884a] mx-auto mb-8"></div>
            
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology and engineering.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:alexander.odinn@gmail.com" className="px-6 py-3 bg-[#d4884a] text-white rounded-lg hover:bg-[#c47a3f] transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" /> alexander.odinn@gmail.com
              </a>
              <a href="tel:+3546919886" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" /> +354 691 9886
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://linkedin.com/in/alexander-knudsen" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-xl hover:bg-[#d4884a] transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="https://github.com/Alexander-Knudsen" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-xl hover:bg-[#d4884a] transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#162c47] text-center">
        <p className="text-gray-400 text-sm">© 2026 Alexander Odinn Knudsen. All rights reserved.</p>
      </footer>
    </div>
  );
}