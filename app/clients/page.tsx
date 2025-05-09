import { PageHero } from "@/components/page-hero"
import { ClientsGrid } from "@/components/clients-grid"

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Clienții"
        subtitle="noștri"
        description="Am avut plăcerea să colaborăm cu branduri de renume și organizații din diverse industrii."
      />
      <ClientsGrid />
    </>
  )
}
