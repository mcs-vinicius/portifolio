import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <Home />
  );
}

export default App;