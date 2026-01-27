interface StickyNavOptions {
  navSelector: string;
  scrollThreshold?: number;
  hideOnScrollDown?: boolean;
  showScrollProgress?: boolean;
  addShadowOnScroll?: boolean;
}

class StickyNavigation {
  private $nav: HTMLElement | null;
  private lastScrollTop: number = 0;
  private options: Required<StickyNavOptions>;

  constructor(options: StickyNavOptions) {
    this.options = {
      scrollThreshold: 100,
      hideOnScrollDown: false,
      showScrollProgress: false,
      addShadowOnScroll: true,
      ...options,
    };

    this.$nav = document.querySelector(this.options.navSelector);

    if (this.$nav) {
      this.init();
    } else {
      console.warn(`Navegación no encontrada: ${this.options.navSelector}`);
    }
  }

  private init(): void {
    this.attachScrollListener();

    if (this.options.showScrollProgress) {
      this.initScrollProgress();
    }
  }

  private attachScrollListener(): void {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  private handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Agregar/quitar clase 'scrolled' para efectos visuales
    if (this.options.addShadowOnScroll) {
      this.toggleScrolledClass(scrollTop);
    }

    // Ocultar/mostrar navegación al hacer scroll
    if (this.options.hideOnScrollDown) {
      this.toggleVisibility(scrollTop);
    }

    // Actualizar barra de progreso
    if (this.options.showScrollProgress) {
      this.updateScrollProgress();
    }

    this.lastScrollTop = scrollTop;
  }

  private toggleScrolledClass(scrollTop: number): void {
    if (!this.$nav) return;

    if (scrollTop > this.options.scrollThreshold) {
      this.$nav.classList.add("navigation--scrolled");
    } else {
      this.$nav.classList.remove("navigation--scrolled");
    }
  }

  private toggleVisibility(scrollTop: number): void {
    if (!this.$nav) return;

    // Solo ocultar si el scroll es hacia abajo y pasó el umbral
    if (
      scrollTop > this.lastScrollTop &&
      scrollTop > this.options.scrollThreshold
    ) {
      this.$nav.classList.add("navigation--hide");
      this.$nav.classList.remove("navigation--show");
    } else {
      this.$nav.classList.remove("navigation--hide");
      this.$nav.classList.add("navigation--show");
    }
  }

  private initScrollProgress(): void {
    if (!this.$nav) return;
    this.$nav.classList.add("show-progress");
  }

  private updateScrollProgress(): void {
    if (!this.$nav) return;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    this.$nav.style.setProperty("--scroll-progress", `${scrolled}%`);
  }

  // Método público para destruir listeners
  public destroy(): void {
    // Aquí podrías remover los event listeners si los guardas en variables
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Configuración básica (solo agregar sombra)
  // new StickyNavigation({
  //     navSelector: '.navigation',
  //     scrollThreshold: 50,
  //     addShadowOnScroll: true,
  // })

  // O configuración avanzada (ocultar al bajar)
  new StickyNavigation({
    navSelector: ".navigation",
    scrollThreshold: 100,
    hideOnScrollDown: true,
    showScrollProgress: false,
    addShadowOnScroll: true,
  });
});

export default StickyNavigation;
