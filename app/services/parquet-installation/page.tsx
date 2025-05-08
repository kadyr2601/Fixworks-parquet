import InstallationHero from "@/components/services/parquet-installation/hero"
import PatternShowcase from "@/components/services/parquet-installation/pattern-showcase"
import PricingTable from "@/components/services/parquet-installation/pricing-table"
import InstallationFAQ from "@/components/services/parquet-installation/installation-faq"

export default function ParquetInstallationPage() {
  return (
    <main className="bg-black text-white">
      <InstallationHero />
      <PatternShowcase />
      <PricingTable />
      <InstallationFAQ />
    </main>
  )
}
