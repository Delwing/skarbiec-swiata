import './GameScreen.css'
import map from '../assets/map.svg'
import MapItem from "../components/MapItem.tsx";

import Totem from "../assets/items/totem.svg"

function GameScreen() {
    return (
        <div className="game-screen">
            <div className="game-map">
                <img src={map} alt="Map"/>

                <MapItem image={Totem} x={255} y={72} descriptionImage={'tot'} descriptionText={'tot'} descriptionTitle={'tot'} />


            </div>
            <div className="popup"/>
        </div>
    )
}

export default GameScreen
