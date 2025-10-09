import Sidebar from './components/Sidebar'
import ProjectGallery from './components/ProjectGallery'
import { projects } from './data/projects'
import './App.css'

const achievements = [
  'badges/elite-hacker.png',
  'badges/pixel-sec-guardian.png',
  'badges/js-master.png',
  'badges/api-alchemist.png',
]

export default function App() {
  return (
    <div className="app-shell" id="inicio">
      <Sidebar />

      <main className="main-content">
        <section className="hero">
          <div className="hero__text">
            <p className="hero__intro">Hi, I build secure full stack experiences.</p>
            <h1>
              I craft <span>pixel-perfect</span> journeys
              <br />
              with layered <span>defenses</span>.
            </h1>
            <p className="hero__description">
              Explore visual experiments, offensive and defensive security builds, and community-driven initiatives.
              Every section embraces pixel art — just drop your assets in the suggested folders.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projetos">
                Personal projects
              </a>
              <a className="button button--ghost" href="#contato">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__portrait">
            <div className="hero__portrait-frame">
              <span className="hero__portrait-label">Your portrait</span>
              <div className="hero__portrait-placeholder">
                <span>512x512</span>
              </div>
            </div>
            <p className="hero__portrait-note">
              Add artwork in <code>public/assets/pixel-art/portraits</code>
            </p>
          </div>
        </section>

        <section className="highlight-grid" aria-label="Highlights">
          <article className="highlight-card">
            <header>
              <h2>Current Role</h2>
              <span className="highlight-card__subtitle">LABORATORY OF COMPUTER SECURITY (LABSEC/UFSC)</span>
            </header>
            <div className="highlight-card__body">
              <div className="highlight-card__role">
                <strong>Software Engineer | Mar 2023 – Present</strong>
                <ul>
                  <li>
                  Developed and maintained core components of the <a href="https://www.gov.br/iti/pt-br/assuntos/icp-brasil" target="_blank" rel="noreferrer">
                  Gov.br
                </a> digital signature platform, enabling legally
                    valid electronic signatures for Brazilian citizens.
                  </li>
                  <li>
                    Engineered solutions for a high-traffic system processing 900k+ daily requests and over 38 million
                    issued digital certificates with high availability.
                  </li>
                  <li>
                    Designed a cloud-based cryptographic system that centralizes certificate management and supports
                    large-scale operations without physical tokens.
                  </li>
                  <li>
                    Implemented secure REST APIs for Hardware Security Module (HSM) integrations, protecting sensitive
                    cryptographic workflows.
                  </li>
                  <li>
                    Contributed full stack expertise to the federal “Medida Inteligente” mobile app using Flutter, C++,
                    and Java.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="highlight-card">
            <header>
              <h2>Skills</h2>
              <span className="highlight-card__subtitle">Full stack engineering &amp; security automation</span>
            </header>
            <div className="highlight-card__body highlight-card__body--stack">
              <ul className="skills-list">
                <li>
                  <strong>Key Technologies:</strong> Java, Spring Boot, Docker, Kafka, Python, Go, PostgreSQL
                </li>
                <li>
                  <strong>RPA &amp; Automation:</strong> UiPath (intermediate), Orchestrator, SQL Server, REST APIs
                </li>
                <li>
                  <strong>Programming:</strong> C++, Kotlin, JavaScript, HTML5, CSS3, Flutter
                </li>
                <li>
                  <strong>Frameworks &amp; Tools:</strong> Flask, React.js, Vue.js, Postman, CI/CD
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, MongoDB, MariaDB
                </li>
                <li>
                  <strong>Cloud &amp; DevOps:</strong> AWS, GCP, Azure, Scrum, Kanban
                </li>
                <li>
                  <strong>Other:</strong> Cryptography (ICP-Brasil), HSM, Cybersecurity, Software Testing &amp; Automation
                </li>
              </ul>
              <div className="pixel-art-slot">
                <span>Add custom badge in</span>
                <code>public/assets/pixel-art/decor</code>
              </div>
            </div>
          </article>
        </section>

        <section className="projects" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Project gallery</h2>
            <p>A curated selection of builds that blend engineering, security, and visual storytelling.</p>
          </div>
          <ProjectGallery items={projects} />
        </section>

        <section className="achievements" aria-labelledby="achievements-title">
          <div className="section-heading">
            <h2 id="achievements-title">Collectibles &amp; achievements</h2>
            <p>Drop your pixel badges in the folder below to highlight certifications and key milestones.</p>
          </div>
          <div className="achievement-board">
            {achievements.map((badge) => (
              <div key={badge} className="achievement-slot">
                <span className="achievement-slot__label">{badge}</span>
                <div className="achievement-slot__placeholder">160x160</div>
              </div>
            ))}
            <div className="achievement-slot achievement-slot--empty">
              <span className="achievement-slot__label">badges/new-badge.png</span>
              <div className="achievement-slot__placeholder">+</div>
            </div>
          </div>
        </section>

        <section className="lab" id="laboratorio" aria-labelledby="lab-title">
          <div className="section-heading">
            <h2 id="lab-title">Laboratory &amp; notes</h2>
            <p>Spaces dedicated to research, mentorship, and quantum computing initiatives.</p>
          </div>
          <div className="lab__grid">
            <article className="lab-card">
              <h3>LABORATORY OF ARTIFICIAL INTELLIGENCE AND ALGORITHMS (LIAA)</h3>
              <p>
                Member | 2023 – Present
                <br />• Volunteer developer for the KET quantum computing platform.
                <br />• Member of a quantum computing study group.
                <br />• Teaching Assistant for “Theory of Computation” (2024 – Present).
                <br />• Currently writing the paper “Combinatorial ranking algorithms for the general linear group” for{' '}
                <a href="https://latin2026.ufsc.br" target="_blank" rel="noreferrer">
                  LATIN 2026
                </a>
                .
              </p>
              <div className="lab-card__footer">
                <span className="lab-card__tag">Quantum Computing</span>
                <span className="lab-card__tag">Research</span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title">Contact</h2>
            <p>Ready to collaborate? Send the context and I will get back shortly.</p>
          </div>
          <div className="contact__content">
            <div className="contact__channels">
              <div className="contact__channel">
                <span className="contact__channel-label">Primary email</span>
                <a href="mailto:tiagofdesiqueira@gmail.com">tiagofdesiqueira@gmail.com</a>
              </div>
              <div className="contact__channel">

              </div>
            </div>
            <div className="contact__note">
              <p>
                Need a bespoke artwork for this area? Use the folder <code>public/assets/pixel-art/decor</code> to
                organize icons and backgrounds.
              </p>
              <button type="button" className="button button--primary">
                Open brief
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
