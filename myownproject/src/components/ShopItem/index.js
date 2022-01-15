function ShopItem({heroImage, heroAttack, heroHealth}){
    return (
        <div>
        <img src={heroImage} width="80px" alt="" />
        <p>{heroHealth}</p>
        <p>{heroAttack}</p>
        </div>
    )
}

export default ShopItem