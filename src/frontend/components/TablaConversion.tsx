const TablaConversion = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Tabla de conversión</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">1</th>
              <th className="py-2 px-4 border-b border-gray-300">2</th>
              <th className="py-2 px-4 border-b border-gray-300">3</th>
              <th className="py-2 px-4 border-b border-gray-300">4</th>
              <th className="py-2 px-4 border-b border-gray-300">5</th>
              <th className="py-2 px-4 border-b border-gray-300">6</th>
              <th className="py-2 px-4 border-b border-gray-300">7</th>
              <th className="py-2 px-4 border-b border-gray-300">8</th>
              <th className="py-2 px-4 border-b border-gray-300">9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">A</td>
              <td className="py-2 px-4 border-b border-gray-300">B</td>
              <td className="py-2 px-4 border-b border-gray-300">C</td>
              <td className="py-2 px-4 border-b border-gray-300">D</td>
              <td className="py-2 px-4 border-b border-gray-300">E</td>
              <td className="py-2 px-4 border-b border-gray-300">F</td>
              <td className="py-2 px-4 border-b border-gray-300">G</td>
              <td className="py-2 px-4 border-b border-gray-300">H</td>
              <td className="py-2 px-4 border-b border-gray-300">I</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">J</td>
              <td className="py-2 px-4 border-b border-gray-300">K</td>
              <td className="py-2 px-4 border-b border-gray-300">L</td>
              <td className="py-2 px-4 border-b border-gray-300">M</td>
              <td className="py-2 px-4 border-b border-gray-300">N/Ñ</td>
              <td className="py-2 px-4 border-b border-gray-300">O</td>
              <td className="py-2 px-4 border-b border-gray-300">P</td>
              <td className="py-2 px-4 border-b border-gray-300">Q</td>
              <td className="py-2 px-4 border-b border-gray-300">R</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-gray-300">S</td>
              <td className="py-2 px-4 border-gray-300">T</td>
              <td className="py-2 px-4 border-gray-300">U</td>
              <td className="py-2 px-4 border-gray-300">V</td>
              <td className="py-2 px-4 border-gray-300">W</td>
              <td className="py-2 px-4 border-gray-300">X</td>
              <td className="py-2 px-4 border-gray-300">Y</td>
              <td className="py-2 px-4 border-gray-300">Z</td>
              <td className="py-2 px-4 border-gray-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaConversion;
