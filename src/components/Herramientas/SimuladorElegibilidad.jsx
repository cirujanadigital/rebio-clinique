import { useState } from 'react';

const QUESTIONS = [
  {
    id: 'imc',
    text: '¿Tu IMC aproximado supera 27?',
  },
  {
    id: 'comorbilidad',
    text: '¿Tenés alguna condición asociada (resistencia a la insulina, hipertensión, colesterol alto)?',
  },
  {
    id: 'intentos',
    text: '¿Intentaste bajar de peso antes sin resultado sostenido?',
  },
  {
    id: 'edad',
    text: '¿Tenés entre 18 y 70 años?',
  },
];

function evaluate(answers) {
  const yesCount = Object.values(answers).filter((v) => v === true).length;
  if (!answers.edad) {
    return {
      tone: 'warn',
      title: 'Requiere evaluación médica presencial',
      text: 'El rango de edad es un factor clínico central. Una consulta presencial determina la indicación correcta.',
    };
  }
  if (yesCount >= 2) {
    return {
      tone: 'good',
      title: 'Buen candidato — agenda una evaluación',
      text: 'Tu perfil orientativo es compatible con protocolos GLP-1. La evaluación médica confirma la indicación.',
    };
  }
  return {
    tone: 'info',
    title: 'No cumple criterios básicos, igual podés consultar',
    text: 'Cada caso se evalúa individualmente. Una consulta médica es la única forma de saber con certeza.',
  };
}

export default function SimuladorElegibilidad() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const finished = step >= QUESTIONS.length;
  const result = finished ? evaluate(answers) : null;

  function answer(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <span className="tool-tag">Herramienta 2</span>
        <h3>Simulador de elegibilidad</h3>
        <p>Orientativo. Nunca reemplaza una consulta médica.</p>
      </div>

      {!finished && (
        <>
          <div className="tool-progress" aria-hidden="true">
            {QUESTIONS.map((_, i) => (
              <span key={i} className={i <= step ? 'tool-progress-dot active' : 'tool-progress-dot'} />
            ))}
          </div>
          <p className="tool-question">{QUESTIONS[step].text}</p>
          <div className="tool-yesno">
            <button type="button" onClick={() => answer(QUESTIONS[step].id, true)}>Sí</button>
            <button type="button" onClick={() => answer(QUESTIONS[step].id, false)}>No</button>
          </div>
        </>
      )}

      {finished && result && (
        <>
          <div className={`tool-result tool-result-${result.tone}`}>
            <p className="tool-result-label">{result.title}</p>
            <p className="tool-result-text">{result.text}</p>
          </div>
          <button type="button" className="tool-reset" onClick={reset}>Repetir simulación</button>
        </>
      )}

      <a href="#cta-final" className="tool-cta">Agendar evaluación médica →</a>
    </div>
  );
}
