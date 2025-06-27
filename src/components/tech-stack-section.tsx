"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo, useCallback } from "react"

interface TechItem {
  name: string
  category: string
  icon: string
  color: string
}

export default function TechStackSection() {
  const [techStack, setTechStack] = useState<TechItem[]>([])

  // Memoize fallback data untuk menghindari re-creation
  const fallbackTechStack = useMemo<TechItem[]>(() => [
    { name: "Node.js", category: "Backend", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Express", category: "Backend", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { name: "Laravel", category: "Backend", icon: "🔴", color: "from-red-400 to-red-600" },
    { name: "PostgreSQL", category: "Database", icon: "🐘", color: "from-blue-400 to-blue-600" },
    { name: "Redis", category: "Database", icon: "💎", color: "from-red-500 to-pink-500" },
    { name: "Docker", category: "DevOps", icon: "🐳", color: "from-blue-500 to-cyan-500" },
    { name: "NGINX", category: "DevOps", icon: "🌐", color: "from-green-500 to-teal-500" },
    { name: "GitHub Actions", category: "DevOps", icon: "⚙️", color: "from-gray-600 to-gray-800" },
  ], [])

  const loadTechStack = useCallback(async () => {
    try {
      const response = await fetch("/data/techstack.json")
      const data = await response.json()
      setTechStack(data)
    } catch (error) {
      console.error("Failed to load tech stack:", error)
      setTechStack(fallbackTechStack)
    }
  }, [fallbackTechStack])

  useEffect(() => {
    loadTechStack()
  }, [loadTechStack])

  // Memoize animation variants untuk menghindari re-creation
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3, // Kurangi durasi
      },
    },
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9 // Kurangi scale change untuk performa lebih baik
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.3, // Kurangi bounce
        duration: 0.4, // Batasi durasi
      },
    },
  }), [])

  // Memoize hover animation untuk mencegah re-calculation
  const getHoverAnimation = useCallback((index: number) => ({
    scale: 1.03, // Kurangi scale untuk performa lebih baik
    rotate: (index % 2 === 0 ? 3 : -3), // Gunakan nilai tetap daripada Math.random()
    transition: { 
      type: "spring" as const, 
      bounce: 0.4,
      duration: 0.2 // Animasi hover yang lebih cepat
    },
  }), [])

  return (
    <section id="tech" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header dengan optimasi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} // Kurangi jarak perpindahan
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }} // Hanya animasi sekali dan tambah margin
          transition={{ duration: 0.4, ease: "easeOut" }} // Gunakan easing yang efisien
          className="mb-16 relative"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -skew-x-12" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Tech Arsenal</h2>
          </div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl">
            The tools and technologies I use to build scalable and performant backend systems, design robust architectures, and create intelligent solutions.
          </p>
        </motion.div>

        {/* Tech stack grid dengan optimasi */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Hanya animasi sekali
          className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={getHoverAnimation(index)}
                // Hapus whileTap untuk mengurangi event listeners
                className={`relative group cursor-pointer transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`} // Kurangi rotasi default
                // Tambah will-change untuk optimasi browser
                style={{ willChange: "transform" }}
              >
                <div
                  className={`bg-gradient-to-br ${tech.color} p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200`} // Hanya transisi shadow
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                    <span className="text-white/80 text-sm px-3 py-1 bg-white/20 rounded-full">{tech.category}</span>
                  </div>
                </div>

                {/* Hover effect overlay - gunakan CSS hover daripada Framer Motion */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            ))}
          </div>

          {/* Decorative connecting lines - optimasi dengan CSS animations */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10" style={{ willChange: "auto" }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              {/* Curved connecting lines dengan optimasi */}
              <path
                d="M 100 100 Q 300 50 500 100 T 900 100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s" }} // Perlambat animasi
              />
              <path
                d="M 150 300 Q 400 250 650 300 T 950 300"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ 
                  animationDelay: "1.5s",
                  animationDuration: "3s"
                }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}