import React from 'react'
import { useWindowSize } from "../hooks"

const CoinHeader = () => {
    const {width} = useWindowSize()

    return (
        <tr className="border-b">
            <th> </th>
            <th className="px-4"> # </th>
            <th className="text-left"> Coin </th>
            <th> </th>
            <th className="sm:w-32"> {width <= 650 ? "Price" : "Price (usd)"} </th>
            <th className="hidden sm:table-cell"> Price (btc) </th>
            <th> 24h </th>
            <th className="hidden md:table-cell"> 24h Volume </th>
            <th className="hidden sm:table-cell"> Market </th>
            <th> {width <= 650 ? "7d" : "Last 7 Days"} </th>
        </tr>
    )
}

export default CoinHeader