"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Profile {
  firstName: string
  lastName: string
  role: string
  bio: string
  profilePhoto: string
}

export default function HeroSection() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch("/data/profile.json")
        const data = await response.json()

        const formattedData: Profile = {
          firstName: data.first_name,
          lastName: data.last_name,
          role: data.role,
          bio: data.bio,
          profilePhoto: data.profile_photo
        }
        
        setProfile(formattedData)
      } catch (error) {
        console.error("Failed to load profile:", error)
        // Fallback data
        setProfile({
          firstName: "John",
          lastName: "Doe",
          role: "Peternak Lele",
          bio: "Pengen jago tapi masih males ngoding, migrasi jadi peternak lele aja dulu.",
          profilePhoto: "/vite.svg"
        })
      }
    }
    loadProfile()
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Text content with diagonal layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-4 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">{profile?.firstName}</span>
                <span className="block text-blue-600 transform -rotate-2 inline-block">{profile?.lastName}</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl inline-block transform rotate-1 shadow-lg">
                <span className="text-lg font-semibold">{profile?.role}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              {profile?.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">Open for tech collaboration and discussions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                <span className="text-sm text-gray-600">📍 Based in Indonesia</span>
              </div>

              <a
                href="/images/resume.png"
                download="ikhsan-resume.png"
                className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100 hover:bg-gray-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 4v8"
                  />
                </svg>
                <span className="text-sm text-gray-600">Download Resume</span>
              </a>
              
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with creative layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-12 opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20" />

              {/* Main image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                <img
                  src={`/images/${profile?.profilePhoto}`}
                  alt={`${profile?.firstName} - ${profile?.role}`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Overlay with tech icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -right-8 top-16 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -left-8 bottom-16 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
