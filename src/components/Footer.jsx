export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-brand-name">REBIO Clinique.</p>
            <p className="footer-brand-tagline">
              Medicina metabólica de nueva generación en Punta del Este, Uruguay. Tratamientos
              GLP-1 con protocolo clínico integral y seguimiento médico personalizado.
            </p>
            <p className="footer-address">Punta del Este, Uruguay · info@rebioclinique.uy</p>
          </div>
          <div>
            <p className="footer-col-title">Tratamientos</p>
            <ul className="footer-links">
              <li><a href="#beneficios">Protocolo GLP-1</a></li>
              <li><a href="#herramientas">Herramientas</a></li>
              <li><a href="#beneficios">Nutrición clínica</a></li>
              <li><a href="#beneficios">Seguimiento médico</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Clínica</p>
            <ul className="footer-links">
              <li><a href="#autoridad">Equipo médico</a></li>
              <li><a href="#cta-final">Agendar evaluación</a></li>
              <li><a href="https://wa.me/59899000000" rel="noopener noreferrer" target="_blank">WhatsApp</a></li>
              <li><a href="https://cirujanadigital.com" rel="noopener noreferrer" target="_blank">Cirujana Digital</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-legal">
            © 2026 REBIO Clinique. Todos los derechos reservados. Los resultados dependen de cada
            paciente y protocolo clínico individual.
          </p>
          <p className="footer-credit">
            Infraestructura digital por{' '}
            <a href="https://cirujanadigital.com" rel="noopener noreferrer" target="_blank">Cirujana Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
