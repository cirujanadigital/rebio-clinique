# REBIO Clinique — Landing Page

Landing page en React para una clínica de tratamientos GLP-1 (control de peso), con secciones de conversión y tres herramientas interactivas que el paciente usa antes de agendar consulta.

**[🔗 Ver demo en vivo](#)** · **[📄 Repo](#)**

---

## Qué resuelve

Una landing médica estándar solo informa. Esta agrega fricción positiva: el visitante interactúa con datos propios (peso, altura, hábitos) antes de llegar al CTA de WhatsApp, lo que aumenta la calidad del lead que llega al equipo comercial.

## Herramientas interactivas

| Componente | Qué hace |
|---|---|
| `CalculadoraIMC` | Calcula IMC en tiempo real (`useMemo`), clasifica el resultado en 6 rangos clínicos y valida rangos de entrada fuera de lo fisiológicamente razonable |
| `SimuladorElegibilidad` | Cuestionario de 4 preguntas (IMC, comorbilidades, intentos previos, edad) que estima si el visitante es candidato al tratamiento |
| `TrackerDosis` | Visualiza un protocolo de 12 semanas con progresión de dosis y notas clínicas por semana |

## Stack técnico

- **React 19** + **Vite 8** — build y HMR
- **Hook custom `useReveal`** — animaciones on-scroll con `IntersectionObserver`, sin librerías externas y con fallback si el navegador no lo soporta
- **CSS por componente** (sin frameworks de CSS) — un `.css` junto a cada `.jsx`
- **oxlint** — linting rápido en Rust en vez de ESLint

## Arquitectura

```
src/
├── components/
│   ├── Nav.jsx / Hero.jsx / Beneficios.jsx
│   ├── Herramientas/
│   │   ├── CalculadoraIMC.jsx
│   │   ├── SimuladorElegibilidad.jsx
│   │   └── TrackerDosis.jsx
│   ├── Ecosistema.jsx / Diferencia.jsx / Autoridad.jsx
│   └── CDMeta.jsx / CTAFinal.jsx / Footer.jsx
├── hooks/
│   └── useReveal.js
└── App.jsx
```

Cada sección de la landing es un componente autocontenido (JSX + CSS propio), lo que permite reordenar, reutilizar o eliminar secciones sin afectar al resto.

## Correr localmente

```bash
pnpm install
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm preview   # preview del build
pnpm lint      # oxlint
```

## Próximos pasos

- [ ] Conectar el CTA de WhatsApp a un número de producción
- [ ] Reemplazar datos mock de `TrackerDosis` por estado real (Supabase)
- [ ] Agregar tests de los cálculos de `CalculadoraIMC` y `SimuladorElegibilidad`
