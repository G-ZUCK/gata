import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import C03doblecontador from './componentes/C03doblecontador';
import C04variable from './componentes/C04variable';
import C05operador from './componentes/C05operador';
import C06matriz from './componentes/C06matriz';

function App() {
  return (
    <div>
      <h3>Primer Componente</h3>

      <C01componente />
      <h3>Segundo Componente</h3>
      <C02contador />
      <h3>Tercer Componente</h3>
      <C03doblecontador />
      <h1>Cuarto Componente</h1>
      <C04variable xVariable= "hola mundo"/>
      <h1>Quinto Componente</h1>
      <C05operador/>
      <h1>Sexto Componente</h1>
      <C06matriz/>

    </div>
  );
}

export default App;
