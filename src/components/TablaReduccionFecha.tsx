import React from "react";

type Props = {
  fechaNumeros: number[];
  sumaFecha: number;
  reduccionFecha: string | number;
};

const TablaReduccionFecha = ({
  fechaNumeros,
  sumaFecha,
  reduccionFecha,
}: Props) => {
  const datosFila1 = [...fechaNumeros, sumaFecha, reduccionFecha];

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Reducción de la fecha
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white text-center">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th colSpan={2} className="py-2 px-4 rounded-tl-lg">
                Día
              </th>
              <th colSpan={2} className="py-2 px-4">
                Mes
              </th>
              <th colSpan={4} className="py-2 px-4">
                Año
              </th>
              <th className="py-2 px-4">Suma</th>
              <th className="py-2 px-4 rounded-tr-lg">Reducción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              {datosFila1.map((valor, index) => (
                <td
                  key={index}
                  className="py-2 px-4 border-b border-gray-200 text-gray-700"
                >
                  {valor}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default React.memo(TablaReduccionFecha);
