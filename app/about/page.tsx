import Image from "next/image";
import Franklin from "@/public/assets/franklin.png"
import { FaCode } from "react-icons/fa";

export default function page() {
  return (
    <div className="py-32">
      <main className=" container mx-auto px-5 md:p-0">
        <h1 className=" text-center mb-3 text-2xl">About Me</h1>
        <div className=" flex flex-col md:flex-row gap-8">
          <div className=" flex-1">
            <Image  
              src={Franklin}
              alt="franklin"
            />
          </div>
          <div className=" flex-1">
            <button className=" flex gap-2 items-center justify-center bg-amber-500 border py-2 px-5 rounded-3xl text-sm">
              <FaCode />
              Full-Stack developer
            </button>
            <p>
              I began my journey as a frontend developer, driven by curiosity about how digital products are built and how technology can solve real problems. During my NYSC at Geneith Pharm Ltd in the Accounting Department, I continued honing my development skills, using the experience to explore the intersection of business processes and technology. It was during this period that I challenged myself to expand beyond frontend development, learning backend skills to grow toward full-stack development.
            </p>

            <p className=" my-6">
              Today, I build user-focused, scalable applications that solve real business problems. I specialize in creating seamless user experiences backed by robust, efficient systems using React, Next.js, Tailwind CSS, and Node.js. My work bridges the gap between technical excellence and business insight, ensuring every feature delivers tangible value.
            </p>

            <p>
              What sets me apart is my ability to understand the business context behind every project. I communicate effectively with both technical and non-technical stakeholders, align solutions with organizational goals, and take ownership of challenges from concept to deployment. I thrive in environments where I can learn continuously, solve complex problems, and deliver impactful solutions.
            </p>
            <p className=" my-4">
              I’m actively seeking opportunities where I can contribute as a frontend or full-stack developer, take on challenging projects, and continue building products that make a difference.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
