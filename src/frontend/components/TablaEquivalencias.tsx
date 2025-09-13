import React from "react";

type Props = {
  nombreCompleto: string;
  vocales: (number | null)[];
  consonantes: (number | null)[];
  sumaVocales: number;
  sumaConsonantes: number;
  reduccionVocales: number | string;
  reduccionConsonantes: number | string;
};

const TablaEquivalencias = ({
  nombreCompleto,
  vocales,
  consonantes,
  sumaVocales,
  reduccionVocales,
  sumaConsonantes,
  reduccionConsonantes,
}: Props) => {
  const nombreArray = nombreCompleto.split("");

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Equivalencias numéricas</h3>

      {/* Tabla para escritorio y pantallas grandes */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300"></th>
              {nombreArray.map((char, index) => (
                <th key={index} className="py-2 px-4 border-b border-gray-300">
                  {char.toUpperCase()}
                </th>
              ))}
              <th className="py-2 px-4 border-b border-gray-300"></th>
              <th className="py-2 px-4 border-b border-gray-300">Suma</th>
              <th className="py-2 px-4 border-b border-gray-300">Reducción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 font-bold">
                Vocales
              </td>
              {vocales.map((valor, index) => (
                <td key={index} className="py-2 px-4 border-b border-gray-300">
                  {valor}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-300"></td>
              <td className="py-2 px-4 border-b border-gray-300">
                {sumaVocales}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {reduccionVocales}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 font-bold">
                Consonantes
              </td>
              {consonantes.map((valor, index) => (
                <td key={index} className="py-2 px-4 border-b border-gray-300">
                  {valor}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-300"></td>
              <td className="py-2 px-4 border-b border-gray-300">
                {sumaConsonantes}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {reduccionConsonantes}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla para móviles */}
      <div className="block md:hidden overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Letra</th>
              <th className="py-2 px-4 border-b border-gray-300">Vocales</th>
              <th className="py-2 px-4 border-b border-gray-300">
                Consonantes
              </th>
            </tr>
          </thead>
          <tbody>
            {nombreArray.map((char, index) => (
              <tr key={index} className="border-b border-gray-300">
                <th
                  scope="row"
                  className="py-2 px-4 text-left font-normal border-r border-gray-300"
                >
                  {char.toUpperCase()}
                </th>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {vocales[index]}
                </td>
                <td className="py-2 px-4 text-center">{consonantes[index]}</td>
              </tr>
            ))}
            <tr className="border-b border-gray-300">
              <th className="py-2 px-4 text-right font-bold border-r border-gray-300">
                Suma
              </th>
              <td className="py-2 px-4 text-center border-r border-gray-300">
                {sumaVocales}
              </td>
              <td className="py-2 px-4 text-center">{sumaConsonantes}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 text-right font-bold border-r border-gray-300">
                Reducción
              </th>
              <td className="py-2 px-4 text-center border-r border-gray-300">
                {reduccionVocales}
              </td>
              <td className="py-2 px-4 text-center">{reduccionConsonantes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default React.memo(TablaEquivalencias);
