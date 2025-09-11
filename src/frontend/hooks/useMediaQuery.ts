import { useState, useEffect } from "react";

/**
 * Hook para detectar si una media query CSS es verdadera o falsa.
 * @param query La media query en formato de string (ej. '(max-width: 767px)').
 * @returns {boolean} `true` si la media query coincide, de lo contrario `false`.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si `window` existe para evitar errores en el servidor (renderizado del lado del servidor)
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);

      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Establecer el estado inicial
      setMatches(mediaQueryList.matches);

      // Agregar el listener para detectar cambios
      mediaQueryList.addEventListener("change", listener);

      // Limpiar el listener al desmontar el componente
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
