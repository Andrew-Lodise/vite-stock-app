import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart'

export default function Stock(props) {
  const [stockData, setStockData] = useState()
  const [stockLabels, setStockLabels] = useState()
  const [outOfRequests, setoutOfRequests] = useState(false)
  const params = useParams()

  const symbol = params.symbol
  const name = params.name

  const url=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=0M2L2ERG67HMZNGI`

  useEffect(() => {
    axios.get(url).then((response) => {
      // check if were out of reqeust
      if (response.data['Information'][0] == 'T'){
        setoutOfRequests(true);
        return;
      }

      const timeSeries = response.data['Time Series (Daily)'];

      const labels = [];
      const data = [];

      Object.entries(timeSeries).forEach(([date, dataEntry]) => {
        labels.push(date);
        data.push(dataEntry['4. close']);
      });

      setStockData(data.reverse())
      setStockLabels(labels.reverse())

    }).catch((error) => {
      console.log(error)
      setStockData({error: "error loading data from Stock.js useEffect (request to alphavantage)"})
    })
  }, [symbol])

  return (
    <div className='bg-[#26272B] w-full h-screen text-[#F4F4F4]'>
      <Navbar />
      
      <div className='w-full flex flex-col items-center p-2'>

        <h1 className='text-center text-3xl font-medium flex justify-center gap-4 my-8'>
          <p>{name}</p>
          <p className='text-[#6900FF]'>({symbol})</p>
        </h1>

        {/** if request limit is reached */}
        {outOfRequests && (
          <h1 className='w-full max-w-[1000px] border-[1px] border-[#6900FF] rounded-md text-2xl p-4'>
            Sorry, Out of requests for today from Alpha Vantage API, check back tomorrow when more API requests are allowed!
          </h1>
        )}

        {/** if within reqeust limit */}
        { stockData && stockLabels && (
          <Chart input_data={stockData} input_labels={stockLabels} symbol={symbol.toUpperCase()}/>
        )}

      </div>
    </div>
  )
}
