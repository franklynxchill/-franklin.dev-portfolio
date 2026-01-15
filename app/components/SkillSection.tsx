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
        <div className=" mb-16">
          <h2 className=" font-medium text-2xl md:text-4xl mb-5 text-center text-background">Tech Stack & Expertise</h2>
          <div className=" flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <FaReact className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">React js</span>
            </div>

            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <RiNextjsFill className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">Next js</span>
            </div>

            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <SiTypescript className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">TypeScript</span>
            </div>

            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <RiTailwindCssFill className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">Tailwind CSS</span>
            </div>

            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <FaNodeJs className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">Node js</span>
            </div>

            <div className=" py-6 px-8 rounded-2xl text-center border-2 border-border bg-surface flex flex-col items-center justify-center">
              <SiMongodb className=" text-xl text-primary" />
              <span className=" text-sm mt-1 text-text-muted">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-medium text-2xl mb-3 text-background">Skills & Tech Stack</h2>
            <p className="text-text-muted">A comprehensive toolkit for building modern, scalable applications</p>
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
                  TypeScript
                </li>
                <li>
                  Next.js
                </li>
                <li>
                  Tailwind CSS
                </li>
                <li>
                  HTML/CSS
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
              <ul className=" flex flex-col gap-y-2 mt-4"> 
                <li>
                  Node.js
                </li>
                <li>
                  Express
                </li>
                <li>
                  REST APIs
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-purple-200 border-2 rounded-2xl p-6">
              <div className=" flex items-center gap-4">
                <FiDatabase className=" text-purple-800 text-2xl" />
                <h3 className=" text-black font-medium">Database</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4">
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
                <h3 className=" text-black font-medium">DevOps & Tools</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4"> 
                <li>
                  AWS
                </li>
                <li>
                  Git
                </li>
                <li>
                  CI/CD
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 border-cyan-200 border-2 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <FiLayers className="  text-cyan-800 text-2xl"/>
                <h3 className=" text-black font-medium">Architecture</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4 "> 
                <li>
                  System Design
                </li>
                <li>
                  RESTful APIs
                </li>
                <li>
                  Design Patterns
                </li>
                <li>
                  Testing
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 border-pink-200 border-2 rounded-2xl p-6">
              <div className=" flex items-center gap-4">
                <FiGlobe className=" text-pink-800 text-2xl" />
                <h3 className=" text-black font-medium">Additional</h3>
              </div>
              <ul className=" flex flex-col gap-y-2 mt-4">
                <li>
                  Responsive Design
                </li>
                <li>
                  Performance Optimization
                </li>
                <li>
                  Security Best Practices
                </li>
                <li>
                  Team Collaboration
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