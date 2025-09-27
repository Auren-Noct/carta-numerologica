const TablaConversion = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-teal-700">
        Tabla de conversión
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border-b-2 border-orange-400 bg-white text-center">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-2 px-4 rounded-tl-lg">1</th>
              <th className="py-2 px-4">2</th>
              <th className="py-2 px-4">3</th>
              <th className="py-2 px-4">4</th>
              <th className="py-2 px-4">5</th>
              <th className="py-2 px-4">6</th>
              <th className="py-2 px-4">7</th>
              <th className="py-2 px-4">8</th>
              <th className="py-2 px-4 rounded-tr-lg">9</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                A
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                B
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                C
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                D
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                E
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                F
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                G
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                H
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                I
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                J
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                K
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                L
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                M
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                N/Ñ
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                O
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                P
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                Q
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                R
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors duration-200">
              <td className="py-2 px-4 text-gray-700">S</td>
              <td className="py-2 px-4 text-gray-700">T</td>
              <td className="py-2 px-4 text-gray-700">U</td>
              <td className="py-2 px-4 text-gray-700">V</td>
              <td className="py-2 px-4 text-gray-700">W</td>
              <td className="py-2 px-4 text-gray-700">X</td>
              <td className="py-2 px-4 text-gray-700">Y</td>
              <td className="py-2 px-4 text-gray-700">Z</td>
              <td className="py-2 px-4 text-gray-700"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaConversion;
