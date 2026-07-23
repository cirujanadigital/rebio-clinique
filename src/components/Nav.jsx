import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/59899000000';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#beneficios', label: 'Tratamientos' },
    { href: '#herramientas', label: 'Herramientas' },
    { href: '#ecosistema', label: 'Protocolo' },
    { href: '#autoridad', label: 'Equipo' },
    { href: '#cta-final', label: 'Contacto' },
  ];

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <a href="#" className="nav-logo" aria-label="REBIO Clinique — inicio">
        <svg className="nav-logo-mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#2a1a14" />
          <path d="M8 16.5C8 16.5 11 10 16 10C21 10 24 16.5 24 16.5" stroke="#ccb6a2" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="19" r="3" stroke="#a8908a" strokeWidth="1.5" />
          <circle cx="16" cy="19" r="1" fill="#ccb6a2" />
        </svg>
        <span className="nav-logo-text">REBIO Clinique<span>.</span></span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href={WHATSAPP_URL} className="nav-cta" rel="noopener noreferrer" target="_blank">
        Agendar evaluación
      </a>

      <button
        className="nav-hamburger"
        aria-label="Menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
