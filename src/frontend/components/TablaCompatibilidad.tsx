import React from "react";

type Props = {
  reduccionFecha: string | number;
  diaFecha: string | number;
  reduccionFechaCompanero: string | number | null;
  diaCompanero: string | number | null;
};

const TablaCompatibilidad = ({
  reduccionFecha,
  diaFecha,
  reduccionFechaCompanero,
  diaCompanero,
}: Props) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Compatibilidad de pareja</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300"></th>
              <th className="py-2 px-4 border-b border-gray-300">
                Consultante
              </th>
              <th className="py-2 px-4 border-b border-gray-300">Pareja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 text-left font-bold">
                Camino de vida
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {reduccionFecha}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {reduccionFechaCompanero}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 text-left font-bold">
                Día de nacimiento
              </td>
              <td className="py-2 px-4 border-b border-gray-300">{diaFecha}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                {diaCompanero}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TablaCompatibilidad);
