import footerTemplate from "../templates/footer.html?raw";

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate;
    this.addEventListeners();
  }

  private addEventListeners(): void {
    // Añadir lógica interactiva si es necesario
    const links = this.querySelectorAll(
      ".footer__content__section__list__li__link",
    );
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Lógica de navegación o destacado de enlace activo
        console.log("Navegando a:", (e.target as HTMLAnchorElement).href);
      });
    });
  }
}

// Registrar el componente personalizado
customElements.define("app-footer", FooterComponent);

export default FooterComponent;
