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
      <h3 className="text-2xl font-semibold mb-4">Abundancia y escasez</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-center">
          <thead className="bg-gray-200">
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 font-bold">
                Dígito
              </td>
              {numeros.map((num) => (
                <th key={num} className="py-2 px-4 border-b border-gray-300">
                  {num}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300 font-bold text-left">
                Cantidad
              </td>
              {numerosFrecuencia.map((conteo, index) => {
                let className = "py-2 px-4 border-b border-gray-300";
                if (numerosMasAltos.includes(index)) {
                  className += " bg-red-500 text-white";
                } else if (numerosMasBajos.includes(index)) {
                  className += " bg-green-500 text-white";
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

export default TablaAbundaciaEscasez;
