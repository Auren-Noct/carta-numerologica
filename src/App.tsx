import Footer from "./components/Footer";
import FormNombreFecha from "./components/FormNombreFecha";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <FormNombreFecha />
      </main>
      <Footer />
    </div>
  );
}

export default App;
