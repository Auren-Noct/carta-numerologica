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
      <h3 className="text-2xl font-semibold mb-4">Reducción de la fecha</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-center">
          <thead className="bg-gray-200">
            {/* Fila del encabezado con las etiquetas */}
            <tr>
              <th colSpan={2} className="py-2 px-4 border-b border-gray-300">
                Día
              </th>
              <th colSpan={2} className="py-2 px-4 border-b border-gray-300">
                Mes
              </th>
              <th colSpan={4} className="py-2 px-4 border-b border-gray-300">
                Año
              </th>
              <th className="py-2 px-4 border-b border-gray-300">Suma</th>
              <th className="py-2 px-4 border-b border-gray-300">Reducción</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila con los números de la fecha, suma y reducción */}
            <tr>
              {datosFila1.map((valor, index) => (
                <td key={index} className="py-2 px-4 border-b border-gray-300">
                  {valor}
                </td>
              ))}
            </tr>
            {/* <tr>
              {Array.from({ length: datosFila1.length - 1 }, (_, index) => (
                <td
                  key={index}
                  className="py-2 px-4 border-b border-gray-300"
                ></td>
              ))}
              <td className="py-2 px-4 border-b border-gray-300 font-bold">
                {diaFecha}
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default React.memo(TablaReduccionFecha);
