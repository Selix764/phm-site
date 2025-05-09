import { PageHero } from "@/components/page-hero"
import { Projects } from "@/components/projects"
import { YouTubeLatestVideos } from "@/components/youtube-latest-videos"

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Proiectele"
        subtitle="noastre"
        description="Explorați o selecție din proiectele noastre recente de home cinema, audio și smart home."
      />
      <Projects />
      <div className="px-5 md:px-[120px] max-w-[1400px] mx-auto bg-[#0A0A0A]">
        <YouTubeLatestVideos />
      </div>
    </>
  )
}
