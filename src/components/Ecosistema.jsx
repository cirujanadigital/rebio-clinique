const NODES = [
  { tag: 'Visibilidad', title: 'Aparece cuando buscan', text: 'Cuando un paciente busca tratamiento GLP-1 en Punta del Este, REBIO Clinique aparece primero. En Google, en Maps y en los asistentes de IA.' },
  { tag: 'Primera impresión', title: 'Confianza antes del primer contacto', text: 'El paciente evalúa la clínica antes de escribir. Esta presencia digital transmite el mismo nivel que la consulta presencial.' },
  { tag: 'Sin fricción', title: 'Agendar en segundos', text: 'Sin formularios complejos. Sin llamadas para confirmar. El paciente agenda desde su celular, a cualquier hora.' },
  { tag: 'Menos ausencias', title: 'Recordatorios automáticos', text: 'El sistema recuerda al paciente su turno por WhatsApp. Menos ausencias, más consultas cumplidas, sin intervención del equipo.' },
  { tag: 'Reputación', title: 'Su trayectoria, visible', text: 'Formación, especialidad y resultados clínicos presentados de forma que generan autoridad antes de la primera consulta.' },
  { tag: 'Seguimiento', title: 'El paciente no desaparece', text: 'Comunicación continua entre consultas. El paciente se siente acompañado. La adherencia al tratamiento mejora.' },
  { tag: 'Velocidad', title: 'Carga instantánea', text: 'El sitio abre en menos de un segundo en cualquier celular. Cada segundo de espera es un paciente que se va.' },
  { tag: 'Inteligencia artificial', title: 'Presente donde preguntan', text: 'Cuando alguien le pregunta a ChatGPT o Google por tratamientos GLP-1 en Uruguay, REBIO Clinique es parte de la respuesta.' },
];

const STATS = [
  { num: '85', unit: '%', label: 'de pacientes investiga online\nantes de contactar una clínica' },
  { num: '3', unit: 'seg', label: 'tiene la clínica para generar\nconfianza en el paciente' },
  { num: '30', unit: '%', label: 'de turnos se pierden por falta\nde recordatorio automático' },
];

export default function Ecosistema() {
  return (
    <section id="ecosistema" aria-labelledby="ecosistema-title">
      <div className="section-inner">
        <div className="ecosistema-header reveal">
          <span className="label">Cómo trabaja REBIO Clinique</span>
          <h2 id="ecosistema-title">Más pacientes.<br />Menos tiempo perdido.</h2>
          <p>Cada parte del sistema está pensada para que usted se concentre en la consulta. El resto funciona solo.</p>
        </div>

        <div className="ecosistema-grid">
          {NODES.map((n, i) => (
            <article key={n.title} className={`eco-node reveal reveal-delay-${(i % 4) + 1}`}>
              <p className="eco-node-tag">{n.tag}</p>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
            </article>
          ))}
        </div>

        <div className="ecosistema-bottom reveal">
          {STATS.map((s) => (
            <div className="eco-stat" key={s.label}>
              <p className="eco-stat-num">{s.num}<span>{s.unit}</span></p>
              <p className="eco-stat-label">
                {s.label.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
