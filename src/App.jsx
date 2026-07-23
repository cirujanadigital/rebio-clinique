import { useReveal } from './hooks/useReveal.js';

import Nav from './components/Nav.jsx';
import './components/Nav.css';

import Hero from './components/Hero.jsx';
import './components/Hero.css';

import Beneficios from './components/Beneficios.jsx';
import './components/Beneficios.css';

import Herramientas from './components/Herramientas/Herramientas.jsx';
import './components/Herramientas/Herramientas.css';

import Ecosistema from './components/Ecosistema.jsx';
import './components/Ecosistema.css';

import Diferencia from './components/Diferencia.jsx';
import './components/Diferencia.css';

import Autoridad from './components/Autoridad.jsx';
import './components/Autoridad.css';

import CDMeta from './components/CDMeta.jsx';
import './components/CDMeta.css';

import CTAFinal from './components/CTAFinal.jsx';
import './components/CTAFinal.css';

import Footer from './components/Footer.jsx';
import './components/Footer.css';

function App() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Nav />
      <Hero />
      <Beneficios />
      <Herramientas />
      <Ecosistema />
      <Diferencia />
      <Autoridad />
      <CDMeta />
      <CTAFinal />
      <Footer />
    </div>
  );
}

export default App;
