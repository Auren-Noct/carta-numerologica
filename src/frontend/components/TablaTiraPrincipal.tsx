import React from "react";

type Props = {
  diaFecha: string | number;
  reduccionDia: string | number;
  sumaFecha: number;
  reduccionFecha: string | number;
  sumaVocales: number;
  reduccionVocales: string | number;
  sumaConsonantes: number;
  reduccionConsonantes: string | number;
  sumaTemperamento: string | number;
  reduccionTemperamento: string | number;
  sumaMision: number;
  reduccionMision: string | number;
  sumaMetaFinal: number;
  reduccionMetaFinal: string | number;
};

const TablaTiraPrincipal = ({
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
}: Props) => {
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
      <h3 className="text-2xl font-semibold mb-4">Tira principal</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300"></th>
              <th className="py-2 px-4 border-b border-gray-300">Suma</th>
              <th className="py-2 px-4 border-b border-gray-300">Reducción</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300 text-left font-bold">
                  {fila.label}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {fila.suma}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
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
export default React.memo(TablaTiraPrincipal);
