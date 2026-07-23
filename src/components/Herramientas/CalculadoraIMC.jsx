import { useMemo, useState } from 'react';

function classify(imc) {
  if (imc < 18.5) return { label: 'Bajo peso', tone: 'info' };
  if (imc < 25) return { label: 'Peso normal', tone: 'good' };
  if (imc < 30) return { label: 'Sobrepeso', tone: 'warn' };
  if (imc < 35) return { label: 'Obesidad grado I', tone: 'alert' };
  if (imc < 40) return { label: 'Obesidad grado II', tone: 'alert' };
  return { label: 'Obesidad grado III', tone: 'alert' };
}

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  const outOfRange =
    (alturaNum && (alturaNum > 250 || alturaNum < 100)) ||
    (pesoNum && (pesoNum > 300 || pesoNum < 25));

  const result = useMemo(() => {
    if (!pesoNum || !alturaNum || outOfRange) return null;
    const alturaM = alturaNum / 100;
    const imc = pesoNum / (alturaM * alturaM);
    return { imc: imc.toFixed(1), ...classify(imc) };
  }, [pesoNum, alturaNum, outOfRange]);

  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <span className="tool-tag">Herramienta 1</span>
        <h3>Calculadora de IMC</h3>
        <p>Un primer dato orientativo, no un diagnóstico.</p>
      </div>

      <div className="tool-inputs">
        <label className="tool-field">
          <span>Peso (kg)</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Ej: 82"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <label className="tool-field">
          <span>Altura (cm)</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Ej: 170"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
      </div>

      {outOfRange && (
        <p className="tool-warning">Verificá los datos ingresados: parecen fuera de rango.</p>
      )}

      {!outOfRange && result && (
        <div className={`tool-result tool-result-${result.tone}`}>
          <p className="tool-result-number">{result.imc}</p>
          <p className="tool-result-label">{result.label}</p>
        </div>
      )}

      {!outOfRange && !result && (
        <div className="tool-result tool-result-placeholder">
          <p>Ingresá peso y altura para ver tu IMC.</p>
        </div>
      )}

      <a href="#cta-final" className="tool-cta">Agendar evaluación médica →</a>
    </div>
  );
}
