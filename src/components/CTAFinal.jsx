const WHATSAPP_URL = 'https://wa.me/59899000000';

export default function CTAFinal() {
  return (
    <section id="cta-final" aria-labelledby="cta-final-title">
      <div className="section-inner">
        <div className="cta-final-inner">
          <span className="label">Primeros pasos</span>
          <h2 id="cta-final-title">
            El control metabólico<br />empieza con<br />
            <em style={{ fontStyle: 'italic', color: 'var(--teal-light)' }}>una evaluación.</em>
          </h2>
          <p>
            Sin compromiso. Sin protocolo genérico. La primera consulta es una evaluación médica
            real donde entendemos su situación, sus objetivos y si el tratamiento GLP-1 es la
            indicación correcta para usted.
          </p>
          <div className="cta-actions">
            <a href={WHATSAPP_URL} className="btn-primary-light" rel="noopener noreferrer" target="_blank">
              Agendar evaluación →
            </a>
            <a href="#autoridad" className="btn-outline-light">Conocer el equipo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
