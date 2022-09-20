import React from 'react'
import { CoinSearch } from "../components/"

const Home = ({coins, btc}) => {
  return (
    <div>
        <CoinSearch coins={coins} btc={btc} />
    </div>
  )
}

export default Home