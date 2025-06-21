"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Linkedin, Github, Menu, X, ChevronDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// 3D Space Stardust Background Component
const SpaceStardust = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particleCount = 200
    const particles: HTMLDivElement[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-white opacity-70"

      // Random size and position
      const size = Math.random() * 3 + 1
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Random color tint
      const colors = ["#ffffff", "#e0f2fe", "#fef3c7", "#fce7f3", "#f0f9ff"]
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      container.appendChild(particle)
      particles.push(particle)
    }

    particlesRef.current = particles

    // GSAP Animation for 3D movement
    particles.forEach((particle, index) => {
      const tl = gsap.timeline({ repeat: -1 })

      // 3D movement simulation
      tl.to(particle, {
        duration: Math.random() * 20 + 10,
        x: `${Math.random() * 200 - 100}vw`,
        y: `${Math.random() * 200 - 100}vh`,
        z: Math.random() * 1000,
        scale: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        ease: "none",
      })

      // Twinkling effect
      gsap.to(particle, {
        duration: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2,
      })
    })

    // Floating nebula clouds
    const createNebula = () => {
      for (let i = 0; i < 5; i++) {
        const nebula = document.createElement("div")
        nebula.className = "absolute rounded-full opacity-10"
        nebula.style.width = `${Math.random() * 300 + 100}px`
        nebula.style.height = `${Math.random() * 300 + 100}px`
        nebula.style.background = `radial-gradient(circle, ${
          ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"][Math.floor(Math.random() * 4)]
        }40, transparent)`
        nebula.style.left = `${Math.random() * 100}%`
        nebula.style.top = `${Math.random() * 100}%`

        container.appendChild(nebula)

        gsap.to(nebula, {
          duration: Math.random() * 30 + 20,
          x: `${Math.random() * 100 - 50}vw`,
          y: `${Math.random() * 100 - 50}vh`,
          rotation: 360,
          scale: Math.random() * 1.5 + 0.5,
          repeat: -1,
          ease: "none",
        })
      }
    }

    createNebula()

    // Shooting stars with GSAP
    const createShootingStars = () => {
      setInterval(
        () => {
          const star = document.createElement("div")
          star.className = "absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          star.style.width = "150px"
          star.style.top = `${Math.random() * 50}%`
          star.style.left = "-150px"

          container.appendChild(star)

          gsap.to(star, {
            duration: 2,
            x: "120vw",
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {
              star.remove()
            },
          })
        },
        Math.random() * 5000 + 3000,
      )
    }

    createShootingStars()

    return () => {
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: "1000px" }}
    />
  )
}

// GSAP Decorative Elements
const GSAPDecorations = () => {
  const decorationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!decorationsRef.current) return

    const container = decorationsRef.current

    // Floating geometric shapes
    const shapes = ["circle", "triangle", "square"]

    for (let i = 0; i < 15; i++) {
      const shape = document.createElement("div")
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)]

      shape.className = `absolute opacity-20 border border-white/30`

      if (shapeType === "circle") {
        shape.style.borderRadius = "50%"
      } else if (shapeType === "triangle") {
        shape.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"
        shape.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
      }

      const size = Math.random() * 40 + 20
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.left = `${Math.random() * 100}%`
      shape.style.top = `${Math.random() * 100}%`

      container.appendChild(shape)

      // GSAP animation for floating
      gsap.to(shape, {
        duration: Math.random() * 15 + 10,
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        rotation: 360,
        repeat: -1,
        ease: "none",
      })

      // Pulsing effect
      gsap.to(shape, {
        duration: Math.random() * 4 + 2,
        scale: Math.random() * 0.5 + 0.8,
        opacity: Math.random() * 0.3 + 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }

    // Animated lines/connections
    for (let i = 0; i < 8; i++) {
      const line = document.createElement("div")
      line.className = "absolute bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
      line.style.height = "1px"
      line.style.width = `${Math.random() * 200 + 100}px`
      line.style.left = `${Math.random() * 100}%`
      line.style.top = `${Math.random() * 100}%`
      line.style.transform = `rotate(${Math.random() * 360}deg)`

      container.appendChild(line)

      gsap.to(line, {
        duration: Math.random() * 20 + 15,
        x: `${Math.random() * 300 - 150}px`,
        y: `${Math.random() * 300 - 150}px`,
        rotation: `+=${360}`,
        repeat: -1,
        ease: "none",
      })
    }
  }, [])

  return <div ref={decorationsRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  const roles = ["Ishara Harshana", "a React Developer", "a Programmer", "a Designer", "a Musician"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Faster and smoother typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 60 // Faster speeds
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      } else if (isDeleting && currentCharIndex > 0) {
        setTypedText(currentRole.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)
      } else if (!isDeleting && currentCharIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000) // Shorter pause
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentRoleIndex, isDeleting, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61564585663158", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/demonz_shara/?igsh=eGhwZ2FrdHBpd24%3D", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ishara-harshana-592841251", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Ishara-Vithanage", label: "GitHub" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: headerOpacity.get() > 0.5 ? "rgba(0, 0, 0, 0.9)" : "transparent",
          backdropFilter: headerOpacity.get() > 0.5 ? "blur(10px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-black bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "profile"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section ? "text-green-400" : "text-white hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-lg"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {["home", "about", "profile"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize text-white hover:text-green-400 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image src="/background.jpg" alt="Background" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            WELCOME
          </motion.h3>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I am{" "}
            <span className="text-green-400 min-h-[1.2em] inline-block">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              size="lg"
              className="bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              Learn More
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Space Background Container - From About to End */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black">
        <SpaceStardust />
        <GSAPDecorations />

        {/* Deep space gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 px-4 relative z-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative inline-block"
                >
                  <Image
                    src="https://i.ibb.co/hyW571P/cropped-2.jpg"
                    alt="Ishara Harshana"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-blue-400/50 shadow-2xl shadow-blue-500/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  {/* Orbital particles around profile image */}
                  {Array.from({ length: 6 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-70"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [Math.cos((i / 6) * Math.PI * 2) * 180, Math.cos((i / 6) * Math.PI * 2 + Math.PI * 2) * 180],
                        y: [Math.sin((i / 6) * Math.PI * 2) * 180, Math.sin((i / 6) * Math.PI * 2 + Math.PI * 2) * 180],
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="bg-gray-900/90 border-blue-500/30 backdrop-blur-md shadow-2xl shadow-blue-500/10">
                  <CardContent className="p-6">
                    <div className="text-center lg:text-left">
                      <h3
                        className="text-3xl font-bold text-blue-400 mb-2"
                        style={{ fontFamily: "Dancing Script, cursive" }}
                      >
                        Ishara Harshana
                      </h3>
                      <p className="text-gray-300 mb-4 flex items-center justify-center lg:justify-start">
                        <Mail className="w-4 h-4 mr-2" />
                        isharaharshana06@gmail.com
                      </p>

                      <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <social.icon size={24} />
                          </motion.a>
                        ))}
                      </div>

                      <p className="text-xl font-semibold text-center lg:text-left text-blue-200">Stay Connected</p>
                    </div>
                  </CardContent>
                </Card>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Image
                    src="https://tryhackme-badges.s3.amazonaws.com/isharah.png"
                    alt="TryHackMe Badge"
                    width={200}
                    height={100}
                    className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="min-h-screen py-20 px-4 relative z-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                My Journey
              </h2>
            </motion.div>

            <div className="space-y-12">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/90 border-blue-500/30 backdrop-blur-md hover:bg-gray-900/95 transition-all duration-300 shadow-xl shadow-blue-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                      Education
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "BSc.(Hons) Computer Science - University of Westminster",
                          subtitle: "Informatics Institute of Technology - School of Computing",
                          period: "(2024 - Present)",
                        },
                        {
                          title: "G.C.E Advance Level - Math Stream",
                          subtitle: "Ananda College - Colombo",
                          period: "(2021/2022)",
                        },
                        {
                          title: "G.C.E Ordinary Level",
                          subtitle: "Lalith Athulathmudali College - Mount Lavinia",
                          period: "(2017/2018)",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border-l-2 border-blue-400 pl-4 hover:border-blue-300 transition-colors duration-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-200">{item.title}</h4>
                          <p className="text-gray-400">
                            {item.subtitle} | {item.period}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/90 border-purple-500/30 backdrop-blur-md hover:bg-gray-900/95 transition-all duration-300 shadow-xl shadow-purple-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      Experience
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Software Engineer - Intern",
                          subtitle: "Seylan Bank PLC",
                          period: "(2024 - Present)",
                        },
                        {
                          title: "Vice President - Leo Club of Kesbewa",
                          subtitle: "Leo District 306A2",
                          period: "(2023 - 2024)",
                        },
                        {
                          title: "Customer Service Associate",
                          subtitle: "Dialog Business Services (PVT) LTD",
                          period: "(2023 - 2024)",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border-l-2 border-purple-400 pl-4 hover:border-purple-300 transition-colors duration-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-200">{item.title}</h4>
                          <p className="text-gray-400">
                            {item.subtitle} | {item.period}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/90 border-yellow-500/30 backdrop-blur-md hover:bg-gray-900/95 transition-all duration-300 shadow-xl shadow-yellow-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                      Achievements
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Won 2nd Place in Ideathon - CuttingEdge'24",
                          description:
                            "Ideathon - CuttingEdge'24 was a software development competition organized by Informatics Institute of Technology",
                        },
                        {
                          title: "2nd Runners Up - Induction Programme by IIT",
                          description:
                            "During the Induction Programme, our group implemented a mobile application within 6 weeks, was able to be in best top 3 projects.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border-l-2 border-yellow-400 pl-4 hover:border-yellow-300 transition-colors duration-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-200">{item.title}</h4>
                          <p className="text-gray-400 mt-2">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Courses */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/90 border-green-500/30 backdrop-blur-md hover:bg-gray-900/95 transition-all duration-300 shadow-xl shadow-green-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                      Courses
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Induction Programme - Informatics Institute of Technology",
                          skills: "Skills: React Native, Figma, Project based learning",
                        },
                        {
                          title: "Python Programming - University of Moratuwa",
                          skills: "Skills: Python",
                        },
                        {
                          title: "Full Stack Developer - University of Moratuwa",
                          skills: "Skills: HTML, CSS, JavaScript",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border-l-2 border-green-400 pl-4 hover:border-green-300 transition-colors duration-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-200">{item.title}</h4>
                          <p className="text-gray-400 mt-2">{item.skills}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/95 py-8 px-4 relative z-20 backdrop-blur-md border-t border-blue-500/20">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 text-sm mb-4">Ishara Harshana - My Profile. © 2024 All rights reserved</p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
