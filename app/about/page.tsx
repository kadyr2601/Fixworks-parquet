import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutExpertise from "@/components/about/about-expertise"
import AboutPhilosophy from "@/components/about/about-philosophy"

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutExpertise />
      <AboutPhilosophy />
    </main>
  )
}
