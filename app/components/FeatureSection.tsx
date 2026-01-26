"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaRocket, FaVolleyballBall } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { SlEnergy } from "react-icons/sl"
import { TbWorld } from "react-icons/tb"

type FilterType = "all" | "frontend" | "fullstack" | "landingpage"

function FeatureSection() {
  const [filter, setFilter] = useState<FilterType>("all")

  const projects = [
    {
      categories: "fullstack",
      image: "/assets/geneith_pharm_project.png",
      title: "Pharmaceutical Corporate & E-Commerce Platform",
      overview: "End-to-end corporate website and e-commerce platform with secure payments and scalable backend.",
      highlights: [
        "Corporate website + online store",
        "Secure checkout with Stripe",
        "Product & order management",
        "Fully responsive and SEO-optimized",

      ],
      liveLink: "https://demo-geneithpharm.vercel.app/",
      gitlink: "https://github.com/franklynxchill/demo-geneithpharm",
      stacks: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Vercel",
        "AWS",
      ],
    },
    {
      categories: "frontend",
      image: "/assets/space-tourism-multi-page.webp",
      title: "Space Tourism Multi-Page Website",
      overview: "Multi-page website built from Figma with dynamic tab-based content and responsive layouts.",
      highlights: [
        "Multi-page layout (Home, Destination, Crew, Technology)",
        "Tab-based content switching",
        "Fully responsive (desktop, tablet, mobile)",
        "Interactive hover states",
      ],
      liveLink: "https://space-tourism-website-main-seven.vercel.app",
      gitlink: "https://github.com/franklynxchill/space-tourism-website-main",
      stacks: ["Next.js", "React", "Tailwind CSS", "Vercel", "Figma","JSON",],
    },
    {
      categories: "landingpage",
      image: "/assets/bookmark-landing-page.webp",
      title: "Bookmark landing page",
      overview: "Modern landing page with JavaScript-driven UI interactions and form validation.",
      highlights: [
        "Pixel-perfect layout from Figma",
        "Tabbed features section",
        "FAQ accordion interaction",
        "Newsletter form validation",
        "Fully responsive (desktop & mobile)",
      ],
      liveLink: "https://bookmark-landing-page-franklynxchill.netlify.app/",
      gitlink: "https://github.com/franklynxchill/bookmark-landing-page",
      stacks: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JS",
        "Figma",
      ],
    },
    {
      categories: "landingpage",
      image: "/assets/digital-bank-landing-page.webp",
      title: "Digital bank landing page",
      overview: "Pixel-perfect landing page built from Figma with modern UI and mobile navigation.",
      highlights: [
        "Pixel-perfect layout from Figma",
        "Fully responsive (desktop & mobile)",
        "Mobile navigation toggle with JavaScript",
        "Hover & focus states",
        "Performance-optimized assets",
      ],
      liveLink: "https://easybank-landing-page-franklynxchill.netlify.app/",
      gitlink: "https://github.com/franklynxchill/easybank-landing-page",
      stacks: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JS",
        "Figma",
      ],
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.categories === filter)

  return (
    <section className="container mx-auto mt-14">
      {/* Filters */}
      <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          icon={<FaVolleyballBall />}
          label="All"
        />
        <FilterButton
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
          icon={<TbWorld />}
          label="Web Apps"
        />
        <FilterButton
          active={filter === "fullstack"}
          onClick={() => setFilter("fullstack")}
          icon={<SlEnergy />}
          label="Full Stack"
        />
        <FilterButton
          active={filter === "landingpage"}
          onClick={() => setFilter("landingpage")}
          icon={<FaRocket />}
          label="Landing page"
        />
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-border rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={440}
                  height={440}
                  className="w-full h-auto"
                />

                <span className="absolute top-3 left-3 text-xs px-4 py-1.5 rounded-full bg-white text-black border">
                  {project.categories === "frontend" && "Frontend"}
                  {project.categories === "fullstack" && "Full Stack"}
                  {project.categories === "landingpage" && "Landing Page"}
                </span>


                <div className="absolute bottom-3 right-3 flex gap-2">
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank">
                      <IconButton>
                        <FaExternalLinkAlt />
                      </IconButton>
                    </Link>
                  )}
                  {project.gitlink && (
                    <Link href={project.gitlink} target="_blank">
                      <IconButton>
                        <FiGithub />
                      </IconButton>
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 py-5 h-full bg-white">
                <h3 className="text-lg font-semibold text-background">
                  {project.title}
                </h3>

                <p className=" text-text-muted">{project.overview}</p>
                <ul className=" mt-2 list-disc text-text-muted  ml-6 space-y-1 text-[15px]">
                  {project.highlights.map(highlight => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stacks.map(stack => (
                    <span key={stack} className="badge">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FeatureSection

/* ======================
   Helper Components
====================== */

function FilterButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 text-text items-center border py-2 px-5 rounded-3xl text-sm transition
        ${
          active
            ? "bg-primary text-white border-primary"
            : "border-border hover:bg-gray-100 hover:text-background cursor-pointer"
        }
      `}
    >
      {icon}
      {label}
    </button>
  )
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black p-2.5 rounded-lg text-white hover:opacity-80 transition">
      {children}
    </div>
  )
}
