import type {CSSProperties} from 'react'

import CoinImage from "../assets/coin.webp"
import type {CoinDefinition} from "./coins.ts"

interface CoinProps extends CoinDefinition {
    onClick?: () => void
}

function Coin({
                  id,
                  x,
                  y,
                  onClick,
              }: CoinProps) {
    const style: CSSProperties = {
        position: 'absolute',
        left: x,
        top: y,
    }


    return (
        <div role={"button"} style={style} onClick={onClick}>
            <span className={'technical-id'}>
                {id}
            </span>
            <img src={CoinImage} alt={"coin"}/>
        </div>
    )
}

export default Coin
