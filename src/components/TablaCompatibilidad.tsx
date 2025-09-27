import { memo } from "react";
import { useCalculos } from "../context/CalculosContext";

const TablaCompatibilidad = () => {
  const datosCalculados = useCalculos();
  if (!datosCalculados) return null;
  const { reduccionFecha, diaFecha, reduccionFechaCompanero, diaCompanero } =
    datosCalculados;
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Compatibilidad de pareja
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white text-center">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-2 px-4 rounded-tl-lg"></th>
              <th className="py-2 px-4">Consultante</th>
              <th className="py-2 px-4 rounded-tr-lg">Pareja</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 text-left font-bold text-gray-800">
                Camino de vida
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {reduccionFecha}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {reduccionFechaCompanero}
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 text-left font-bold text-gray-800">
                Día de nacimiento
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {diaFecha}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {diaCompanero}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(TablaCompatibilidad);
