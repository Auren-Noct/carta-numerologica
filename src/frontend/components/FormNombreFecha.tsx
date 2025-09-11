import { useState } from "react";
import { useCalculosNumerologicos } from "../hooks/useCalculosNumerologicos";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    <Container className="my-5">
      <h1 className="mb-4 text-center">Carta Numerológica</h1>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre Completo:</Form.Label>
          <Form.Control
            type="text"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFecha">
          <Form.Label>Fecha:</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaCompanero">
          <Form.Label>Fecha de la pareja (Opcional):</Form.Label>
          <Form.Control
            type="date"
            value={fechaCompanero}
            onChange={(e) => setFechaCompanero(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Generar Tablas
        </Button>
      </Form>

      {datosCalculados && (
        <>
          <TablaEquivalencias {...datosCalculados} />
          <TablaReduccionFecha
            fechaNumeros={datosCalculados.fechaNumeros}
            sumaFecha={datosCalculados.sumaFecha}
            reduccionFecha={datosCalculados.reduccionFecha}
            diaFecha={datosCalculados.diaFecha}
          />
          <TablaTiraPrincipal {...datosCalculados} />
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
    </Container>
  );
};

export default FormNombreFecha;
