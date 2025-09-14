const CTA = () => {
  return (
    <div className="my-16 p-6 rounded-xl shadow-lg bg-white border border-orange-400">
      <div className="text-center">
        <h3 className="text-3xl font-extrabold text-teal-700 mb-4">
          Tu carta es solo el inicio. ¡Ahora descifra su mensaje!
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          <strong className="text-red-600">
            Esta sesión es el puente entre tus números y la vida que deseas.
          </strong>{" "}
          Te guiaré para que entiendas el significado profundo de tus números,
          cómo influyen en tu camino y qué herramientas tienes para alcanzar tus
          metas.
        </p>
        <a
          href="https://mpago.li/1ppYrzY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Reserva tu sesión interpretativa
        </a>
      </div>
    </div>
  );
};

export default CTA;
