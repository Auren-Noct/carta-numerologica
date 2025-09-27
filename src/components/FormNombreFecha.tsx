import { useEffect, useState } from "react";
import { useCalculosNumerologicos } from "../hooks/useCalculosNumerologicos";
import TablaEquivalencias from "./TablaEquivalencias";
import TablaReduccionFecha from "./TablaReduccionFecha";
import TablaTiraPrincipal from "./TablaTiraPrincipal";
import TablaAbundanciaEscasez from "./TablaAbundanciaEscasez";
import TablaCompatibilidad from "./TablaCompatibilidad";
import TablaConversion from "./TablaConversion";
import CTA from "./CTA";
import { CalculosProvider } from "../context/CalculosContext";
import FormInput from "./FormInput";

const FormNombreFecha = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [fecha, setFecha] = useState("");
  const [fechaCompanero, setFechaCompanero] = useState("");
  const [mostrarCalculos, setMostrarCalculos] = useState(false);

  const datosCalculados = useCalculosNumerologicos(
    nombreCompleto,
    fecha,
    fechaCompanero
  );

  useEffect(() => {
    const valorPersistido = localStorage.getItem("mostrarCalculos");
    if (valorPersistido !== null) {
      setMostrarCalculos(JSON.parse(valorPersistido));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mostrarCalculos", JSON.stringify(mostrarCalculos));
  }, [mostrarCalculos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto my-12 p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <FormInput
          id="formNombre"
          label="Nombre Completo:"
          type="text"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          placeholder="Ej.: Ramón Félix Martorell"
          required
        />
        <FormInput
          id="formFecha"
          label="Fecha:"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <FormInput
          id="formFechaCompanero"
          label="Fecha de la pareja (Opcional):"
          type="date"
          value={fechaCompanero}
          onChange={(e) => setFechaCompanero(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
        >
          Generar Tablas
        </button>
      </form>

      {datosCalculados && (
        <CalculosProvider value={datosCalculados}>
          <TablaTiraPrincipal />
          <TablaAbundanciaEscasez />
          {datosCalculados.reduccionFechaCompanero && <TablaCompatibilidad />}
          <CTA />
          <div className="mt-16 mb-8 flex items-center">
            <label
              htmlFor="toggleCalculos"
              className="inline-flex items-center cursor-pointer"
            >
              <input
                id="toggleCalculos"
                type="checkbox"
                className="sr-only peer"
                checked={mostrarCalculos}
                onChange={(e) => setMostrarCalculos(e.target.checked)}
              />
              <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900">
                Mostrar cálculos adicionales
              </span>
            </label>
          </div>
          {mostrarCalculos && (
            <>
              <TablaEquivalencias />
              <TablaReduccionFecha />
              <TablaConversion />
            </>
          )}
        </CalculosProvider>
      )}
    </div>
  );
};

export default FormNombreFecha;
