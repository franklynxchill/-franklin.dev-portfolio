import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Hero />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
