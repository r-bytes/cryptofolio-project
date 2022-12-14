import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/";
import { Account, CoinPage, Home, SignIn, SignUp } from "./pages/";
import axios from "axios";

function App() {
    const [coins, setCoins] = useState([]);
    const [btc, setBtc] = useState([]);
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
            setBtc(response.data.filter(coin => coin.symbol === "btc")[0].current_price)
        })
    }, []);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home coins={coins} btc={btc} />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
                <Route path="/coin/:coinId" element={<CoinPage />}>
                    <Route path=":coinId" />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
