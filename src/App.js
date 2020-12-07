import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        Coba ENV
        <small>Nama: <b>{env.REACT_APP_NAMA}</b> </small>
        <small>Mode: <b>{env.REACT_APP_TINGKAT}</b> </small>
      </header>
    </div>
  );
}

export default App;
