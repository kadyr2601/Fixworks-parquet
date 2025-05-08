import ParquetSandingHero from "@/components/services/parquet-sanding/hero"
import ServiceDescription from "@/components/services/parquet-sanding/service-description"
import BeforeAfterGallery from "@/components/services/parquet-sanding/before-after-gallery"
import PricingSection from "@/components/services/parquet-sanding/pricing-section"
import ServiceFAQ from "@/components/services/parquet-sanding/service-faq"

export default function ParquetSandingPage() {
  return (
    <main className="bg-black text-white">
      <ParquetSandingHero />
      <ServiceDescription />
      <BeforeAfterGallery />
      <PricingSection />
      <ServiceFAQ />
    </main>
  )
}
