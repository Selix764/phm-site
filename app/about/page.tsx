import { PageHero } from "@/components/page-hero"
import { AboutUs } from "@/components/about-us"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Despre"
        subtitle="noi"
        description="Suntem o echipă de specialiști pasionați de tehnologie, dedicați creării de experiențe audio-video excepționale pentru casa ta."
      />
      <AboutUs />
    </>
  )
}
