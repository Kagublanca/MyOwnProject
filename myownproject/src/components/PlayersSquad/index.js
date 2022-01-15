import PlayerItem from "../PlayerItem"
function PlayersSquad({squad, sellhero}){


    return(
        <div>
     <h1>THIS IS YOUR SQUAD:</h1>
        <ul>{squad.map((item, index)=>{
           return  <div>
             <PlayerItem image={squad[index].heroImage} attack={squad[index].heroAttack}/>
            <button onClick={()=>{
                sellhero(index);
            }}>Sell (+£1)</button>
            </div>
        })}</ul>
     </div>
     )
}


export default PlayersSquad