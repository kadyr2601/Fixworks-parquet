import type { Metadata } from "next"
import ParquetCleaningHero from "@/components/services/parquet-cleaning/hero"
import ProblemSolutionGallery from "@/components/services/parquet-cleaning/problem-solution-gallery"
import TechnologyShowcase from "@/components/services/parquet-cleaning/technology-showcase"

export const metadata: Metadata = {
  title: "Premium Parquet Cleaning Services | Dubai Parquet",
  description:
    "Experience the science of immaculate parquet with our advanced cleaning technology. Discover the microscopic difference in your luxury floors.",
}

export default function ParquetCleaningPage() {
  return (
    <main className="min-h-screen bg-black">
      <ParquetCleaningHero />
      <ProblemSolutionGallery />
      <TechnologyShowcase />
    </main>
  )
}
