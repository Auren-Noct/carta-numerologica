import React from "react";

type Props = {
  numerosFrecuencia: number[];
  numerosMasAltos: number[];
  numerosMasBajos: number[];
};

const TablaAbundaciaEscasez = ({
  numerosFrecuencia,
  numerosMasAltos,
  numerosMasBajos,
}: Props) => {
  const numeros = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Abundancia y escasez
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white text-center">
          <thead className="bg-teal-700 text-white">
            <tr>
              <td className="py-2 px-4 font-bold rounded-tl-lg">Dígito</td>
              {numeros.map((num) => (
                <th key={num} className="py-2 px-4">
                  {num}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-bold text-gray-800">
                Cantidad
              </td>
              {numerosFrecuencia.map((conteo, index) => {
                let className = "py-2 px-4 border-b border-gray-200";
                if (numerosMasAltos.includes(index)) {
                  className += " bg-red-600 text-white font-bold";
                } else if (numerosMasBajos.includes(index)) {
                  className += " bg-orange-400 text-white font-bold";
                }
                return (
                  <td key={index} className={className}>
                    {conteo}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TablaAbundaciaEscasez);
