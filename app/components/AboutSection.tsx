"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Franklin from "@/public/assets/franklin.png"
import { FaCode } from "react-icons/fa"
import { LuPawPrint } from "react-icons/lu"

export default function AboutSection() {
  return (
    <section className="py-24" id="about">
      <h2 className=" font-medium text-2xl md:text-4xl mb-8 text-background text-center">About Me</h2>
      <div className="container mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src={Franklin}
            alt="Franklin – Full-Stack Developer"
            className="rounded-xl shadow-lg border"
            width={360}
            height={360}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className=" flex-1">
            <div className=" flex items-center justify-center lg:justify-start">
              <button className=" flex gap-2 items-center justify-center bg-surface border-2  border-primary text-primary py-2 px-5 rounded-3xl text-sm">
                <FaCode />
                Frontend / Full-Stack developer
                <LuPawPrint />
              </button>
            </div>

            <h3 className=" capitalize text-center md:text-left text-3xl md:text-4xl font-semibold  mt-4 md:mt-12 mb-5 lg:w-110 mx-auto lg:mx-0">Crafting digital experiences that matter</h3>

            <div className="text-text-muted">
              <p>
                I am a frontend-focused full-stack developer specializing in React and modern UI development. I work with startups and small businesses to build responsive, scalable, and maintainable web applications that align with real business needs.
              </p>

              <p className=" my-4">
                I have experience collaborating in remote and cross-functional teams, working closely with designers and backend engineers to translate product requirements into clean, production-ready code. My focus is on performance, usability, and long-term maintainability.
              </p>

              <p>
                I am currently open to frontend or full-stack roles where I can contribute to meaningful products and grow alongside experienced teams.
              </p>
            </div>
          </div>
         </motion.div>
      </div>
    </section>
  )
}
