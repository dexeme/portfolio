import { useMemo, useState } from 'react'
import './ProjectGallery.css'

export default function ProjectGallery({ items }) {
  const initialState = useMemo(
    () =>
      items.reduce((acc, project) => {
        const key = project.slug ?? project.title
        acc[key] = 0
        return acc
      }, {}),
    [items]
  )

  const [activeIndices, setActiveIndices] = useState(initialState)
  const [lightbox, setLightbox] = useState(null)

  const handleNavigate = (projectKey, total, direction) => {
    setActiveIndices((prev) => {
      const current = prev[projectKey] ?? 0
      const nextIndex = (current + direction + total) % total
      return { ...prev, [projectKey]: nextIndex }
    })
  }

  const openLightbox = (project, imageIndex) => {
    setLightbox({ project, imageIndex })
  }

  const closeLightbox = () => setLightbox(null)

  return (
    <>
      <div className="project-gallery">
        {items.map((project) => {
          const key = project.slug ?? project.title
          const images = project.images ?? []
          const currentIndex = activeIndices[key] ?? 0
          const currentImage = images[currentIndex]

          return (
            <article key={project.title} className="project-card">
              <div className="project-card__media" aria-hidden={!currentImage}>
                {images.length > 0 ? (
                  <>
                    <button
                      type="button"
                      className="project-card__nav project-card__nav--prev"
                      onClick={() => handleNavigate(key, images.length, -1)}
                      aria-label={`Show previous image of ${project.title}`}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="project-card__nav project-card__nav--next"
                      onClick={() => handleNavigate(key, images.length, 1)}
                      aria-label={`Show next image of ${project.title}`}
                    >
                      ›
                    </button>
                    <img
                      src={currentImage}
                      alt={`${project.title} preview ${currentIndex + 1}`}
                      onClick={() => openLightbox(project, currentIndex)}
                    />
                    <div className="project-card__dots" role="tablist" aria-label={`${project.title} image selector`}>
                      {images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          className={`project-card__dot ${index === currentIndex ? 'is-active' : ''}`}
                          onClick={() => handleNavigate(key, images.length, index - currentIndex)}
                          aria-label={`Show image ${index + 1} of ${project.title}`}
                          aria-selected={index === currentIndex}
                          role="tab"
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="project-card__media-placeholder">Add screenshots to {key}</div>
                )}
              </div>
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
            </article>
          )
        })}
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.project.title} expanded screenshot`}>
          <div className="lightbox__backdrop" onClick={closeLightbox} />
          <div className="lightbox__content">
            <button type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Close screenshot">
              ×
            </button>
            <img
              src={lightbox.project.images[lightbox.imageIndex]}
              alt={`${lightbox.project.title} detailed view ${lightbox.imageIndex + 1}`}
            />
            <p>{lightbox.project.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
