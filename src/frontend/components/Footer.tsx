const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-6 mt-8">
      <div className="container mx-auto text-center px-4">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Creado por Walter Marcos Crespín.
        </p>
        <p className="mb-2">Basado en la técnica de **Eduardo Dharma Yoel**.</p>

        {/* Llamado a la acción para la versión portable */}
        {/* <div className="my-3">
          <a
            href=""
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obtén la versión portable
          </a>
        </div> */}

        <p className="mb-0">
          <a
            href="mailto:walter.crespin49@gmail.com"
            className="text-white hover:underline mx-2"
          >
            walter.crespin49@gmail.com
          </a>
          <a
            href="https://github.com/Auren-Noct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline mx-2"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
