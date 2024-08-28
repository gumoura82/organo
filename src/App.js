import Banner from './components/banner';
import Formulario from './components/formulario/formulario';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario label ="Nome" placeholder="Digite seu nome"/>
      <Formulario label ="Cargo" placeholder="Digite seu cargo"/>
      <Formulario label ="Imagem" placeholder="Coloque sua imagem"/>
    </div>
  );
}

export default App;
