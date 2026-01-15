import CardSection from "../components/CardSection";
import FeatureSection from "../components/FeatureSection";


export default function page() {
  return (
    <div>
      <main className="py-32 ">
        <div className="max-w-2xl mx-auto text-center px-5 md:p-0 ">
          <h2 className="font-medium text-2xl mb-3">Featured Projects</h2>
          <p className="text-slate-700">
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
