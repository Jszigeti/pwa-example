import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.pwabuilder.com/" target="_blank">
          <img src="PWA_logo.png" className="logo" alt="PWA logo" />
        </a>
      </div>
      <h1>Vite + React PWA</h1>
    </>
  );
}

export default App;
