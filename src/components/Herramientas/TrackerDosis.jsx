import { useState } from 'react';

const WEEKS = Array.from({ length: 12 }, (_, i) => {
  const week = i + 1;
  const dose = week <= 4 ? '0.25 mg' : week <= 8 ? '0.5 mg' : '1.0 mg';
  const applied = week <= 5; // mock: first 5 weeks already "done"
  return {
    week,
    dose,
    applied,
    note:
      week === 1
        ? 'Inicio de protocolo. Tolerancia adecuada.'
        : week === 5
        ? 'Control de laboratorio antes de subir dosis.'
        : week === 9
        ? 'Ajuste a dosis de mantenimiento.'
        : 'Sin novedades reportadas.',
    nextAppointment: applied ? null : `Semana ${week} · consultorio`,
  };
});

export default function TrackerDosis() {
  const [selected, setSelected] = useState(null);
  const active = WEEKS.find((w) => w.week === selected);

  return (
    <div className="tool-card tool-card-wide">
      <div className="tool-card-header">
        <span className="tool-tag">Herramienta 3</span>
        <h3>Seguimiento de protocolo</h3>
        <p>Vista de ejemplo — así ve su progreso un paciente real.</p>
      </div>

      <div className="tracker-grid" role="list">
        {WEEKS.map((w) => (
          <button
            type="button"
            key={w.week}
            role="listitem"
            className={`tracker-cell ${w.applied ? 'tracker-cell-done' : ''} ${selected === w.week ? 'tracker-cell-active' : ''}`}
            onClick={() => setSelected(w.week === selected ? null : w.week)}
            aria-pressed={selected === w.week}
          >
            <span className="tracker-cell-week">S{w.week}</span>
            <span className="tracker-cell-dose">{w.dose}</span>
            {w.applied && <span className="tracker-cell-check" aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>

      {active && (
        <div className="tracker-detail">
          <p className="tracker-detail-title">Semana {active.week} · dosis {active.dose}</p>
          <p className="tracker-detail-note">{active.note}</p>
          {active.nextAppointment && (
            <p className="tracker-detail-next">Próxima cita: {active.nextAppointment}</p>
          )}
        </div>
      )}

      <p className="tool-disclaimer">Datos de ejemplo — no corresponden a un paciente real.</p>
    </div>
  );
}
