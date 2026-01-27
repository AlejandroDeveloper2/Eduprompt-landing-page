interface PlanAction {
  label: string;
  href: string;
}

interface Plan {
  name: string;
  price?: string;
  expiration?: string;
  features?: string[];
  description?: string;
  action: PlanAction;
}

const plans: Plan[] = [
  {
    name: "Gratuito",
    price: "$0",
    expiration: "Para siempre",
    features: [
      "5 tokens diarios gratis",
      "Crea cuenta gratuita",
      "Sincronización en nube",
      "Acceso multi-dispositivo",
      "Funciona offline",
      "Todos los formatos",
      "Respaldo automático",
    ],
    action: {
      label: "Comenzar Gratis",
      href: "#",
    },
  },
  {
    name: "Premium Mensual",
    price: "$9.99",
    expiration: "Por mes",
    features: [
      "✨ Tokens ilimitados",
      "✨ Generaciones ilimitadas",
      "Sin preocuparte por créditos",
      "Acceso multi-dispositivo",
      "Crea todo lo que necesites",
      "Soporte prioritario",
      "Todo lo del plan gratuito",
    ],
    action: {
      label: "Suscribirse en la app",
      href: "#",
    },
  },
  {
    name: "Paquete Básico",
    price: "$2.99",
    expiration: "Pago único",
    features: [
      "100 tokens adicionales",
      "Nunca expiran",
      "Úsalos cuando quieras",
      "Ideal para uso ocasional",
      "Compra más cuando necesites",
    ],
    action: {
      label: "Descargar app",
      href: "#",
    },
  },
  {
    name: "Paquete Estándar",
    price: "$7.99",
    expiration: "Pago único",
    features: [
      "300 tokens adicionales",
      "Nunca expiran",
      "Ahorra 25% vs básico",
      "Perfecto para uso regular",
    ],
    action: {
      label: "Descargar app",
      href: "#",
    },
  },
  {
    name: "Paquete Profesional",
    price: "$19.99",
    expiration: "Pago único",
    features: [
      "1000 tokens adicionales",
      "Nunca expiran",
      "Ahorra 33% vs básico",
      "Máximo valor por tu dinero",
    ],
    action: {
      label: "Descargar app",
      href: "#",
    },
  },
  {
    name: "¿Necesitas Ayuda?",
    description:
      "No estás seguro de qué plan elegir? Comienza gratis con 5 tokens diarios y decide después.",
    action: {
      label: "Comenzar Gratis",
      href: "#",
    },
  },
];

const getActionIcon = (planIndex: number): string => {
  if (planIndex === 0 || planIndex === plans.length - 1) {
    return `
      <svg class="button__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M5.755 3.78085C5.67909 3.73584 5.59262 3.71173 5.50437 3.71096C5.41612 3.71019 5.32924 3.73279 5.25255 3.77646C5.17586 3.82014 5.1121 3.88333 5.06775 3.95963C5.02339 4.03592 5.00002 4.1226 5 4.21085V15.7892C5.00002 15.8774 5.02339 15.9641 5.06775 16.0404C5.1121 16.1167 5.17586 16.1799 5.25255 16.2236C5.32924 16.2672 5.41612 16.2898 5.50437 16.2891C5.59262 16.2883 5.67909 16.2642 5.755 16.2192L15.5242 10.43C15.5988 10.3857 15.6606 10.3228 15.7035 10.2474C15.7464 10.172 15.769 10.0868 15.769 10C15.769 9.91326 15.7464 9.828 15.7035 9.7526C15.6606 9.67721 15.5988 9.61429 15.5242 9.57002L5.755 3.78085Z" 
          stroke=${planIndex === plans.length - 1 ? "var(--primary-400)" : "white"}
          stroke-width="1.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    `;
  }
  if (planIndex === 1) {
    return `
      <svg class="button__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M11.6666 4.16667C11.6666 3.72464 11.4911 3.30072 11.1785 2.98816C10.8659 2.67559 10.442 2.5 9.99998 2.5C9.55795 2.5 9.13403 2.67559 8.82147 2.98816C8.50891 3.30072 8.33331 3.72464 8.33331 4.16667M16.05 8.08L17.2041 15.58C17.2407 15.8174 17.2254 16.0598 17.1595 16.2908C17.0936 16.5217 16.9785 16.7357 16.8222 16.918C16.6659 17.1004 16.4721 17.2468 16.2539 17.3472C16.0358 17.4477 15.7985 17.4998 15.5583 17.5H4.44165C4.20134 17.5 3.96387 17.4481 3.74552 17.3477C3.52716 17.2474 3.33309 17.101 3.1766 16.9187C3.02011 16.7363 2.90491 16.5222 2.8389 16.2912C2.77289 16.0601 2.75762 15.8175 2.79415 15.58L3.94831 8.08C4.00885 7.68633 4.20838 7.32735 4.51075 7.06809C4.81312 6.80882 5.19834 6.66642 5.59665 6.66667H14.4033C14.8015 6.66662 15.1865 6.80911 15.4887 7.06836C15.7909 7.3276 15.9895 7.68647 16.05 8.08Z" 
          stroke="var(--primary-400)" 
          stroke-width="1.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    `;
  }
  return `
    <svg class="button__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 16.6668H15M10 3.3335V13.3335M10 13.3335L12.9167 10.4168M10 13.3335L7.08333 10.4168" 
        stroke="white" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  `;
};

const $plansGrid = document.querySelector("#plans-grid");

document.addEventListener("DOMContentLoaded", () => {
  plans.forEach((plan, index) => {
    const bgCardModifier: string =
      index === 1
        ? "page-content__section__grid__plan-card--primary"
        : index === plans.length - 1
          ? "page-content__section__grid__plan-card--neutral"
          : "";
    const bgCardButtonModifier: string =
      index === 1 || index === plans.length - 1 ? "button--neutral" : "";

    $plansGrid!.innerHTML += `
      <div class="page-content__section__grid__plan-card ${bgCardModifier}">
        <h3 class="page-content__section__grid__plan-card__name">${plan.name}</h3>
        ${plan.price ? `<span class="page-content__section__grid__plan-card__price">${plan.price}</span>` : ""}
        ${plan.expiration ? `<p class="page-content__section__grid__plan-card__price-details">${plan.expiration}</p>` : ""} 
        ${
          plan.features
            ? `<ul class="page-content__section__grid__plan-card__features">
            ${plan.features
              .map(
                (feature) =>
                  `
                  <li class="page-content__section__grid__plan-card__features__li">
                    ${feature}
                  </li>
               `,
              )
              .join("")}
            </ul>`
            : ""
        }
        ${
          plan.description
            ? `<p class="page-content__section__grid__plan-card__description">
              ${plan.description}
            </p>`
            : ""
        }
        <a class="button ${bgCardButtonModifier} button--full" href="${plan.action.href}">
          ${getActionIcon(index)}
          <span class="button__span">${plan.action.label}</span>
        </a>
      </div>
    `;
  });
});
