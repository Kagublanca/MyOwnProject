import ShopItem from "../ShopItem"
import {useState} from "react";
import heroLibrary from "../../libs";


function Shop(){
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
        <div>
            <h1>Your gold: {coin}</h1>
            {state.map((e, index) => {
                return <div>
                <ShopItem heroImage={state[index].heroImage} heroAttack={state[index].heroAttack} heroHealth={state[index].heroHealth} key={index}/>

                <button onClick={()=>{
                    buyHero(index)
                }}>Buy! (£3)</button>
                </div>
          })}
        <button onClick={setShop}>Re-Roll (£1)</button>
        </div>
    )
}

export default Shop;