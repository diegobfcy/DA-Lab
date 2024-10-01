import './App.css';
import spidermanImage from './assets/spiderman.webp';
 
//Experiencia 1,2
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spiderman</h1>
        <img
          src={spidermanImage}
          alt="Spiderman"
          style={{ width: "300px", borderRadius: "8px" }}
        />
        <p>
          Spiderman es un superhéroe creado por el escritor Stan Lee y el
          dibujante Steve Ditko. Apareció por primera vez en Amazing Fantasy
          #15 (1962). Su identidad secreta es Peter Parker, un joven
          estudiante que adquiere poderes sobrehumanos tras ser mordido por una
          araña radiactiva.
        </p>
        <a
          className="App-link"
          href="https://es.wikipedia.org/wiki/Spider-Man"
          target="_blank"
          rel="noopener noreferrer"
        >
          Más sobre Spiderman
        </a>
      </header>
    </div>
  );
}

export default App;
