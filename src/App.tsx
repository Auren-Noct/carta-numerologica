import { Footer, FormNombreFecha, Header } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FormNombreFecha />
      </main>
      <Footer />
    </div>
  );
}

export default App;
