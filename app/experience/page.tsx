import { FiAward, FiBriefcase } from "react-icons/fi"
import { LuRocket } from "react-icons/lu"


export default function page() {
  const experiences = [
    {
      role: "Website Redesign Case Study",
      highligt: "Geneith Pharm Ltd (Concept Redesign)",
      period: "Septembter 2025 – November 2025",
      line1: "Conducted UX analysis of the existing website, identifying usability, responsiveness, and content-structure issues.",
      line2: "Redesigned the interface from the ground up as a learning-based case study, applying modern UI principles.",
      line3: "Built and deployed the project independently using React, Next.js, and Tailwind CSS.",
      line4: "Managed the entire workflow from design analysis to deployment on Vercel.",
      note: "Disclaimer: This was a personal, learning-based case study and not a commissioned or affiliated project.",
    },
    {
      role: "National Youth Service Corps (NYSC)",
      highligt: "Geneith Pharm Ltd — Accounting Department",
      period: "December 2024 – November 2025",
      line1: "Supported daily accounting operations, reinforcing accuracy, structure, and process-driven problem-solving.",
      line2: "Balanced full-time responsibilities with continuous learning in frontend and full-stack development, demonstrating discipline and strong time management.",
      line3: "Applied business and accounting exposure to better understand workflows, data integrity, and system logic relevant to software systems.",
      line4: "Completed a learning-based website redesign case study inspired by the company’s public website, focusing on UX improvement, responsiveness, and modern design patterns.",
    },
    {
      role: "Junior Full-Stack Developer (Learning-Based Projects)",
      highligt: "Self-Directed",
      period: "2024 – Present",
      line1: "Expanded from frontend development into backend fundamentals, building full-stack applications with REST APIs, authentication, database CRUD operations, and deployment workflows.",
      line2: "Integrated frontend interfaces with backend services, handling data flow, API consumption, and basic system design.",
      line3: "Deployed applications end-to-end using modern hosting platforms, managing build processes and production environments.",
      line4: "Strengthened understanding of how frontend and backend systems work together in real-world applications.",
    },
    {
      role: "Frontend Developer",
      highligt: "Independent Projects & Case Studies",
      period: "May 2023 – Present",
      line1: "Built and deployed 10+ frontend projects using React, Next.js, and Tailwind CSS, focusing on responsive design, accessibility, and clean UI architecture.",
      line2: "Completed multiple real-world UI challenges from Frontend Mentor, translating design specifications into pixel-accurate, production-ready interfaces.",
      line3: "Applied modern frontend best practices, including component-based architecture, state management, and performance optimization.",
      line4: "Used Git and GitHub for version control, documentation, and project iteration, with publicly accessible repositories and live demos.",
    }
  ]

  return (
    <div>
      <section className="py-32 container mx-auto">
        <div className="px-5 md:p-0">
          <div className=" mb-14 text-center">
            <h2 className=" font-medium text-2xl mb-3">Experience & Journey</h2>
            <p className=" text-slate-700">A timeline of professional growth, achievements, and continuous learning</p>
          </div>

          <div className=" flex flex-row-reverse gap-x-20">
            <div className=" flex flex-col gap-y-12">
              {experiences.map((experience, index) => (
                <div key={index}>
                  <div className=" bg-white rounded-2xl shadow p-6">
                    <div className=" flex flex-col md:flex-row gap-y-3 md:items-center justify-between mb-4">
                      <div className="">
                        <h3 className=" font-bold">{experience.role}</h3>
                        <p>{experience.highligt}</p>
                      </div>
                      <div className="">
                        <p>{experience.period}</p>
                      </div>
                    </div>
                    <ul className=" list-disc px-6">
                      <li>{experience.line1}</li>
                      <li className=" my-2">{experience.line2}</li>
                      <li>{experience.line3}</li>
                      <li className=" mt-2">{experience.line4}</li>
                      <p className=" mt-4">{experience.note}</p>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className=" relative">
              <div className=" w-1 h-full bg-slate-500 rounded-2xl"></div>
              <div className=" bg-orange-100 rounded-full p-3 absolute top-0">
                <LuRocket className="  text-orange-600 text-4xl"/>
              </div>

              <div className=" bg-blue-100 rounded-full p-3 absolute top-[23%]">
                <FiBriefcase  className=" text-blue-700 text-4xl"/>
              </div>

              <div className=" bg-green-100 rounded-full p-3 absolute top-1/2">
                <FiAward className=" text-green-700 text-4xl"/>
              </div>

              <div className=" bg-blue-100 rounded-full p-3 absolute top-[75%]">
                <FiBriefcase  className=" text-blue-700 text-4xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
