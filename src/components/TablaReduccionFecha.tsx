import Table from "react-bootstrap/Table";

type Props = {
  fechaNumeros: number[];
  sumaFecha: number;
  reduccionFecha: string | number;
  diaFecha: string | number;
};

const TablaReduccionFecha = ({
  fechaNumeros,
  sumaFecha,
  reduccionFecha,
  diaFecha,
}: Props) => {
  const datosFila1 = [...fechaNumeros, sumaFecha, reduccionFecha];

  return (
    <>
      <h3 className="mt-5 mb-3">Reducción de la fecha</h3>
      <Table striped bordered responsive className="text-center">
        <thead>
          {/* Fila del encabezado con las etiquetas */}
          <tr>
            <th colSpan={2}>Día</th>
            <th colSpan={2}>Mes</th>
            <th colSpan={4}>Año</th>
            <th>Suma</th>
            <th>Reducción</th>
          </tr>
        </thead>
        <tbody>
          {/* Fila con los números de la fecha, suma y reducción */}
          <tr>
            {datosFila1.map((valor, index) => (
              <td key={index}>{valor}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: datosFila1.length - 1 }, (_, index) => (
              <td key={index}></td>
            ))}
            <td>{diaFecha}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TablaReduccionFecha;
