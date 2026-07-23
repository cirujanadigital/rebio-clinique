const WHATSAPP_URL = 'https://wa.me/59899000000';

export default function Hero() {
  return (
    <header id="hero" role="banner">
      <img
        src="/img/hero-clinica.webp"
        alt="Interior de REBIO Clinique — sala clínica premium con ventanal panorámico al mar de Punta del Este"
        className="hero-bg"
        width="1920"
        height="1080"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="hero-bg-overlay" aria-hidden="true" />

      <div className="hero-badge" role="status">
        <span className="hero-badge-dot" aria-hidden="true" />
        <span className="hero-badge-text">Evaluaciones disponibles</span>
      </div>

      <div className="hero-content">
        <div className="hero-content-main">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden="true" />
            <span className="label">Punta del Este · Uruguay</span>
          </div>
          <h1 className="hero-headline" id="hero-h1">
            Medicina metabólica<br />de <em>nueva generación.</em>
          </h1>
          <p className="hero-subheadline">
            Tratamientos GLP-1 con protocolo clínico integral. Control de obesidad, resistencia
            insulínica y metabolismo alterado — con seguimiento médico real, nutrición personalizada
            y tecnología de precisión.
          </p>
          <div className="hero-actions">
            <a href="#cta-final" className="btn-primary">
              Agendar evaluación
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#beneficios" className="btn-secondary">Ver tratamientos</a>
            <a href={WHATSAPP_URL} className="btn-whatsapp" rel="noopener noreferrer" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.057 23.428a.5.5 0 00.6.6l5.618-1.48A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.853-.6-5.408-1.625l-.387-.245-4.013 1.055 1.066-3.935-.252-.397A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-stats-sidebar" aria-label="Métricas clínicas">
          <div className="hero-stat-item">
            <p className="hero-stat-number">85<span>%</span></p>
            <p className="hero-stat-label">mejora metabólica<br />documentada</p>
          </div>
          <div className="hero-stat-item">
            <p className="hero-stat-number">12<span>+</span></p>
            <p className="hero-stat-label">semanas de protocolo<br />supervisado</p>
          </div>
          <div className="hero-stat-item">
            <p className="hero-stat-number">3<span>×</span></p>
            <p className="hero-stat-label">mayor adherencia con<br />seguimiento digital</p>
          </div>
        </div>
      </div>

      <a href="#beneficios" className="hero-scroll" aria-label="Ver tratamientos">
        <span className="hero-scroll-label">scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </header>
  );
}
