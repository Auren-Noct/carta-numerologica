import Footer from "./components/Footer";
import FormNombreFecha from "./components/FormNombreFecha";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FormNombreFecha />
      </main>
      <Footer />
    </div>
  );
}

export default App;
