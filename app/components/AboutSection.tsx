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
                Frontend & Full-Stack developer
                <LuPawPrint />
              </button>
            </div>

            <h3 className=" capitalize text-center md:text-left text-3xl md:text-4xl font-semibold  mt-4 md:mt-12 mb-5 w-4/5 lg:w-99 mx-auto lg:mx-0">Building scalable web applications</h3>

            <div className="text-text-muted">
              <p>
                I'm a Frontend-Focused Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. I build responsive web applications, dashboards, and scalable digital products with a focus on usability, performance, and maintainability.
              </p>

              <p className=" my-4">
                My background in Accounting has given me a strong understanding of business operations, financial workflows, and data-driven decision-making. This allows me to approach software development with both technical and business perspectives, helping translate real-world requirements into practical digital solutions.
              </p>

              <p>
                I'm currently open to frontend and full-stack opportunities where I can contribute to impactful products, collaborate with talented teams, and continue growing as a software engineer.
              </p>

            </div>
          </div>
         </motion.div>
      </div>
    </section>
  )
}
