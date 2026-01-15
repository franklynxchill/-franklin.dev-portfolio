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
        <section className=" px-5 md:p-0 w-full flex flex-col h-[120vh] md:h-[120vh] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Availability */}
            <div className="flex items-center justify-center gap-2 border-2 border-primary  text-center font-medium py-2 w-72 mx-auto rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>

              <span className="text-sm font-medium text-primary">
                Available for new opportunities
              </span>
            </div>

            <h1 className=" text-3xl md:text-5xl mt-4 md:w-[60%] mx-auto  text-center text-white">
              Full-Stack Developer Building <span className=" text-cyan-600">Scalable Web Solutions</span>
            </h1>
            <p className=" mt-4 md:w-[55%] mx-auto text-center text-text-muted">
              I craft high-performance applications that solve real business problems. From responsive frontends to robust backends, I deliver end-to-end solutions that drive measurable results.
              Open to remote or hybrid roles.
            </p>

            {/* CTAs */}
            <div className=" flex items-center justify-center mt-12 gap-4 ">
              <button className=" btn-primary btn-primary:hover">
                <Link href="#projects">View My Work</Link>
              </button>
              <button className=" text-text-muted btn-secondary btn-secondary:hover">
                <Link href="#contact">Get In Touch</Link>
              </button>
            </div>

            {/* Socials */}
            <div className=" flex items-center justify-center gap-x-5 mt-12 ">
              <Link href="">
                <LuGithub className=" text-2xl font-bold text-text-muted hover:text-primary"/>
              </Link>
              <Link href="">
                <FaLinkedinIn className=" text-2xl font-bold text-text-muted hover:text-primary" />
              </Link>
              <Link href="">
                <MdOutlineMailOutline className=" text-2xl font-bold text-text-muted hover:text-primary"/>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Hero