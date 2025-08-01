import { type Translations } from "../utils/translations"

type ProjectCardProps = {
  t: Translations
  title: string
  description: string
  technologies: string[]
  imageSrc: string
  imageAlt: string
  githubUrl?: string
  youtubeUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  t,
  title,
  description,
  technologies,
  imageSrc,
  imageAlt,
  githubUrl,
  youtubeUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>{t.technologies}:</strong> {technologies.join(", ")}</p>
        <div className="project-links">
          {githubUrl && <a href={githubUrl} target="_blank">{t.viewOnGithub}</a>}
          {youtubeUrl && <a href={youtubeUrl} target="_blank">{t.viewOnYoutube}</a>}
          {liveUrl && <a href={liveUrl} target="_blank">{t.viewOnline}</a>}
        </div>
      </div>
    </div>
  )
}
