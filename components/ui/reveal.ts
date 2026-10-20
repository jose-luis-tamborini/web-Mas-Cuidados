// Props para que un elemento aparezca al hacer scroll: <div {...reveal}>. RevealOnScroll cambia el atributo
// apenas carga la página, a veces antes de que React hidrate esa sección: por eso se le avisa a React que
// la diferencia es a propósito (solo afecta a los atributos de ese elemento, no a su contenido).
export const reveal = { "data-reveal": "", suppressHydrationWarning: true } as const;
