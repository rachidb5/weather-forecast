import logo from './logo.svg';
import './App.less';
import { HiMagnifyingGlass } from 'react-icons/hi2'

function App() {
  return (
    <div className="App">
     <h1>Previsão do tempo</h1>
      <form action="/" method="GET" class="form">
        <input type="search" placeholder="Insira aqui o nome da cidade" class="search-field" />
        <button type="submit" class="search-button">
          <HiMagnifyingGlass />
        </button>
      </form>
      <h2>Capitais</h2>
    </div>
  );
}

export default App;
