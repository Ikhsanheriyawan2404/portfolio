"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "tech", label: "Tech" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className="fixed z-50 w-full md:w-auto md:left-1/2 md:top-6 md:bottom-auto md:transform md:-translate-x-1/2 bottom-4 px-4"
    >
      <div className="mx-auto max-w-md md:max-w-none bg-white/70 backdrop-blur-xl rounded-xl px-2 py-2 shadow-2xl border border-white/30 md:rounded-full md:px-6 md:py-3 md:shadow-lg">
        <div className="flex justify-around md:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex-1 md:flex-initial px-3 py-2 text-xs font-medium transition-all duration-300 rounded-xl md:px-4 md:py-2 md:text-sm md:rounded-full ${
                activeSection === item.id
                  ? "text-blue-600 scale-105"
                  : "text-gray-700 hover:text-blue-600 hover:scale-105 active:scale-95"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/40 md:bg-blue-100/80 md:rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
