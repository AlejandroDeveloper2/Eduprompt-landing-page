import icon1 from "../../assets/icons/carbon_timer.html?raw";
import icon2 from "../../assets/icons/ion_bulb-outline.html?raw";
import icon3 from "../../assets/icons/material-symbols-light_dashboard-customize-outline.html?raw";
import icon4 from "../../assets/icons/streamline-ultimate_money-bag-dollar.html?raw";
import icon5 from "../../assets/icons/mage_reload-reverse.html?raw";
import icon6 from "../../assets/icons/fluent_people-community-32-regular.html?raw";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: icon1,
    title: "Ahorra Tiempo",
    description:
      "Reduce el tiempo de planificación de horas a minutos. Dedica más tiempo a lo que realmente importa: enseñar.",
  },
  {
    icon: icon2,
    title: "Mejora la Calidad",
    description:
      "Recursos pedagógicos profesionales con fundamento didáctico. Contenido estructurado y efectivo.",
  },
  {
    icon: icon3,
    title: "Personalización Total",
    description:
      "Adapta cada recurso a tu estilo de enseñanza y las necesidades de tus estudiantes.",
  },
  {
    icon: icon4,
    title: "Económico",
    description:
      "Acceso gratuito con opciones premium accesibles. Inversión mínima para resultados máximos.",
  },
  {
    icon: icon5,
    title: "Siempre Disponible",
    description:
      "Funciona sin internet. Crea y accede a tus recursos en cualquier momento y lugar.",
  },
  {
    icon: icon6,
    title: "Comunidad Educativa",
    description:
      "Comparte recursos con otros docentes y aprende de la comunidad.",
  },
];

const $benefitsGrid = document.querySelector("#benefits-grid");

document.addEventListener("DOMContentLoaded", () => {
  benefits.forEach((benefit) => {
    $benefitsGrid!.innerHTML += `
            <div class="page-content__section__grid__benefit-card">
                ${benefit.icon}
                <h3 class="page-content__section__grid__benefit-card__title">${benefit.title}</h3>
                <p class="page-content__section__grid__benefit-card__description">
                    ${benefit.description}
                </p>
            </div>
        `;
  });
});
