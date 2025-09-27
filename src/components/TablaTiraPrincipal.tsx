import { memo } from "react";
import { useCalculos } from "../context/CalculosContext";

const TablaTiraPrincipal = () => {
  const datosCalculados = useCalculos();
  if (!datosCalculados) return null;
  const {
    diaFecha,
    reduccionDia,
    sumaFecha,
    reduccionFecha,
    sumaVocales,
    reduccionVocales,
    sumaConsonantes,
    reduccionConsonantes,
    sumaTemperamento,
    reduccionTemperamento,
    sumaMision,
    reduccionMision,
    sumaMetaFinal,
    reduccionMetaFinal,
  } = datosCalculados;
  const filas = [
    {
      label: "Camino de vida o sendero",
      suma: sumaFecha,
      reduccion: reduccionFecha,
    },
    {
      label: "Día de nacimiento",
      suma: diaFecha,
      reduccion: reduccionDia,
    },
    {
      label: "Camino del alma",
      suma: sumaVocales,
      reduccion: reduccionVocales,
    },
    {
      label: "Personalidad",
      suma: sumaConsonantes,
      reduccion: reduccionConsonantes,
    },
    {
      label: "Temperamento",
      suma: sumaTemperamento,
      reduccion: reduccionTemperamento,
    },
    {
      label: "Misión",
      suma: sumaMision,
      reduccion: reduccionMision,
    },
    {
      label: "Meta Final",
      suma: sumaMetaFinal,
      reduccion: reduccionMetaFinal,
    },
  ];

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Tira principal
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white text-center">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-bold rounded-tl-lg"></th>
              <th className="py-3 px-4 font-bold">Suma</th>
              <th className="py-3 px-4 font-bold rounded-tr-lg">Reducción</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => (
              <tr
                key={index}
                className="hover:bg-teal-50 transition-colors duration-200"
              >
                <td className="py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-800">
                  {fila.label}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  {fila.suma}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  {fila.reduccion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default memo(TablaTiraPrincipal);
