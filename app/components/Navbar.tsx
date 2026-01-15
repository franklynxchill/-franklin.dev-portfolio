"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { IoClose, IoMenu } from "react-icons/io5"
import Link from "next/link"
import { MdOutlineFileDownload } from "react-icons/md"
import { FaCode } from "react-icons/fa"

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      navLinks.forEach(link => {
        const section = document.getElementById(link.id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "fixed top-0 w-full bg-white z-50 transition-all",
        scrolled
          ? "bg-white backdrop-blur border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 font-semibold tracking-wide text-base md:text-lg"
        >
          <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded bg-primary text-white text-sm md:text-base font-semibold">
            F
          </div>
          <span>
            FRANKLIN<span className="text-primary">.dev</span>
          </span>
        </Link>



        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6">
          {navLinks.map(link => {
            const isActive = activeSection === link.id

            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={clsx(
                    "relative text-sm font-medium transition",
                    isActive
                      ? "text-primary"
                      : "text-surface hover:text-primary"
                  )}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="active-section"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/Franklin.dev_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-full text-sm text-background px-6 py-3 bg-primary hidden lg:inline-flex items-center gap-2 font-medium transition-opacity duration-200"
        >
          <MdOutlineFileDownload size={20} />
          Download Resume
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose  size={28}  /> : <IoMenu  size={28}  />   }
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/90 backdrop-blur border-t"
          >
            <ul className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map(link => {
                const isActive = activeSection === link.id

                return (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      onClick={handleNavClick}
                      className={clsx(
                        "block text-sm font-medium transition",
                        isActive
                          ? "text-primary"
                          : "text-surface"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/Franklin.dev_Resume.pdf "
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full text-sm text-background px-6 py-3 bg-primary flex items-center justify-center gap-2 font-medium w-[90%] mx-auto transition-opacity duration-200 mb-5"
            >
              <MdOutlineFileDownload size={20} />
              Download Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
