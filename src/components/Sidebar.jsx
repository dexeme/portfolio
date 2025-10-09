import './Sidebar.css'

const quickLinks = [
  { label: 'Visão geral', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Laboratório', href: '#laboratorio' },
  { label: 'Contato', href: '#contato' },
]

const socialLinks = [
  { label: 'GitHub', handle: '@dexeme', href: 'https://github.com/' },
  { label: 'LinkedIn', handle: 'linkedin.com/in/dexe', href: 'https://www.linkedin.com/' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span className="sidebar__logo-icon">{'</>'}</span>
        <div className="sidebar__logo-text">
          <strong>Tiago Siqueira</strong>
          <span>Full Stack &amp; Security</span>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Navegação principal">
        <h2 className="sidebar__section-title">Mapa</h2>
        <ul>
          {quickLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__divider" aria-hidden="true" />

      <section className="sidebar__info" aria-labelledby="status-title">
        <h2 id="status-title" className="sidebar__section-title">
          Status
        </h2>
        <p className="sidebar__status">
          <span className="status-dot" />
          Disponível para freelas selecionados
        </p>
      </section>

      <section className="sidebar__social" aria-label="Redes sociais">
        <h2 className="sidebar__section-title">Redes</h2>
        <ul>
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <span className="sidebar__social-label">{item.label}</span>
                <span className="sidebar__social-handle">{item.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
