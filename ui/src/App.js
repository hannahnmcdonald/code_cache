import {HeroUIProvider} from "@heroui/react";
import NavBar from "./components/NavBar/navbar";
import './App.css';

function App() {
  return (
    <HeroUIProvider>
    {/* <div className="App">
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
      </header>
    </div> */}
    <NavBar />
    </HeroUIProvider>
  );
}

export default App;
