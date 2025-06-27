"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo, useCallback } from "react"
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

  // Memoize fallback data
  const fallbackProjects = useMemo<Project[]>(() => [
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
  ], [])

  const loadProjects = useCallback(async () => {
    try {
      const response = await fetch("/data/projects.json")
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error("Failed to load projects:", error)
      setProjects(fallbackProjects)
    }
  }, [fallbackProjects])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  // Memoize animation variants
  const projectVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  }), [])

  // Memoize content animation variants
  const getContentVariants = useCallback((index: number) => ({
    initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } // easeOut cubic-bezier
  }), [])

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header - optimized */}
        <motion.div
          viewport={{ once: true, margin: "-50px" }}
          whileInView="animate"
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of system apps and tools I've built, focusing on scalability, performance, and clean
            architecture
          </p>
        </motion.div>

        {/* Projects with optimized animations */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              {...projectVariants}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(index * 0.1, 0.3), // Batasi delay maksimal
                ease: "easeOut" 
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project image - optimized */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                style={{ willChange: "transform" }}
              >
                {/* Gunakan CSS untuk rotasi dan hover effect */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <img
                    src={project.image || "https://placehold.co/600x400"}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    loading="lazy" // Lazy loading untuk performa
                  />

                  {/* CSS hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* Hover overlay dengan optimasi */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project?.github ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                      >
                        <Github className="w-6 h-6 text-gray-800" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Decorative elements - static untuk performa */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 transform rotate-45" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20" />
              </motion.div>

              {/* Project content - optimized */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <motion.h3
                    {...getContentVariants(index)}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {project.name}
                  </motion.h3>

                  <motion.p
                    {...getContentVariants(index)}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                    className="text-gray-600 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Tech stack - optimized */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  className="flex flex-wrap gap-3"
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Project link - optimized */}
                {project.github && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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