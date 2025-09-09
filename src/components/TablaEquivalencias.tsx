import Table from "react-bootstrap/Table";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {
  nombreCompleto: string;
  vocales: (number | null)[];
  consonantes: (number | null)[];
  sumaVocales: number;
  sumaConsonantes: number;
  reduccionVocales: number | string;
  reduccionConsonantes: number | string;
};

const TablaEquivalencias = ({
  nombreCompleto,
  vocales,
  consonantes,
  sumaVocales,
  reduccionVocales,
  sumaConsonantes,
  reduccionConsonantes,
}: Props) => {
  // Usamos el mismo breakpoint para activar el modo móvil
  const isMobile = useMediaQuery("(max-width: 767px)");
  const nombreArray = nombreCompleto.split("");

  // Lógica para la vista de tabla normal (escritorio)
  const renderDesktopTable = () => {
    return (
      <div className="d-none d-md-block">
        <Table striped bordered responsive className="text-center">
          <thead>
            <tr>
              <th></th>
              {nombreArray.map((char, index) => (
                <th key={index}>{char.toUpperCase()}</th>
              ))}
              <th></th>
              <th>Suma</th>
              <th>Reducción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Vocales</strong>
              </td>
              {vocales.map((valor, index) => (
                <td key={index}>{valor}</td>
              ))}
              <td></td>
              <td>{sumaVocales}</td>
              <td>{reduccionVocales}</td>
            </tr>
            <tr>
              <td>
                <strong>Consonantes</strong>
              </td>
              {consonantes.map((valor, index) => (
                <td key={index}>{valor}</td>
              ))}
              <td></td>
              <td>{sumaConsonantes}</td>
              <td>{reduccionConsonantes}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };

  // Lógica para la vista transpuesta (móvil)
  const renderMobileTable = () => {
    return (
      <div className="d-block d-md-none">
        <Table striped bordered responsive className="text-center">
          <thead>
            <tr>
              <th>Letra</th>
              <th>Vocales</th>
              <th>Consonantes</th>
            </tr>
          </thead>
          <tbody>
            {nombreArray.map((char, index) => (
              <tr key={index}>
                <th scope="row">{char.toUpperCase()}</th>
                <td>{vocales[index]}</td>
                <td>{consonantes[index]}</td>
              </tr>
            ))}
            {/* Filas para la suma y reducción al final de la tabla */}
            <tr>
              <th colSpan={1} className="text-end">
                Suma
              </th>
              <td colSpan={1}>{sumaVocales}</td>
              <td colSpan={1}>{sumaConsonantes}</td>
            </tr>
            <tr>
              <th colSpan={1} className="text-end">
                Reducción
              </th>
              <td colSpan={1}>{reduccionVocales}</td>
              <td colSpan={1}>{reduccionConsonantes}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <>
      <h3 className="mt-5 mb-3">Equivalencias numéricas</h3>
      {isMobile ? renderMobileTable() : renderDesktopTable()}
    </>
  );
};

export default TablaEquivalencias;
