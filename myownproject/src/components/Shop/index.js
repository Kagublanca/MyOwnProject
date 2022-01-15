import ShopItem from "../ShopItem"
import {useState} from "react";
import heroLibrary from "../../libs";


function Shop(){
    const [state, setState] = useState([]);

    function getRandomHero(){
        const randomNumber = Math.floor(Math.random() * 2);
        const randomHero = heroLibrary[randomNumber];
        return randomHero;
    }

    function setShop(){
        setState([getRandomHero(), getRandomHero(), getRandomHero()])
        console.log(state)
        }

        function clickHero(){
            console.log("HELLO!!!!!")
        }

    return(
        <div>
            {state.map((e, index) => {
                return <ShopItem heroImage={state[index].heroImage} heroAttack={state[index].heroAttack} heroHealth={state[index].heroHealth} onClick={clickHero} />
            })}
        <button onClick={setShop}>Re-Roll</button>
        </div>
    )
}

export default Shop;