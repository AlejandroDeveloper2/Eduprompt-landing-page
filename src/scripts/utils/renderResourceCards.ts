import icon1 from "../../assets/icons/solar_notebook-minimalistic-outline.html?raw";
import icon2 from "../../assets/icons/solar_calendar-linear.html?raw";
import icon3 from "../../assets/icons/streamline_target.html?raw";
import icon4 from "../../assets/icons/emojione-monotone_writing-hand.html?raw";
import icon5 from "../../assets/icons/healthicons_i-exam-multiple-choice-outline.html?raw";
import icon6 from "../../assets/icons/mage_image.html?raw";
import icon7 from "../../assets/icons/mage_chart-b.html?raw";
import icon8 from "../../assets/icons/carbon_chart-line.html?raw";

interface Resource {
  icon: string;
  title: string;
}

const resources: Resource[] = [
  { icon: icon1, title: "Guías de Estudio" },
  { icon: icon2, title: "Planificaciones de Clase" },
  { icon: icon3, title: "Talleres Educativos" },
  { icon: icon4, title: "Tareas y Actividades" },
  { icon: icon5, title: "Exámenes y Evaluaciones" },
  { icon: icon6, title: "Material Visual" },
  { icon: icon7, title: "Gráficos Educativos" },
  { icon: icon8, title: "Rúbricas de Evaluación" },
];

const $resourcesGrid = document.querySelector("#resources-grid");

document.addEventListener("DOMContentLoaded", () => {
  resources.forEach((resource) => {
    $resourcesGrid!.innerHTML += `
            <div class="page-content__section__grid__resource-card">
                ${resource.icon}
                <p class="page-content__section__grid__resource-card__title">
                    ${resource.title}
                </p>
            </div>
        `;
  });
});
