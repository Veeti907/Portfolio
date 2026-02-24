import './Projektit.css'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './EtusivuFooter'

const projects = [
  {
    title: 'Pyöräilytapahtuma',
    description:
      'Täysiverinen tapahtumasovellus, jossa käyttäjät voivat rekisteröityä ja kirjautua sisään. Admin voi luoda ja hallita pyöräilytapahtumia.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    image: '/portfolio-projekti.png',
    demoLink: '#',
    githubLink: 'https://github.com/Veeti907/PHP-nayttotyo/tree/master',
  },
  {
    title: 'Portfolio-sivusto',
    description:
      'Henkilökohtainen portfolio, jossa esittelen taitoni, projektini ja yhteystietoni modernilla ja responsiivisella tavalla.',
    tech: ['React', 'TypeScript', 'CSS'],
    image: '/portfolio-projekti2.png',
    demoLink: '#',
    githubLink: '#',
  },
]

export default function Projektit() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  const closeModal = () => {
  setIsClosing(true)

  setTimeout(() => {
    setSelectedImage(null)
    setIsClosing(false)
  }, 300) // sama kuin CSS animaation kesto
}

  // ESC sulkee kuvan
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }

  if (selectedImage) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEsc)
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEsc)
  }
}, [selectedImage])


  return (
    <section className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projektit</h1>
        <p className="projects-subtitle">
          Valikoituja projekteja, jotka esittelevät osaamistani ja
          ohjelmistokehitystaitojani.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* IMAGE */}
              <div
                className="project-image"
                onClick={() => setSelectedImage(project.image)}
              >
                <img src={project.image} alt={project.title} />
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span className="tech-badge" key={i}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.demoLink}
                    className="project-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Katso projekti
                  </a>

                  <a
                    href={project.githubLink}
                    className="project-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="btn-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* 🔍 IMAGE MODAL */}
{selectedImage && (
  <div
    className={`image-modal ${isClosing ? 'closing' : 'opening'}`}
    onClick={closeModal}
  >
    <button
      className="modal-close"
      onClick={closeModal}
      aria-label="Sulje kuva"
    >
      ✕
    </button>

    <img
      src={selectedImage}
      alt="Projektikuva"
      className="image-modal-content"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </section>
  )
}
