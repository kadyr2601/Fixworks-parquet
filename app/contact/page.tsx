import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactMap from "@/components/contact/contact-map"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  )
}
