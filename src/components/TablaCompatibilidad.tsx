import Table from "react-bootstrap/Table";

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
    <>
      <h3 className="mt-5 mb-3">Compatibilidad de pareja</h3>
      <Table striped bordered responsive className="text-center">
        <thead>
          <tr>
            <th></th>
            <th>Consultante</th>
            <th>Pareja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Camino de vida</strong>
            </td>
            <td>{reduccionFecha}</td>
            <td>{reduccionFechaCompanero}</td>
          </tr>
          <tr>
            <td>
              <strong>Día de nacimiento</strong>
            </td>
            <td>{diaFecha}</td>
            <td>{diaCompanero}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TablaCompatibilidad;
