import React, { useState } from 'react'
import CoinItem from "./CoinItem"
import { useWindowSize } from "../hooks"

const CoinSearch = ({coins, btc}) => {
    const [searchValue, setSearchValue] = useState("");
    const {width} = useWindowSize()
    const textInputClass = "w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl outline-none focus:border-accent"

    return (
        <div className="rounded-div my-4">
            <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
                <h1 className="font-bold my-2"> Search Coin </h1>
                <form>
                    <input
                        type="text"
                        className={textInputClass}
                        placeholder="Search a Coin"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </div>

            <table className="w-full border-collapse text-center">
                <thead>
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
                </thead>
                <tbody>
                    {/* eslint-disable-next-line array-callback-return */}
                    {coins.filter(value => {
                        if (searchValue === "") {
                            return value

                        } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return value

                        } else if (value.symbol.toLowerCase().includes(searchValue.toLowerCase())) {
                            return value
                        }
                    }).map(coin => (
                        <CoinItem key={coin.id} coin={coin} btc={btc} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CoinSearch