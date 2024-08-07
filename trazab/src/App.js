import logo from "./logo.svg";
import "./App.css";
import Formulario from "./Shared/Formulario";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <body>
          <div>
            <Formulario />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
