import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMessageSquare, FiSend } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { PiGithubLogoFill } from "react-icons/pi";


export default function page() {
  return (
    <div className="py-32">
      <section className=" container mx-auto  px-5 md:p-0">
        <div className=" text-center">
          <h2 className=" font-medium text-2xl mb-3">Let's Work Together</h2>
          <p className=" max-w-2xl mx-auto text-slate-700">
            I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row gap-y-8 gap-x-10 mt-14 items-start">
          <div className=" flex-1">
            <h3 className=" mb-4  font-medium text-xl">Get in Touch</h3>
            <p className="text-slate-700">
              Whether you have a project in mind, want to discuss potential collaboration, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="mt-9">
              {/* item 1 */}
              <Link href="">
                <div className=" flex gap-3 items-center my-4 p-4 rounded-2xl  bg-sidebar">
                  <div className=" bg-muted-foreground p-3 flex items-center justify-center rounded-lg">
                    <MdOutlineMailOutline className=" text-2xl font-bold text-white"/>
                  </div>
                  <div>
                    <p className=" font-bold">Email</p>
                    <p className="text-slate-700">View my code</p>
                  </div>
                </div>
              </Link>


              {/* item 2 */}
              {/* <Link href="">
                <div className=" flex gap-3 items-center my-4 p-4 rounded-2xl  bg-sidebar">
                  <div className=" border-2 border-[#0A66C2] p-3 flex items-center justify-center rounded-lg">
                    <FaLinkedinIn className=" text-2xl font-bold text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className=" font-bold">LinkedIn</p>
                    <p className="text-slate-700">Connect with me</p>
                  </div>
                </div>
              </Link> */}

              {/* item 3 */}
              {/* <Link href="">
                <div className=" flex gap-3 items-center my-4 p-4 rounded-2xl  bg-sidebar">
                  <div className=" bg-black p-3 flex items-center justify-center rounded-lg">
                    <LuGithub className=" text-2xl font-bold text-white"/>
                  </div>
                  <div>
                    <p className=" font-bold">GitHub</p>
                    <p className="text-slate-700">View my code</p>
                  </div>
                </div>
              </Link> */}
              

              {/* item 4 */}
              <div className=" flex gap-3 items-center my-4 p-4 rounded-2xl  bg-sidebar">
                <div className=" bg-green-400 p-3 flex items-center justify-center rounded-lg">
                  <CiLocationOn className=" text-2xl font-bold text-green-800" />
                </div>
                <div>
                  <p className=" font-bold">Location</p>
                  <p className="text-slate-700">Remote / Lagos, Nigeria</p>
                </div>
              </div>

              <div className=" mt-6">
                <h4>Connect with me</h4>
                <div className=" flex items-center gap-x-2 mt-2">
                  <Link href="">
                    <div className=" bg-black p-2.5 flex items-center justify-center rounded-lg">
                      <LuGithub className=" text-lg font-bold text-white"/>
                    </div>
                  </Link>
                  <Link href="">
                    <div className=" border-2 border-[#0A66C2] p-2 flex items-center justify-center rounded-lg">
                      <FaLinkedinIn className=" text-lg font-bold text-[#0A66C2]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" mt-16">
              <h3 className=" font-bold">What I'm Looking For</h3>
              <ul className=" mt-4 text-slate-700">
                <li className="relative pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['✓']">
                  Full-stack development roles (remote or hybrid)
                </li>

                <li className="relative my-3 pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['✓']">
                  Freelance projects with impact-driven teams
                </li>

                <li className="relative pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['✓']">
                  Technical consulting opportunities
                </li>

                <li className="relative my-3 pl-6 before:absolute before:left-0 before:text-blue-500 before:content-['✓']">
                  Open source collaborations
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex-1   p-7 rounded-2xl  w-full">
            <form action="" method="get" className=" w-full">
              <div>
                <label htmlFor="fullName" 
                  className=" font-bold text-base mb-2 block"
                >
                  Your Name *
                </label>
                <input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  className=" px-4 py-3 rounded-2xl border-2 text-base w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className=" my-5">
                <label htmlFor="email"
                  className=" font-bold text-base mb-2 block"
                >
                  Your Email *
                </label>
                <input 
                  type="email"
                  name="email" 
                  id="email" 
                  className=" px-4 py-3 rounded-2xl border-2 text-base w-full"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject"
                  className=" font-bold text-base mb-2 block"
                >
                  Subject *
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  className=" px-4 py-3 rounded-2xl border-2 text-base w-full"
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                />
              </div>
              
              <div className=" my-5">
                <label htmlFor="message"
                  className=" font-bold text-base mb-2 block" 
                >
                  Message *
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  className=" px-4 py-3 rounded-2xl border-2 text-base w-full h-28 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                >
                </textarea>
              </div>

              <button className=" flex items-center gap-4 w-full bg-blue-500 text-white rounded-2xl py-3 justify-center">
                <FiSend />
                Send Message
              </button>

              <div className=" flex items-center justify-center gap-4 mt-4">
                <FiMessageSquare />
                <p>
                  I typically respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
