import termsTemplate from "../templates/terms.html?raw";
import policiesTemplate from "../templates/policies.html?raw";

const $policiesSection = document.querySelector("#policies");
const $termsSection = document.querySelector("#terms");

/** Documento carga por primera vez */
document.addEventListener("DOMContentLoaded", () => {
  if (!$policiesSection || !$termsSection) return;

  $policiesSection.innerHTML = policiesTemplate;
  $termsSection.innerHTML = termsTemplate;
});
