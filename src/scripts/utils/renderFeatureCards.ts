import icon1 from "../../assets/icons/fluent-emoji-high-contrast_robot.html?raw";
import icon2 from "../../assets/icons/solar_smartphone-broken.html?raw";
import icon3 from "../../assets/icons/solar_cloud-broken.html?raw";
import icon4 from "../../assets/icons/streamline-ultimate_spiral-shape.html?raw";
import icon5 from "../../assets/icons/famicons_save-outline.html?raw";
import icon6 from "../../assets/icons/si_lock-line.html?raw";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: icon1,
    title: "Inteligencia Artificial Avanzada",
    description:
      "Genera contenido educativo de calidad adaptado a tu materia y nivel. La IA comprende contextos pedagógicos y crea recursos personalizados.",
  },
  {
    icon: icon2,
    title: "Funciona Online y Offline",
    description:
      "Trabaja sin internet cuando lo necesites. Tus recursos están disponibles siempre, con o sin conexión.",
  },
  {
    icon: icon3,
    title: "Sincronización en la Nube",
    description:
      "Accede a tus recursos desde cualquier dispositivo. Todo sincronizado automáticamente y seguro.",
  },
  {
    icon: icon4,
    title: "Múltiples Formatos",
    description:
      "Genera recursos en texto, imágenes, tablas y gráficos. Elige el formato perfecto para cada necesidad.",
  },
  {
    icon: icon5,
    title: "Gestión Inteligente",
    description:
      "Organiza, guarda y comparte tus recursos fácilmente. Sistema de gestión diseñado para educadores.",
  },
  {
    icon: icon6,
    title: "Privacidad Garantizada",
    description:
      "Tus datos y recursos están protegidos. Usa la app sin cuenta si prefieres mantener todo local.",
  },
];

const $featuresGrid = document.querySelector("#features-grid");

document.addEventListener("DOMContentLoaded", () => {
  features.forEach((feature) => {
    $featuresGrid!.innerHTML += `
            <article class="page-content__section__grid__card">
                ${feature.icon}
                <h3 class="page-content__section__grid__card__title">
                    ${feature.title}
                </h3>
                <p class="page-content__section__grid__card__description">
                   ${feature.description}
                </p>
            </article>
        `;
  });
});
