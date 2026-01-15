import FeatureSection from "../components/FeatureSection";

function ProjectSection() {
  return (
    <div>
      <main className="py-24 md:pt-32 bg-surface" id="projects">
        <div className="max-w-2xl mx-auto text-center px-5 md:p-0 ">
          <h2 className="font-medium text-2xl md:text-4xl mb-5 text-white">Featured Projects</h2>
          <p className="text-text-muted">
            Real-world applications demonstrating problem-solving, technical expertise, and measurable business impact
          </p>
        </div>
        <section className=" px-5 md:p-0 ">
          {/* <CardSection /> */}
          <FeatureSection />
        </section>
      </main>
    </div>
  )
}

export default ProjectSection