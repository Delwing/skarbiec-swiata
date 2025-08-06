import './GameScreen.css'
import Map from '../assets/map.svg'
import MapItem from "../components/MapItem.tsx";
import BackArrow from "../assets/back-arrow.svg"
import SmallCoin from "../assets/small-coin.svg"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {coins} from "../components/coins.ts"
import Coin from "../components/Coin.tsx"
import {itemDefinitions} from "../components/definitions.ts"

function GameScreen() {
    const navigate = useNavigate()
    const [collectedCoins, setCollectedCoins] = useState(0)
    const [visibleCoins, setVisibleCoins] = useState(coins)
    const [popupVisible, setPopupVisible] = useState(false)
    const maxCoins = coins.length

    const handleCoinClick = (index: number) => {
        setVisibleCoins((prev) => prev.filter((_, i) => i !== index))
        setCollectedCoins((prev) => prev + 1)
        setPopupVisible(true)
    }

    return (
        <div className="game-screen">
            <div className="game-map">
                <div role="button" className="interface-button back-button" onClick={() => navigate('/') }>
                    <BackArrow/>
                    <span>powrót</span>
                </div>
                <div role="button" className="interface-button coin-button">
                    <span className={"text"}>
                    <span className={"bigger"}>{collectedCoins}</span><span className={"smaller"}>/{maxCoins}</span>
                    </span>
                    <SmallCoin/>
                </div>
                <Map/>
                {visibleCoins.map((coin, index) => (
                    <Coin key={index} x={coin.x} y={coin.y} onClick={() => handleCoinClick(index)}/>
                ))}

                {itemDefinitions.map((item) => (
                    <MapItem image={item.image} x={item.x - 10} y={item.y + 30} descriptionImage={item.descriptionImage}
                             descriptionText={item.descriptionText} descriptionTitle={item.descriptionTitle}/>
                ))}
            </div>
            <div className="popup" style={{display: popupVisible ? 'block' : 'none'}}>
                <div className="header">
                    Bonus!
                </div>
                <div className={"footer"}>
                    <div role={"button"} className={"popup-button"} onClick={() => setPopupVisible(false)}>
                        Graj dalej
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameScreen
