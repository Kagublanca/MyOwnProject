function PlayerItem({image, attack}){
    return (
        <li>
            <img src={image} width={"70px"}alt="" />
            <p>{attack}</p>
        </li>
    )
}

export default PlayerItem;