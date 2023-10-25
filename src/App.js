import './App.css'
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
      <Footer/>
    </div>
  );
}

export default App;
