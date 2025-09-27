import { memo } from "react";
import { useCalculos } from "../context/CalculosContext";

const TablaEquivalencias = () => {
  const datosCalculados = useCalculos();
  if (!datosCalculados) return null;
  const {
    nombreCompleto,
    vocales,
    consonantes,
    sumaVocales,
    reduccionVocales,
    sumaConsonantes,
    reduccionConsonantes,
  } = datosCalculados;
  const nombreArray = nombreCompleto.split("");

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Equivalencias numéricas
      </h3>

      {/* Tabla para escritorio y pantallas grandes */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-2 px-4 rounded-tl-lg"></th>
              {nombreArray.map((char, index) => (
                <th key={index} className="py-2 px-4">
                  {char.toUpperCase()}
                </th>
              ))}
              <th className="py-2 px-4"></th>
              <th className="py-2 px-4">Suma</th>
              <th className="py-2 px-4 rounded-tr-lg">Reducción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 font-bold text-gray-800">
                Vocales
              </td>
              {vocales.map((valor, index) => (
                <td key={index} className="py-2 px-4 border-b border-gray-200">
                  {valor}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-200"></td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {sumaVocales}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {reduccionVocales}
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 font-bold text-gray-800">
                Consonantes
              </td>
              {consonantes.map((valor, index) => (
                <td key={index} className="py-2 px-4 border-b border-gray-200">
                  {valor}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-200"></td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {sumaConsonantes}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {reduccionConsonantes}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla para móviles */}
      <div className="block md:hidden overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-2 px-4 rounded-tl-lg">Letra</th>
              <th className="py-2 px-4">Vocales</th>
              <th className="py-2 px-4 rounded-tr-lg">Consonantes</th>
            </tr>
          </thead>
          <tbody>
            {nombreArray.map((char, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-teal-50 transition-colors duration-200"
              >
                <th
                  scope="row"
                  className="py-2 px-4 text-left font-normal border-r border-gray-200 text-gray-800"
                >
                  {char.toUpperCase()}
                </th>
                <td className="py-2 px-4 text-center border-r border-gray-200 text-gray-700">
                  {vocales[index]}
                </td>
                <td className="py-2 px-4 text-center text-gray-700">
                  {consonantes[index]}
                </td>
              </tr>
            ))}
            <tr className="border-b border-gray-200 hover:bg-teal-50 transition-colors duration-200">
              <th className="py-2 px-4 text-right font-bold border-r border-gray-200 text-gray-800">
                Suma
              </th>
              <td className="py-2 px-4 text-center border-r border-gray-200 text-gray-700">
                {sumaVocales}
              </td>
              <td className="py-2 px-4 text-center text-gray-700">
                {sumaConsonantes}
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <th className="py-2 px-4 text-right font-bold border-r border-gray-200 text-gray-800">
                Reducción
              </th>
              <td className="py-2 px-4 text-center border-r border-gray-200 text-gray-700">
                {reduccionVocales}
              </td>
              <td className="py-2 px-4 text-center text-gray-700">
                {reduccionConsonantes}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default memo(TablaEquivalencias);
