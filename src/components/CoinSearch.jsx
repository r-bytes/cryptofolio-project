import React, { useState } from 'react'
import CoinHeader from "./CoinHeader";
import CoinItem from "./CoinItem"

const CoinSearch = ({coins, btc}) => {
    const [searchValue, setSearchValue] = useState("");    

    return (
        <div className="rounded-div my-4">
            <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
                <h1 className="font-bold my-2"> Search Coin </h1>
                <form>
                    <input
                        type="text"
                        className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
                        placeholder="Search a Coin"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </div>

            <table className="w-full border-collapse text-center">
                <thead>
                    <CoinHeader />
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