function Stars() {
  return (
    <div className="testimonio-stars" role="img" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 1l1.5 4h4l-3.5 2.5 1.5 4L7 9 3.5 11.5l1.5-4L1.5 5h4z" />
        </svg>
      ))}
    </div>
  );
}

const TESTIMONIOS = [
  {
    text: 'Después de 3 años con resistencia insulínica sin resolver, en 8 semanas de protocolo GLP-1 bajé 11 kg y mis análisis volvieron a parámetros normales. El seguimiento fue completamente diferente a lo que había experimentado antes.',
    author: 'M.B.',
    meta: 'Paciente · 47 años · Punta del Este',
  },
  {
    text: 'Lo que diferencia a REBIO Clinique es la precisión. No es una clínica de moda. Es medicina real con seguimiento real. Cada consulta tiene datos, tiene criterio y tiene un plan.',
    author: 'R.C.',
    meta: 'Paciente · 52 años · Montevideo',
  },
];

export default function Autoridad() {
  return (
    <section id="autoridad" aria-labelledby="autoridad-title">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="label">Equipo clínico</span>
          <h2 id="autoridad-title">
            Médicos. No coaches.
            <br />
            No plataformas.
          </h2>
          <p>
            Cada tratamiento es supervisado por médicos especializados. El protocolo es clínico. El
            seguimiento es real.
          </p>
        </div>

        <div className="autoridad-layout">
          <div className="autoridad-profile reveal">
            <div className="autoridad-avatar" aria-hidden="true">
              <span className="autoridad-avatar-initial">D</span>
            </div>
            <h3 className="autoridad-name">Dra. [Nombre del médico]</h3>
            <p className="autoridad-role">Especialista en Medicina Metabólica y Obesología</p>
            <p className="autoridad-bio">
              Médica especializada en endocrinología y metabolismo con más de 12 años de práctica
              clínica. Formación en protocolos GLP-1 en centros de referencia internacional. Miembro
              activo de la Sociedad Uruguaya de Endocrinología y Metabolismo.
            </p>
            <div className="autoridad-certs">
              {[
                'GLP-1',
                'Obesología Clínica',
                'Endocrinología',
                'Medicina Metabólica',
                'Nutrición Clínica',
              ].map((c) => (
                <span className="cert-tag" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="testimonios reveal reveal-delay-2">
            {TESTIMONIOS.map((t) => (
              <article className="testimonio-card" key={t.author}>
                <Stars />
                <blockquote className="testimonio-text">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="testimonio-author">
                  <strong>{t.author}</strong>
                  <span>{t.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
