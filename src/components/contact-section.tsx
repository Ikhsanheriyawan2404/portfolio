"use client"

import { motion } from "framer-motion"
import { Mail, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"

interface Profile {
  email: string
  github: string
}

export default function ContactSection() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch("/data/profile.json")
        const data = await response.json()

        setProfile(data)
      } catch (error) {
        console.error("Failed to load profile:", error)
        // Fallback data
        setProfile({
          email: "johndoe@gmail.com",
          github: "johndoe123"
        })
      }
    }
    loadProfile()
  }, [])

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let’s Build Something
              <span className="block text-blue-600 transform rotate-1 inline-block ml-4">Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Always excited to explore new challenges in system design, performance, and intelligent solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform rotate-1 hover:rotate-0"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${profile?.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors">
                      {profile?.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform -rotate-1 hover:rotate-0"
                >
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-3 rounded-2xl">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <a
                      href={`https://github.com/${profile?.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      @{profile?.github}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-3xl border border-green-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-gray-900">Currently Available</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Open to meaningful collaboration and technical discussions.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-xl transform -rotate-1"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Let’s connect"
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Feel free to share what you’re working on or want to discuss..."
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
