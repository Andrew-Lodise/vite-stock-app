import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Stock() {
  const [stockData, setStockData] = useState({})
  const params = useParams()

  useEffect(() => {
    axios.get(url).then((res) => {
      setStockData(res.data)
    }).catch((error) => {
      console.log(error)
      setStockData({error: "error loading data from Stock.js useEffect (request to alphavantage)"})
    })
  })

  return (
    <div className='bg-pink-100'>
      <Navbar />
      <h1 className='bg-pink-300 text-center text-2xl'>
        {params.symbol}
      </h1>
    </div>
  )
}
