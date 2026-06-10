"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaLinkedinIn } from "react-icons/fa"
import { LuGithub } from "react-icons/lu"
import { MdOutlineMailOutline } from "react-icons/md"
import Navbar from "./Navbar"
import { div } from "framer-motion/client"


function Hero() {
  return (
    <div className="">
      <div className=" bg-surface" id="hero">
        <section className=" px-5 md:p-0 w-full flex flex-col h-[130vh] md:h-[115vh] pt-24 md:pt-20 pb-10 md:pb-0 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Availability */}
            <div className="flex items-center justify-center gap-2 border-2 border-primary  text-center font-medium py-2 w-72  mx-auto rounded-full mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>

              <span className="text-sm font-medium text-primary">
                Available for new opportunities
              </span>
            </div>

            {/* Name */}
            <p className="text-base md:text-base text-cyan-500 font-medium mb-1 mt-5">
              Hi, I’m Franklin Onyenechere
            </p>

            {/* Location */}
            <p className="text-base text-text-muted mb-4">
              Based in Lagos, Nigeria • Available for remote work
            </p>

            {/* Headline */}
            <h1 className=" text-3xl md:text-5xl font-semibold text-white leading-tight md:w-[60%] mx-auto">
              Frontend (React/Next.js) {" "}
              <span className="text-cyan-500"> Focused Full-Stack Developer</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-2 text-text-muted md:w-[55%] mx-auto leading-relaxed">
              I build modern web applications, business platforms, and data-driven dashboards using React, Next.js, and Node.js, helping organizations improve user experience, streamline operations, and scale digital products.
            </p>

            <ul className=" flex flex-col md:flex-row items-center justify-center gap-x-4 mt-3 text-text-muted">
              <li className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Responsive & accessible user interfaces</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>API-driven applications & dashboards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Fast and reliable delivery</span>
              </li>
            </ul>


            {/* CTAs */}
            <div className=" flex items-center justify-center mt-10 gap-4 ">
              <button className=" btn-primary btn-primary:hover">
                <Link href="#projects">View My Work</Link>
              </button>
              <button className=" text-text-muted btn-secondary btn-secondary:hover">
                <Link href="#contact">Get In Touch</Link>
              </button>
            </div>

            {/* Socials */}
            <div className=" flex items-center justify-center gap-x-5 mt-12 ">
              <Link href="https://github.com/franklynxchill" target="_blank">
                <LuGithub className=" text-2xl font-bold text-text-muted hover:text-primary"/>
              </Link>
              <Link href="https://www.linkedin.com/in/franklynxchill/" target="_blank">
                <FaLinkedinIn className=" text-2xl font-bold text-text-muted hover:text-primary" />
              </Link>
              <Link href="mailto:franklynxchill@gmail.com" target="_blank">
                <MdOutlineMailOutline className=" text-2xl font-bold text-text-muted hover:text-primary"/>
              </Link>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Hero