import {HeroUIProvider} from "@heroui/react";
import NavBar from "./components/NavBar/navbar";
import Notes from "./components/Notes/notes";
import './App.css';

function App() {
  return (
    <HeroUIProvider>
      <div className="app">
        <NavBar />
        <Notes />
      </div>
    </HeroUIProvider>
  );
}

export default App;