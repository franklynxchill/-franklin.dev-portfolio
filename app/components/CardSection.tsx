import Image from "next/image"
import project1 from "@/public/assets/geneith_pharm_project.png" 

 
 

function CardSection() {
  const projects =  [
    {
      hightlight: "Full-Stack Application",
      title: "Pharmaceutical Corporate & E-Commerce Platform",
      overview: "A modern pharmaceutical web platform designed to showcase company credibility, product offerings, and enable scalable digital commerce and distributor engagement.",
      problem: "Pharmaceutical companies in emerging markets often rely on outdated or offline channels, making it difficult to:",
      problemDetails: [
        "Present a credible digital brand presence.",
        "Centralize product information for customers and distributors",
        "Scale marketing, inquiries, and online sales efficiently",
      ],
      solution: "Built a responsive, full-stack pharmaceutical platform that combines corporate branding, product catalog management, and e-commerce readiness in a single system.",
      solutionDetails: [
        "Professional public-facing website focused on pharmaceutical brand storytelling and credibility.",
        "Structured product presentation tailored for customers and distributors.",
        "Scalable architecture prepared for online sales, authentication, and admin management."
      ],
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Vercel",
        "AWS",
      ],
      keyFeatures : [
        "Corporate landing pages with strong brand positioning.",
        "Dynamic product catalog with structured navigation.",
        "Testimonials and trust signals to improve credibility.",
        "Authentication-ready architecture (Login / User flows).",
        "Scalable layout suitable for admin dashboards and e-commerce integration.",
        "Fully responsive design optimized for mobile and desktop.",
      ],
      businessImpact: [
        "Strengthens brand credibility and online presence for pharmaceutical companies.",
        "Improves customer and distributor access to product information.",
        "Reduces reliance on offline marketing channels.",
        "Provides a scalable foundation for future e-commerce and admin dashboards.",
        "Enables faster deployment and iteration through serverless infrastructure.",
      ]
    }
  ]
  return (
    <div className=" container mx-auto flex gap-7 mt-12">
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" flex flex-col md:flex-row gap-10">
            <div className="">
              <Image 
                src={project1} 
                alt="geneith pharm project"
                className=" shadow"
              />
            </div>
            <div className="">
              <p className=" text-blue-500 font-bold">{project.hightlight}</p>
              <h3 className=" font-bold">{project.title}</h3>
              <p>{project.overview}</p>

              <div className=" my-7">
                <h3 className=" font-bold mb-3">Problem</h3>
                <p>{project.problem}</p>
                <ul className=" list-disc pl-7 mt-3">
                  {project.problemDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className=" my-7">
                <h3 className=" font-bold mb-3">Solution</h3>
                <p>{project.solution}</p>
                <ul className=" list-disc pl-7 mt-3">
                  {project.solutionDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className=" mt-5">
                <h3 className=" font-bold mb-3">Tech Stack</h3>
                <ul className=" flex items-center gap-3 flex-wrap">
                  {project.techStack.map((stack, index) => (
                    <button key={index} className=" bg-slate-200 text-slate-600 rounded-2xl py-1.5 text-sm px-4">{stack}</button>
                  ))}
                </ul>
              </div>
              <div className=" my-7">
                <h3 className=" font-bold mb-3">Key Features</h3>
                <ul>
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="relative pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['→']">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className=" bg-blue-100 border-2 border-blue-700 rounded-2xl p-7">
                <h3 className=" font-bold mb-3">Business Impact</h3>
                <ul>
                  {project.businessImpact.map((impact, index) => (
                    <li key={index} className="relative pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['✓']">{impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardSection