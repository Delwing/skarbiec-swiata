import './GameScreen.css'
import map from '../assets/map.png'
import MapItem from "../components/MapItem.tsx";
import BackArrow from "../assets/back-arrow.svg"
import SmallCoin from "../assets/small-coin.svg"

import {coins} from "../components/coins.ts";
import Coin from "../components/Coin.tsx";
import {itemDefinitions} from "../components/definitions.ts";

function GameScreen() {
    return (
        <div className="game-screen">
            <div className="game-map">
                <div role="button" className="interface-button back-button">
                    <BackArrow/>
                    <span>powrót</span>
                </div>
                <div role="button" className="interface-button coin-button">
                    <span className={"bigger"}>8</span>/15
                    <SmallCoin/>
                </div>
                <img style={{opacity: 1}} src={map} alt="Map"/>
                {coins.map((coin) => (
                    <Coin x={coin.x} y={coin.y} />
                ))}

                {itemDefinitions.map((item) => (
                    <MapItem image={item.image} x={item.x - 10} y={item.y + 30} descriptionImage={item.descriptionImage} descriptionText={item.descriptionText} descriptionTitle={item.descriptionTitle} />
                ))}
            </div>
            <div className="popup"/>
        </div>
    )
}

export default GameScreen
