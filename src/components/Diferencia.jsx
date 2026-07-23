const BAD = [
  { strong: 'No aparece en Google.', text: 'El paciente busca un especialista en GLP-1 cerca y encuentra a la competencia.' },
  { strong: 'Sitio genérico o desactualizado.', text: 'El paciente no confía. No agenda. Se va sin dejar rastro.' },
  { strong: 'Sin recordatorios.', text: 'El 30% de los turnos no se cumple. Hora perdida, ingreso perdido.' },
  { strong: 'Invisible para la IA.', text: 'ChatGPT recomienda otra clínica. Esa oportunidad ya no vuelve.' },
  { strong: 'Sin recepcionista digital.', text: 'Consultas fuera de horario no respondidas. Pacientes que eligen otro médico.' },
];

const GOOD = [
  { strong: 'Primera posición en búsquedas locales.', text: 'Google Maps, búsqueda orgánica y asistentes de IA muestran la clínica primero.' },
  { strong: 'Presencia que genera confianza.', text: 'En los primeros tres segundos el paciente siente que está en el lugar correcto.' },
  { strong: 'Recordatorios automáticos por WhatsApp.', text: 'Los turnos se cumplen. La agenda se protege sin esfuerzo del equipo.' },
  { strong: 'Presente en la IA.', text: 'ChatGPT, Gemini y Google mencionan la clínica cuando alguien pregunta por GLP-1 en Uruguay.' },
  { strong: 'Atención inicial 24/7.', text: 'El paciente recibe respuesta fuera de horario. Ninguna consulta se pierde por demora.' },
];

function CrossIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Diferencia() {
  return (
    <section id="diferencia" aria-labelledby="diferencia-title">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="label">La diferencia importa</span>
          <h2 id="diferencia-title">La mayoría de las clínicas<br />pierde pacientes en silencio.</h2>
          <p>
            No porque el médico sea malo. Sino porque el paciente no los encuentra, no confía en lo
            que ve, o no sabe cómo contactarlos. Eso es exactamente lo que REBIO Clinique resuelve.
          </p>
        </div>

        <div className="diferencia-layout">
          <div className="diferencia-col diferencia-col-bad reveal">
            <h3>Sin presencia digital</h3>
            {BAD.map((item) => (
              <div className="diferencia-item" key={item.strong}>
                <span className="diff-icon diff-icon-bad" aria-hidden="true"><CrossIcon /></span>
                <p className="diferencia-item-text"><strong>{item.strong}</strong> {item.text}</p>
              </div>
            ))}
          </div>

          <div className="diferencia-col diferencia-col-good reveal reveal-delay-2">
            <h3>Con REBIO Clinique <span>activo</span></h3>
            {GOOD.map((item) => (
              <div className="diferencia-item" key={item.strong}>
                <span className="diff-icon diff-icon-good" aria-hidden="true"><CheckIcon /></span>
                <p className="diferencia-item-text"><strong>{item.strong}</strong> {item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
