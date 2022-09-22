import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Sparklines, SparklinesLine } from "react-sparklines"
import { useWindowSize } from "../hooks"
import { useAuthContext } from "../context/AuthContext"
import { db } from "../firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"

const CoinItem = ({coin, btc}) => {
    const { width } = useWindowSize()
    const [savedCoin, setSavedCoin] = useState(false);
    const { user } = useAuthContext()

    const coinPath = doc(db, "users", `${user?.email}`)
    
    const saveCoin = async () => {
        if (user?.email) {
            setSavedCoin(true)

            await updateDoc(coinPath, {
                watchList: arrayUnion({
                    id: coin.id,
                    name: coin.name,
                    image: coin.image,
                    rank: coin.market_cap_rank,
                    symbol: coin.symbol
                })
            })
        } else {
            alert("Please sign in to save coins to your watchlist")
        }
    }


    return (
        <tr className="h-20 border-b overflow-hidden">
            <td onClick={saveCoin}>
                {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
            </td>
            <td> {coin.market_cap_rank} </td>
            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                        <img className="w-6 mr-2 rounded-full" src={coin.image} alt={coin.name} />
                        <p className="hidden sm:table-cell sm:mr-8"> {coin.name} </p>
                    </div>
                </Link>
            </td>
            <td> {coin.symbol.toUpperCase()} </td>
            <td> ${width <= 650 ? (coin.current_price.toFixed(0).toLocaleString()) : (coin.current_price.toLocaleString())} </td>
            <td className="hidden sm:table-cell"> {(coin.current_price / btc ).toFixed(8)} </td>
            <td>
                {coin.price_change_percentage_24h < 0 
                    ? (<p className="text-red-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                    : (<p className="text-green-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                }
            </td>
            <td className="w-44 hidden md:table-cell"> ${coin.total_volume.toLocaleString()} </td>
            <td className="w-44 hidden sm:table-cell"> ${coin.market_cap.toLocaleString()} </td>
            <td>
                <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine color="teal" />
                </Sparklines>
            </td>
            <td> {} </td>
        </tr>

    )
}

export default CoinItem