import HeroParallax from "@/components/hero-parallax"
import ServiceCard from "@/components/service-card"
import ImmersiveGallery from "@/components/immersive-gallery"
import TestimonialSlider from "@/components/testimonial-slider"
import AboutSection from "@/components/about-section"
import ClientLogosBanner from "@/components/client-logos-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <HeroParallax />

      {/* About Section - Replaced with new AboutSection */}
      <AboutSection />

      {/* Services Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Exceptional Parquet Solutions</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              We offer comprehensive parquet flooring services tailored to meet the unique needs of Dubai's most
              discerning clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Installation"
              description="Bespoke parquet flooring installation with precision and artistry for your unique space."
              icon="Wand2"
              image="/luxury-parquet-flooring.png"
            />
            <ServiceCard
              title="Restoration & Repair"
              description="Expert restoration of vintage and damaged parquet flooring to its original splendor."
              icon="Hammer"
              image="/parquet-restoration.png"
            />
            <ServiceCard
              title="Maintenance"
              description="Professional maintenance services to preserve the beauty and longevity of your parquet floors."
              icon="Sparkles"
              image="/parquet-floor-maintenance.png"
            />
            <ServiceCard
              title="Consultation"
              description="Expert advice on wood selection, patterns, and finishes to achieve your desired aesthetic."
              icon="Lightbulb"
              image="/interior-design-flooring-consult.png"
            />
            <ServiceCard
              title="Custom Designs"
              description="Create unique patterns and inlays that reflect your personal style and enhance your space."
              icon="Palette"
              image="/custom-parquet-floor.png"
            />
            <ServiceCard
              title="Commercial Solutions"
              description="Specialized parquet flooring solutions for hotels, offices, and retail spaces in Dubai."
              icon="Building"
              image="/luxury-hotel-lobby-parquet.png"
            />
          </div>
        </div>
      </section>

      {/* Client Logos Banner */}
      <ClientLogosBanner />

      {/* Gallery Section */}
      <ImmersiveGallery />

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          </div>

          <TestimonialSlider />
        </div>
      </section>
    </main>
  )
}
