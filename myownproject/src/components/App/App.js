import './App.css';
import Header from "../Header"
import Shop from "../Shop/"
import PlayersSquad from "../PlayersSquad"
import heroLibrary from '../../libs';
import {useState} from "react"

function App() {
    const [state, setState] = useState([]);
    const [coin, setCoins] = useState(10);
    const [squad, setSquad] = useState([]);


    function getRandomHero(){
        const randomNumber = Math.floor(Math.random() * 2);
        const randomHero = heroLibrary[randomNumber];
        return randomHero;
    }

    function setShop(){
        if(coin >= 1){
            setCoins(coin - 1);
        return setState([getRandomHero(), getRandomHero(), getRandomHero()])
        }
        return;
    }

        function buyHero(index){
            if(coin >= 3){
                setCoins(coin - 3)
                setSquad([...squad, state[index]]);
                return setState([...state.slice(0, index), ...state.slice(index + 1)])
            }
            return;
        }

return(
    <div className="App">
      <Header />
      <Shop />
      <PlayersSquad squad={[1,2,3]}/>
    </div>
  );
}

export default App;
