import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactează-"
        subtitle="ne"
        description="Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să găsești soluția perfectă pentru casa ta."
      />
      <Contact />
    </>
  )
}
