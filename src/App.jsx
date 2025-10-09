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

const learningTracks = [
  { title: 'Malware reverse engineering', progress: 70 },
  { title: 'Pixel shaders criativos', progress: 45 },
  { title: 'Criptografia pós-quântica', progress: 20 },
]

export default function App() {
  return (
    <div className="app-shell" id="inicio">
      <Sidebar />

      <main className="main-content">
        <section className="hero">
          <div className="hero__text">
            <p className="hero__intro">Olá, sou um dev full stack focado em segurança.</p>
            <h1>
              Construo experiências <span>pixeladas</span>
              <br />
              com defesas em <span>camadas</span>.
            </h1>
            <p className="hero__description">
              Aqui você encontra meus experimentos visuais, projetos de segurança ofensiva/defensiva e
              iniciativas para comunidades. Todo o design foi pensado para receber artes em pixel art — é só colocar
              os arquivos nas pastas indicadas.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projetos">
                Projetos pessoais
              </a>
              <a className="button button--ghost" href="#contato">
                Falar comigo
              </a>
            </div>
          </div>
          <div className="hero__portrait">
            <div className="hero__portrait-frame">
              <span className="hero__portrait-label">Sua foto aqui</span>
              <div className="hero__portrait-placeholder">
                <span>512x512</span>
              </div>
            </div>
            <p className="hero__portrait-note">
              Coloque a arte em <code>public/assets/pixel-art/portraits</code>
            </p>
          </div>
        </section>

        <section className="highlight-grid" aria-label="Destaques">
          <article className="highlight-card">
            <header>
              <h2>Contribuições recentes</h2>
              <span className="highlight-card__subtitle">2024 · Segurança &amp; Dev Experience</span>
            </header>
            <div className="highlight-card__body">
              <div className="highlight-card__heatmap">
                <span className="heatmap-line" aria-hidden="true" />
                <span className="heatmap-line" aria-hidden="true" />
                <span className="heatmap-line" aria-hidden="true" />
                <span className="heatmap-line" aria-hidden="true" />
              </div>
              <ul className="highlight-card__summary">
                <li>
                  <strong>58</strong>
                  <span>Patches de segurança</span>
                </li>
                <li>
                  <strong>12</strong>
                  <span>Bibliotecas mantidas</span>
                </li>
                <li>
                  <strong>4</strong>
                  <span>Workshops ministrados</span>
                </li>
              </ul>
            </div>
          </article>

          <article className="highlight-card">
            <header>
              <h2>Stack preferida</h2>
              <span className="highlight-card__subtitle">Frontend, backend e nuvem</span>
            </header>
            <div className="highlight-card__body highlight-card__body--stack">
              <ul className="chip-list">
                {['TypeScript', 'Go', 'Rust', 'React', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="pixel-art-slot">
                <span>Adicionar badge em</span>
                <code>public/assets/pixel-art/decor</code>
              </div>
            </div>
          </article>

          <article className="highlight-card">
            <header>
              <h2>Trilhas em progresso</h2>
              <span className="highlight-card__subtitle">Estudos e experimentos</span>
            </header>
            <div className="highlight-card__body">
              <ul className="progress-list">
                {learningTracks.map((track) => (
                  <li key={track.title}>
                    <div className="progress-list__label">{track.title}</div>
                    <div className="progress-list__bar" role="presentation">
                      <span style={{ width: `${track.progress}%` }} aria-hidden="true" />
                    </div>
                    <span className="progress-list__value">{track.progress}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="achievements" aria-labelledby="achievements-title">
          <div className="section-heading">
            <h2 id="achievements-title">Colecionáveis &amp; conquistas</h2>
            <p>Adicione badges pixelados na pasta indicada para ilustrar certificações e marcos importantes.</p>
          </div>
          <div className="achievement-board">
            {achievements.map((badge) => (
              <div key={badge} className="achievement-slot">
                <span className="achievement-slot__label">{badge}</span>
                <div className="achievement-slot__placeholder">160x160</div>
              </div>
            ))}
            <div className="achievement-slot achievement-slot--empty">
              <span className="achievement-slot__label">badges/novo-badge.png</span>
              <div className="achievement-slot__placeholder">+</div>
            </div>
          </div>
        </section>

        <section className="projects" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Galeria de projetos</h2>
            <p>Uma coleção curada dos trabalhos que misturam engenharia, segurança e narrativa visual.</p>
          </div>
          <ProjectGallery items={projects} />
        </section>

        <section className="lab" id="laboratorio" aria-labelledby="lab-title">
          <div className="section-heading">
            <h2 id="lab-title">Laboratório &amp; notas</h2>
            <p>Um espaço para experimentos, artigos e ideias em andamento.</p>
          </div>
          <div className="lab__grid">
            <article className="lab-card">
              <h3>Playbooks de resposta</h3>
              <p>
                Protótipos de fluxos automatizados para lidar com incidentes complexos. Inspirado em jogos táticos,
                cada passo é apresentado como uma fase.
              </p>
              <div className="lab-card__footer">
                <span className="lab-card__tag">Em design</span>
                <span className="lab-card__tag">Security Ops</span>
              </div>
            </article>
            <article className="lab-card">
              <h3>Pixel Sec Patterns</h3>
              <p>
                Biblioteca visual de componentes que unem acessibilidade, estilo retrô e dicas de segurança embutidas.
              </p>
              <div className="lab-card__footer">
                <span className="lab-card__tag">UI Kit</span>
                <span className="lab-card__tag">Open Source</span>
              </div>
            </article>
            <article className="lab-card">
              <h3>Podcast: Bits Blindados</h3>
              <p>
                Roteiros para uma série curta sobre segurança digital para devs, com trilha lo-fi e estética de arcade.
              </p>
              <div className="lab-card__footer">
                <span className="lab-card__tag">Conteúdo</span>
                <span className="lab-card__tag">Em breve</span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title">Contato</h2>
            <p>Pronto para colaborar? Envie uma mensagem com o contexto e eu retorno rapidinho.</p>
          </div>
          <div className="contact__content">
            <div className="contact__channels">
              <div className="contact__channel">
                <span className="contact__channel-label">Email principal</span>
                <a href="mailto:tiagofdesiqueira@gmail.com">tiagofdesiqueira@gmail.com</a>
              </div>
              <div className="contact__channel">
                <span className="contact__channel-label">PGP</span>
                <code>pgp://chave-publica.asc</code>
              </div>
            </div>
            <div className="contact__note">
              <p>
                Precisa de uma arte específica para esta seção? Use a pasta{' '}
                <code>public/assets/pixel-art/decor</code> para organizar ícones e fundos personalizados.
              </p>
              <button type="button" className="button button--primary">
                Abrir briefing
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
