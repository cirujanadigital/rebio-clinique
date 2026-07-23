import CalculadoraIMC from './CalculadoraIMC.jsx';
import SimuladorElegibilidad from './SimuladorElegibilidad.jsx';
import TrackerDosis from './TrackerDosis.jsx';

export default function Herramientas() {
  return (
    <section id="herramientas" aria-labelledby="herramientas-title">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="label">Pruébelo usted mismo</span>
          <h2 id="herramientas-title">Herramientas que usan<br />nuestros pacientes.</h2>
          <p>
            No es solo información. Es la misma tecnología de seguimiento que acompaña cada
            protocolo, disponible para que la explore antes de agendar.
          </p>
        </div>

        <div className="tools-grid">
          <div className="reveal reveal-delay-1"><CalculadoraIMC /></div>
          <div className="reveal reveal-delay-2"><SimuladorElegibilidad /></div>
        </div>

        <div className="reveal reveal-delay-3">
          <TrackerDosis />
        </div>
      </div>
    </section>
  );
}
