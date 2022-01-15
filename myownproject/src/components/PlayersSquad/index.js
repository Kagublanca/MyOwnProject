import {useState} from "react"

function PlayersSquad({squad}){
    const [state, setState] = useState([])
    return(
        <div>
     <h1>THIS IS YOUR SQUAD:</h1>
     <p>{squad}</p>
     </div>
     )
}


export default PlayersSquad