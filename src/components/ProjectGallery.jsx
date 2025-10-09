import './ProjectGallery.css'

export default function ProjectGallery({ items }) {
  return (
    <div className="project-gallery">
      {items.map((project) => (
        <article key={project.title} className="project-card">
          <header className="project-card__header">
            <span className="project-card__year">{project.year}</span>
            <h3>{project.title}</h3>
          </header>
          <p className="project-card__description">{project.description}</p>
          <ul className="project-card__stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <button type="button" className="project-card__cta">
            Ver detalhes
          </button>
        </article>
      ))}
    </div>
  )
}
