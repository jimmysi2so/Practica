import logo from './logo.svg';
import './App.css';
import { DatosProductos, PrimerComponente } from './componentes/DatosProductos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DatosProductos/>
      </header>
    </div>
  );
}

export default App;
