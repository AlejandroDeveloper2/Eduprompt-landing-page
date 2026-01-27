import navigationTemplate from '../templates/navigation.html?raw'

class NavigationComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = navigationTemplate
        this.addEventListeners()
    }

    private addEventListeners(): void {
        // Añadir lógica interactiva si es necesario
        const links = this.querySelectorAll(
            '.navigation__item-list__item__link'
        )
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                // Lógica de navegación o destacado de enlace activo
                console.log(
                    'Navegando a:',
                    (e.target as HTMLAnchorElement).href
                )
            })
        })
    }
}

// Registrar el componente personalizado
customElements.define('app-navigation', NavigationComponent)

export default NavigationComponent
