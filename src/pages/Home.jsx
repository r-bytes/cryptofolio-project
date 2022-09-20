import React from 'react'
import { CoinSearch, Trending } from "../components/"

const Home = ({coins, btc}) => {
  return (
    <div>
        <CoinSearch coins={coins} btc={btc} />
        <Trending />
    </div>
  )
}

export default Home