import Table from "react-bootstrap/Table";

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
    <>
      <h3 className="mt-5 mb-3">Abundancia y escasez</h3>
      <Table striped bordered responsive className="text-center">
        <thead>
          <tr>
            <td>
              <strong>Dígito</strong>
            </td>
            {numeros.map((num) => (
              <th key={num}>{num}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Cantidad</strong>
            </td>
            {numerosFrecuencia.map((conteo, index) => {
              let className = "";
              if (numerosMasAltos.includes(index)) {
                className = "bg-danger text-light"; // Rojo para los más altos
              } else if (numerosMasBajos.includes(index)) {
                className = "bg-success text-light"; // Verde para los más bajos
              }
              return (
                <td key={index} className={className}>
                  {conteo}
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TablaAbundaciaEscasez;
