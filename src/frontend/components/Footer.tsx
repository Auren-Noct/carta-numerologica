const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-6 mt-8">
      <div className="container mx-auto text-center px-4">
        {/* Título para el CTA de donación (opcional, pero recomendado) */}
        <div className="mb-4">
          <p className="text-sm">
            ¿Te ha gustado la app? ¡Apoya su desarrollo!
          </p>
        </div>

        {/* Botón de donación con un CTA mejorado */}
        <a
          href="TU_ENLACE_DE_DONACION"
          className="inline-block bg-white text-orange-400 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invítame un café ☕
        </a>

        {/* Línea divisoria para separar el CTA del resto del footer */}
        <hr className="border-t border-orange-300 mb-6" />

        {/* Información del creador y enlaces en una fila */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center text-xs md:text-sm">
          <p className="mb-2 md:mb-0 md:mr-4">
            &copy; {new Date().getFullYear()} Creado por
            <a
              href="mailto:walter.crespin49@gmail.com"
              className="text-white hover:underline mx-2"
            >
              Walter Marcos Crespín
            </a>
          </p>
          <p className="mb-2 md:mb-0 md:mr-4">
            Basado en la técnica de
            <a
              href="https://www.eduardodharmayoel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline mx-1"
            >
              Eduardo Dharma Yoel
            </a>
          </p>
          <a
            href="https://github.com/Auren-Noct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline mx-2"
          >
            Mi GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
