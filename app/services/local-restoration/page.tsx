import LocalRestorationHero from "@/components/services/local-restoration/hero"
import RestorationProcess from "@/components/services/local-restoration/restoration-process"
import DamageTypeShowcase from "@/components/services/local-restoration/damage-type-showcase"
import RestorationPricing from "@/components/services/local-restoration/restoration-pricing"
import BeforeAfterGallery from "@/components/services/local-restoration/before-after-gallery"
import RestorationFAQ from "@/components/services/local-restoration/restoration-faq"

export const metadata = {
  title: "Local Parquet Restoration | DubaiParquet",
  description:
    "Expert local parquet restoration services in Dubai. Specialized repair for water damage, scratches, burns, and stains without replacing the entire floor.",
}

export default function LocalRestorationPage() {
  return (
    <main className="pt-20">
      <LocalRestorationHero />
      <DamageTypeShowcase />
      <RestorationProcess />
      <BeforeAfterGallery />
      <RestorationPricing />
      <RestorationFAQ />
    </main>
  )
}
