import Table from "react-bootstrap/Table";

type Props = {
  diaFecha: string | number;
  reduccionDia: string | number;
  sumaFecha: number;
  reduccionFecha: string | number;
  sumaVocales: number;
  reduccionVocales: string | number;
  sumaConsonantes: number;
  reduccionConsonantes: string | number;
  sumaTemperamento: string | number;
  reduccionTemperamento: string | number;
  sumaMision: number;
  reduccionMision: string | number;
  sumaMetaFinal: number;
  reduccionMetaFinal: string | number;
};

const TablaTiraPrincipal = ({
  diaFecha,
  reduccionDia,
  sumaFecha,
  reduccionFecha,
  sumaVocales,
  reduccionVocales,
  sumaConsonantes,
  reduccionConsonantes,
  sumaTemperamento,
  reduccionTemperamento,
  sumaMision,
  reduccionMision,
  sumaMetaFinal,
  reduccionMetaFinal,
}: Props) => {
  const filas = [
    {
      label: "Día de nacimiento",
      suma: diaFecha,
      reduccion: reduccionDia,
    },
    {
      label: "Camino de vida o sendero",
      suma: sumaFecha,
      reduccion: reduccionFecha,
    },

    {
      label: "Camino del alma",
      suma: sumaVocales,
      reduccion: reduccionVocales,
    },
    {
      label: "Personalidad",
      suma: sumaConsonantes,
      reduccion: reduccionConsonantes,
    },
    {
      label: "Temperamento",
      suma: sumaTemperamento,
      reduccion: reduccionTemperamento,
    },
    {
      label: "Misión",
      suma: sumaMision,
      reduccion: reduccionMision,
    },
    {
      label: "Meta Final",
      suma: sumaMetaFinal,
      reduccion: reduccionMetaFinal,
    },
  ];

  return (
    <>
      <h3 className="mt-5 mb-3">Tira principal</h3>
      <Table striped bordered responsive className="text-center">
        <thead>
          <tr>
            <th></th>
            <th>Suma</th>
            <th>Reducción</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <tr key={index}>
              <td>
                <strong>{fila.label}</strong>
              </td>
              <td>{fila.suma}</td>
              <td>{fila.reduccion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TablaTiraPrincipal;
