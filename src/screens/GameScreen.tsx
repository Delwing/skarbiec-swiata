import './GameScreen.css'
import mapImage from '../assets/map.svg?url'
import MapItem from "../components/MapItem.tsx";
import BackArrow from "../assets/back-arrow.svg"
import SmallCoin from "../assets/small-coin.svg"
import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {coins, type CoinDefinition} from "../components/coins.ts"
import Coin from "../components/Coin.tsx"
import {itemDefinitions} from "../components/definitions.ts"

function GameScreen() {
    const navigate = useNavigate()
    const [collectedCoins, setCollectedCoins] = useState(0)
    const [visibleCoins, setVisibleCoins] = useState(coins)
    const [visibleItems, setVisibleItems] = useState(itemDefinitions)
    const [popupVisible, setPopupVisible] = useState(false)
    const [popupText, setPopupText] = useState("")
    const maxCoins = coins.length
    const gameScreenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function updateScale() {
            const scale = Math.min(window.innerHeight / 1010, window.innerWidth / 1656);
            if (gameScreenRef.current) {
                gameScreenRef.current.style.setProperty('--scale', scale.toString());
            }
        }

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const handleCoinClick = (coin: CoinDefinition) => {
        setVisibleCoins((prev) => prev.filter((c) => c.id !== coin.id))
        setCollectedCoins((prev) => prev + 1)
        setPopupText(coin.descriptionText)
        setPopupVisible(true)
    }

    const handleItemClick = (index: number) => {
        const item = visibleItems[index]
        setVisibleItems((prev) => prev.filter((_, i) => i !== index))
        setPopupText(item.descriptionText)
        setPopupVisible(true)
    }

    return (
        <div className="game-screen" ref={gameScreenRef}>
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
                <img src={mapImage} alt="Map" />
                {visibleCoins.map((coin) => (
                    <Coin key={coin.id} {...coin} onClick={() => handleCoinClick(coin)}/>
                ))}

                {visibleItems.map((item, index) => (
                    <MapItem key={index} image={item.image} x={item.x} y={item.y}
                             descriptionImage={item.descriptionImage}
                             descriptionText={item.descriptionText}
                             descriptionTitle={item.descriptionTitle}
                             onClick={() => handleItemClick(index)}/>
                ))}
            </div>
            <div className="popup" style={{display: popupVisible ? 'block' : 'none'}}>
                <div className="header">
                    Bonus!
                </div>
                <div className="content">{popupText}</div>
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
