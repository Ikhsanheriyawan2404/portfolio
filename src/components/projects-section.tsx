"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  techStack: string[]
  image: string
  github: string | null
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("/data/projects.json")
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error("Failed to load projects:", error)
        // Fallback data
        setProjects([
          {
            name: "Inventory API",
            description:
              "A robust backend service to manage warehouse inventory using PostgreSQL and Redis for caching. Features real-time updates, bulk operations, and comprehensive reporting.",
            techStack: ["Node.js", "PostgreSQL", "Redis"],
            image: "/placeholder.svg?height=300&width=400",
            github: "https://github.com/yourname/inventory-api",
          },
          {
            name: "CI/CD Visualizer",
            description:
              "Dashboard to visualize and monitor GitHub Actions pipeline execution with real-time status updates, deployment tracking, and performance metrics.",
            techStack: ["React", "TailwindCSS", "GitHub Actions"],
            image: "/placeholder.svg?height=300&width=400",
            github: "https://github.com/yourname/cicd-visualizer",
          },
          {
            name: "Microservices Gateway",
            description:
              "API gateway built with Express.js to handle routing, authentication, rate limiting, and load balancing for microservices architecture.",
            techStack: ["Express.js", "Docker", "NGINX"],
            image: "/placeholder.svg?height=300&width=400",
            github: "https://github.com/yourname/api-gateway",
          },
        ])
      }
    }
    loadProjects()
  }, [])

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of system apps and tools I've built, focusing on scalability, performance, and clean
            architecture
          </p>
        </motion.div>

        {/* Projects with alternating layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src={project.image || "https://placehold.co/600x400"}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project?.github ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                      >
                        <Github className="w-6 h-6 text-gray-800" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 transform rotate-45" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20" />
              </motion.div>

              {/* Project content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {project.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-600 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Tech stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium transform hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Project link */}
                {project.github && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
