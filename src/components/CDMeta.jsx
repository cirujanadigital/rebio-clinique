const SERVICIOS = [
  { nombre: 'Sistema de Activación Digital', precio: '$400 USD', desc: 'Google, web médica y WhatsApp listos en 7 días.' },
  { nombre: 'Landing Page Médica', precio: 'desde $250 USD', desc: 'Una página que convierte búsquedas en consultas.' },
  { nombre: 'Sitio Web Corporativo', precio: 'desde $750 USD', desc: 'Para clínicas o grupos médicos con mayor alcance.' },
  { nombre: 'Presencia en IA', precio: 'desde $100 USD', desc: 'Que ChatGPT y Google recomienden su clínica primero.' },
  { nombre: 'Sistema Anti Ausencias', precio: '$250 + $85/mes', desc: 'Recordatorios automáticos por WhatsApp. Menos turnos perdidos.' },
  { nombre: 'Recepcionista Virtual', precio: '$250 + $50/mes', desc: 'Atención inicial 24/7. Responde, agenda y deriva automáticamente.' },
];

export default function CDMeta() {
  return (
    <section id="cd-meta" aria-labelledby="cd-meta-title">
      <div className="section-inner">
        <div className="cd-meta-layout">
          <div className="cd-meta-content reveal">
            <span className="label">Para médicos y clínicas</span>
            <h2 id="cd-meta-title">Su clínica también puede tener una presencia así.</h2>
            <p>
              Esta web no es un diseño genérico. Es una <strong>presencia digital médica construida
              para captar pacientes</strong>: aparece en Google, genera confianza desde el primer
              segundo y convierte visitas en consultas.
            </p>
            <p>
              Fue diseñada sin atajos: <strong>carga instantánea, visible en los asistentes de IA,
              adaptada a cualquier celular</strong> y con todos los elementos que el paciente moderno
              necesita para elegir un médico.
            </p>
            <p>Si esta experiencia le generó algo, puede tenerla para su especialidad, en su ciudad, con su identidad.</p>

            <div className="cd-meta-actions">
              <a href="https://cirujanadigital.com/diagnostico/" className="btn-primary" rel="noopener noreferrer" target="_blank">
                Solicitar diagnóstico gratuito
              </a>
              <a href="https://cirujanadigital.com/servicios/" className="btn-secondary" rel="noopener noreferrer" target="_blank">
                Ver servicios
              </a>
            </div>

            <div className="cd-firma">
              <div className="cd-firma-logo" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12.5C6 12.5 8.25 8 12 8C15.75 8 18 12.5 18 12.5" stroke="#ccb6a2" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="12" cy="15" r="2.5" stroke="#a8908a" strokeWidth="1.4" />
                  <circle cx="12" cy="15" r="0.8" fill="#ccb6a2" />
                </svg>
              </div>
              <div className="cd-firma-info">
                <p className="cd-firma-by">Diseñado por</p>
                <p className="cd-firma-name">Yulia Monti · Cirujana Digital</p>
              </div>
            </div>
          </div>

          <div className="cd-servicios-grid reveal reveal-delay-2">
            {SERVICIOS.map((s) => (
              <div className="cd-servicio-card" key={s.nombre}>
                <p className="cd-servicio-nombre">{s.nombre}</p>
                <p className="cd-servicio-precio">{s.precio}</p>
                <p className="cd-servicio-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
