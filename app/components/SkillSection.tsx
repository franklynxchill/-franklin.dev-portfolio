"use client"

import { AiOutlineApi } from "react-icons/ai";
import { CiCloud } from "react-icons/ci";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FiDatabase, FiGlobe, FiLayers } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";
import { LuServer } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";

function SkillSection() {
  return (
    <div className="py-24 bg-white" id="skills">
      <main className="px-5 md:p-0">
        <div className=" mb-16 max-w-2xl mx-auto text-center">
          <h2 className=" font-medium text-2xl md:text-4xl mb-5 text-center text-background"
          >
            Tech Stack & Expertise
          </h2>
          <p className="text-text-muted">
            I use modern tools to build scalable and maintainable applications.
          </p>
        </div>

        <div className="">
          <div className="">
            <h2 className="font-medium text-2xl text-center mb-3 text-background">
              Core Stack
            </h2>
            <div className=" flex flex-wrap items-center justify-center gap-4 mt-4">
              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <FaReact className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">React.js</span>
              </div>

              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <RiNextjsFill className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">Next.js</span>
              </div>

              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <SiTypescript className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">TypeScript</span>
              </div>

              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <FaNodeJs className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">Node.js</span>
              </div>

              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <SiMongodb className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">MongoDB</span>
              </div>

              <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
                <AiOutlineApi className=" text-xl text-primary" />
                <span className=" text-sm mt-1 text-text-muted">REST APIs</span>
              </div>
            </div>
          </div>

          <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-9 justify-center my-14 text-slate-700">
            <div className=" bg-blue-50 border-blue-200 border-2 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <IoMdCode className=" text-2xl text-blue-600" />
                <h3 className=" text-black font-medium">Frontend</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4 list-disc pl-5 marker:text-blue-500">
                <li>
                  React
                </li>
                <li>
                  Next.js
                </li>                
                <li>
                  JavaScript (ES6+)
                </li>
                <li>
                  TypeScript
                </li>
                <li>
                 HTML5
                </li>
                <li>
                  CSS3
                </li>
                <li>
                  Tailwind CSS
                </li>
                <li>
                  React Query
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-green-200 border-2 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <LuServer className=" text-green-800 text-2xl"/>
                <h3 className=" text-black font-medium">Backend</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4 list-disc pl-5 marker:text-green-700-"> 
                <li>
                  Node.js
                </li>
                <li>
                  Express.js
                </li>
                <li>
                  REST APIs
                </li>                 
                <li>
                  JWT Authentication
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  MySQL
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-orange-200 border-2 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <CiCloud className=" text-orange-800 text-2xl"/>
                <h3 className=" text-black font-medium">Tools & Deployment</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4 list-disc pl-5 marker:text-orange-700"> 
                <li>
                  Git
                </li>
                <li>
                  GitHub
                </li>
                <li>
                  Vercel
                </li>
                <li>
                  Netlify
                </li>
                <li>
                  Render
                </li>
                <li>
                  Postman
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SkillSection