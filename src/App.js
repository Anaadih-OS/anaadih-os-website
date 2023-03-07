import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Website in currently in development</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/Anaadih-OS/anaadih-os-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>Contribute in development</code>
        </a>
      </header>
    </div>
  );
}

export default App;
