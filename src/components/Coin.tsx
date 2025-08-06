import type {CSSProperties} from 'react'

import CoinImage from "../assets/coin.webp"

export interface CoinDefinition {
    x: number
    y: number
}

function Coin({
                  x,
                  y,
              }: CoinDefinition) {
    const style: CSSProperties = {
        position: 'absolute',
        left: x,
        top: y,
    }


    return (
        <div role={"button"} style={style}>
            <img src={CoinImage} alt={"coin"}/>
        </div>
    )
}

export default Coin
