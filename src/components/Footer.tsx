const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Creado por Walter Marcos Crespín.
        </p>
        <p className="mb-0">Basado en la técnica de **Eduardo Dharma Yoel**.</p>

        {/* Llamado a la acción para la versión portable */}
        <div className="my-3">
          <a
            href=""
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obtén la versión portable
          </a>
        </div>

        <p className="mb-0">
          <a
            href="mailto:walter.crespin49@gmail.com"
            className="text-white text-decoration-none mx-2"
          >
            walter.crespin49@gmail.com
          </a>
          <a
            href="https://github.com/Auren-Noct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-2"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
