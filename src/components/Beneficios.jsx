const items = [
  {
    title: 'Control del apetito',
    desc: 'Los agonistas GLP-1 actúan directamente sobre el centro de saciedad. Reducción del 20–35% en ingesta calórica desde la primera semana.',
    icon: (
      <>
        <path d="M22 8c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14S29.732 8 22 8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 14v8l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Reducción de peso sostenida',
    desc: 'No es una dieta. Es una reprogramación metabólica. Reducciones de 8–15% del peso corporal con adherencia documentada a los 12 meses.',
    featured: true,
    icon: (
      <>
        <path d="M8 34l8-10 8 6 12-18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </>
    ),
  },
  {
    title: 'Mejora metabólica integral',
    desc: 'Resistencia insulínica, glucemia, perfil lipídico y presión arterial. El GLP-1 actúa en múltiples ejes metabólicos al mismo tiempo.',
    icon: (
      <>
        <rect x="10" y="14" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 22h12M16 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 30v4M26 30v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Seguimiento médico real',
    desc: 'Consultas periódicas, laboratorio, ajuste de protocolo y disponibilidad directa. Sin call center. Médico de cabecera, no plataforma.',
    icon: (
      <>
        <circle cx="22" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 20l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Nutrición personalizada',
    desc: 'El fármaco es un componente. La nutrición es el sistema. Protocolo adaptado al metabolismo, ritmo de vida y objetivos de cada paciente.',
    icon: (
      <>
        <path d="M22 8l3.09 6.26L32 15.27l-5 4.87 1.18 6.86L22 23.77l-6.18 3.23L17 20.14 12 15.27l6.91-1.01L22 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Monitoreo continuo',
    desc: 'Panel de seguimiento con indicadores clave: peso, glucemia, adherencia, bienestar. Datos que guían las decisiones clínicas en cada consulta.',
    icon: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="24" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="24" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="24" y="24" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="label">Protocolo clínico</span>
          <h2 id="beneficios-title">Cada tratamiento,<br />con evidencia detrás.</h2>
          <p>
            Los agonistas GLP-1 son la intervención metabólica con mayor evidencia clínica de la
            última década. Su eficacia depende del protocolo, el seguimiento y la individualización.
          </p>
        </div>
        <div className="benefits-grid">
          {items.map((item, i) => (
            <article
              key={item.title}
              className={`benefit-card ${item.featured ? 'benefit-card-featured' : ''} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <svg className="benefit-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                {item.icon}
              </svg>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
