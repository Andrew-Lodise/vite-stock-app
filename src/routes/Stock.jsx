import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom'
import stocks from '../data/stock_data'

export default function Stock(props) {
  const [stockData, setStockData] = useState()
  const [stockLabels, setStockLabels] = useState()
  const [outOfRequests, setoutOfRequests] = useState(false)
  const params = useParams()

  const symbol = params.symbol
  const name = params.name

  //finding the stock in the data array
  let targetStock = null;
  for(const stock of stocks){
    if (stock.symbol == symbol)
    targetStock = stock
  }

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
    <div className='bg-[#26272B] w-full  text-[#F4F4F4] flex flex-col items-center'>
      <Navbar />
      
      <div className='w-full max-w-[1000px] flex flex-col items-center p-2'>

        <h1 className='text-center text-3xl font-medium flex justify-center gap-4 mt-8'>
          <p>{targetStock.name}</p>
          <p className='text-[#6900FF]'>({symbol})</p>
        </h1>

        <div className='w-full  text-2xl border-[1px] border-[#6900FF] rounded-md shadow-based p-4 my-2'>
          {targetStock.description}
        </div>

        {/** if request limit is reached */}
        {outOfRequests && (
          <div className='w-full  text-2xl flex flex-col gap-y-2 mt-8'>
            <h1 className='w-full border-[1px] border-[#6900FF] rounded-md shadow-based p-4'>
              Sorry, Out of requests for today from Alpha Vantage API, check back tomorrow when more API requests are allowed!
            </h1>
          </div>
        
        )}

        {/** if within reqeust limit */}
        { stockData && stockLabels && (
          <Chart input_data={stockData} input_labels={stockLabels} symbol={symbol.toUpperCase()}/>
        )}
        <Chart symbol={symbol.toUpperCase()}/>

        <Link to='/' className='border-[1px] border-[#6900FF] rounded-md shadow-based p-4 w-fit 
        hover:bg-[#6900FF] hover:text-[#26272B] text-2xl my-4 self-start'>
          Back to Home
        </Link>

      </div>
    </div>
  )
}
