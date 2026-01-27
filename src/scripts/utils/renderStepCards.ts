interface Step {
  step: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Descarga la App",
    description:
      "Instala EduPrompt gratis desde Google Play. Usa sin cuenta o regístrate para acceder a todas las funciones.",
  },
  {
    step: 2,
    title: "Describe lo que Necesitas",
    description:
      "Indica qué tipo de recurso necesitas, el tema, nivel educativo y características específicas.",
  },
  {
    step: 3,
    title: "Genera con IA",
    description:
      "La inteligencia artificial crea tu recurso personalizado en segundos, listo para usar o editar.",
  },
  {
    step: 4,
    title: "Guarda y Comparte",
    description:
      "Organiza tus recursos, guárdalos en la nube y compártelos fácilmente con otros docentes.",
  },
];

const $stepsGrid = document.querySelector("#steps-grid");

document.addEventListener("DOMContentLoaded", () => {
  steps.forEach((step) => {
    $stepsGrid!.innerHTML += `
            <div class="page-content__section__grid__step-card">
                <div class="page-content__section__grid__step-card__indicator">
                    <span class="page-content__section__grid__step-card__indicator__label">${step.step}</span>
                </div>
                <h3 class="page-content__section__grid__step-card__title">${step.title}</h3>
                <p class="page-content__section__grid__step-card__description">
                    ${step.description}
                </p>
            </div>
        `;
  });
});
