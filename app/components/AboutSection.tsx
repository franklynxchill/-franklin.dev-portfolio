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
                I am a frontend and full-stack developer who builds scalable, user-focused applications with a strong understanding of business needs. My background working within a corporate environment gave me early exposure to how technology supports real operational processes, shaping the way I approach problem-solving today.
              </p>

              <p className=" my-4">
               I specialize in creating seamless user experiences backed by efficient, maintainable systems using React, Next.js, Tailwind CSS, and Node.js. I focus on writing clean, production-ready code while ensuring every feature aligns with clear business objectives.
              </p>

              <p>
                What sets me apart is my ability to communicate effectively across teams, understand the context behind requirements, and take ownership of projects from concept through deployment. I thrive in environments that value continuous learning, thoughtful execution, and measurable impact.
              </p>
              <p className=" my-4">
                I am currently open to frontend or full-stack roles where I can contribute to meaningful products and grow alongside experienced teams.
              </p>
            </div>
          </div>
         </motion.div>
      </div>
    </section>
  )
}
