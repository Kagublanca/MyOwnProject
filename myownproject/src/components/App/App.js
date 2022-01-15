import './App.css';
import Header from "../Header"
import {useReducer} from "react";
import Shop from "../Shop"

function App() {
  const initialStateSquad = [{animal : "Sheep", attack: 25, health : 1}];
  const [state, dispatch] = useReducer(initialStateSquad);


  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
