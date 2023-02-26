import './App.css';
import BarraFixa from './Components/BarraFixa';
import BarraConteudo from './Components/BarraConteudo';

function App() {
  return (
    <div className='container'>
      <div className='barra_fixa'>
        <BarraFixa/>
      </div>
      <div className='barra_conteudo'>
        <BarraConteudo/>
      </div>
    </div>
  );
}

export default App;
