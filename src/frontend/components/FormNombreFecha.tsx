import { useState } from "react";
import { useCalculosNumerologicos } from "../hooks/useCalculosNumerologicos";
import TablaEquivalencias from "./TablaEquivalencias";
import TablaReduccionFecha from "./TablaReduccionFecha";
import TablaTiraPrincipal from "./TablaTiraPrincipal";
import TablaAbundanciaEscasez from "./TablaAbundanciaEscasez";
import TablaCompatibilidad from "./TablaCompatibilidad";

const FormNombreFecha = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [fecha, setFecha] = useState("");
  const [fechaCompanero, setFechaCompanero] = useState("");

  const datosCalculados = useCalculosNumerologicos(
    nombreCompleto,
    fecha,
    fechaCompanero
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto my-12 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Carta Numerológica
      </h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="formNombre"
            className="block text-gray-700 font-bold mb-2"
          >
            Nombre Completo:
          </label>
          <input
            id="formNombre"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="formFecha"
            className="block text-gray-700 font-bold mb-2"
          >
            Fecha:
          </label>
          <input
            id="formFecha"
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="formFechaCompanero"
            className="block text-gray-700 font-bold mb-2"
          >
            Fecha de la pareja (Opcional):
          </label>
          <input
            id="formFechaCompanero"
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fechaCompanero}
            onChange={(e) => setFechaCompanero(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generar Tablas
        </button>
      </form>

      {datosCalculados && (
        <>
          <TablaEquivalencias
            nombreCompleto={datosCalculados.nombreCompleto}
            vocales={datosCalculados.vocales}
            consonantes={datosCalculados.consonantes}
            sumaVocales={datosCalculados.sumaVocales}
            sumaConsonantes={datosCalculados.sumaConsonantes}
            reduccionVocales={datosCalculados.reduccionVocales}
            reduccionConsonantes={datosCalculados.reduccionConsonantes}
          />
          <TablaReduccionFecha
            fechaNumeros={datosCalculados.fechaNumeros}
            sumaFecha={datosCalculados.sumaFecha}
            reduccionFecha={datosCalculados.reduccionFecha}
            diaFecha={datosCalculados.diaFecha}
          />
          <TablaTiraPrincipal
            diaFecha={datosCalculados.diaFecha}
            reduccionDia={datosCalculados.reduccionDia}
            sumaFecha={datosCalculados.sumaFecha}
            reduccionFecha={datosCalculados.reduccionFecha}
            sumaVocales={datosCalculados.sumaVocales}
            reduccionVocales={datosCalculados.reduccionVocales}
            sumaConsonantes={datosCalculados.sumaConsonantes}
            reduccionConsonantes={datosCalculados.reduccionConsonantes}
            sumaTemperamento={datosCalculados.sumaTemperamento}
            reduccionTemperamento={datosCalculados.reduccionTemperamento}
            sumaMision={datosCalculados.sumaMision}
            reduccionMision={datosCalculados.reduccionMision}
            sumaMetaFinal={datosCalculados.sumaMetaFinal}
            reduccionMetaFinal={datosCalculados.reduccionMetaFinal}
          />
          <TablaAbundanciaEscasez
            numerosFrecuencia={datosCalculados.numerosFrecuencia}
            numerosMasAltos={datosCalculados.numerosMasAltos}
            numerosMasBajos={datosCalculados.numerosMasBajos}
          />
          {datosCalculados.reduccionFechaCompanero && (
            <TablaCompatibilidad
              reduccionFecha={datosCalculados.reduccionFecha}
              diaFecha={datosCalculados.diaFecha}
              reduccionFechaCompanero={datosCalculados.reduccionFechaCompanero}
              diaCompanero={datosCalculados.diaCompanero}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FormNombreFecha;
