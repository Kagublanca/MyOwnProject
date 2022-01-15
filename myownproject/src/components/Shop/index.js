import ShopItem from "../ShopItem"


function Shop({state, coin, buyHero, setShop}){
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