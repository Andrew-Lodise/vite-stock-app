import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom'
import stocks from '../data/stock_data'

export default function Stock(props) {
  const [shortTermStockData, setShortTermStockData] = useState()
  const [shortTermStockLabels, setShortTermStockLabels] = useState()

  const [longTermStockData, setLongTermStockData] = useState()
  const [longTermStockLabels, setLongTermStockLabels] = useState()

  const [outOfRequests, setoutOfRequests] = useState(false)
  
  const params = useParams()

  const symbol = params.symbol
  const name = params.name

  //finding the stock in the data array
  var targetStock = null;
  for(const stock of stocks){
    if (stock.symbol == symbol)
    targetStock = stock
  }

  const shortTermUrl=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=0M2L2ERG67HMZNGI`
  const longTermUrl=`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=0M2L2ERG67HMZNGI`

  useEffect(() => {
    axios.get(shortTermUrl).then((response) => {
      // check if were out of reqeust
      // messes something up when I'm not out of requests (probably becuase response.data['information'] can't be found)
      // yup when you get the correct data the response.data['information'] is undefinded so then change the check to be if it's not undefined, which means there's no more request
      
      if (response.data['Information'] !== undefined){
        setoutOfRequests(true);
        return;
      }

      // only makes second request call if first returns actual information
      // long term data requests
      axios.get(longTermUrl).then((response) =>{

      const timeSeries = response.data['Weekly Adjusted Time Series'];

      let labels = [];
      let data = [];

      Object.entries(timeSeries).forEach(([date, dataEntry]) => {
        labels.push(date);
        data.push(dataEntry['4. close']);
      });

      setLongTermStockData(data.reverse())
      setLongTermStockLabels(labels.reverse())
      }).catch((error) => {
        console.log(error)
        setLongTermStockData({error: "error loading data from Stock.js useEffect (long term reqeusst) (request to alphavantage)"})
      })

      // short term request
      const timeSeries = response.data['Time Series (Daily)'];

      let labels = [];
      let data = [];

      Object.entries(timeSeries).forEach(([date, dataEntry]) => {
        labels.push(date);
        data.push(dataEntry['4. close']);
      });

      setShortTermStockData(data.reverse())
      setShortTermStockLabels(labels.reverse())

    }).catch((error) => {
      console.log(error)
      setShortTermStockData({error: "error loading data from Stock.js useEffect (short term reqeusst) (request to alphavantage)"})
    })
  }, [symbol, outOfRequests])

  return (
    <div className='bg-[#26272B] w-full min-h-screen text-[#F4F4F4] flex flex-col items-center'>
      <Navbar />
      
      <div className='w-full max-w-[1000px] flex flex-col items-center p-2'>

        <h1 className='text-center text-3xl font-medium flex justify-center gap-4 mt-8'>
          <p>{targetStock.name}</p>
          <p className='text-[#6900FF]'>({symbol})</p>
        </h1>

        <div className='size-[201px] bg-green-200 my-4 rounded-md border-[1px] border--[#6900FF]'>
          <img src={targetStock.logo} alt={`${targetStock.name} logo`} 
          className='border-[2px] border-[#6900FF] rounded-md shadow-based'/>
        </div>

        <div className='w-full  text-2xl border-[1px] border-[#6900FF] rounded-md shadow-based p-4 my-2
        hover:scale-[102%] ease-in-out duration-300'>
          {targetStock.description}
        </div>

        {/** if request limit is reached */}
        {outOfRequests && (
          <div className='w-full  text-2xl flex flex-col gap-y-2 mt-8'>
            <h1 className='w-full border-[1px] border-[#6900FF] rounded-md shadow-based p-4 hover:scale-[102%] 
            duration-300 ease-in-out'>
              Sorry, Out of requests for today from Alpha Vantage API, check back tomorrow when more API requests are allowed!
            </h1>
          </div>
        
        )}

        {!outOfRequests && (
          <div className='text-2xl font-medium '>
          Short Term Stock Data - Past 5 Months
        </div>
        )}
        {/** if within reqeust limit */}
        {shortTermStockData && shortTermStockLabels && (
          <Chart input_data={shortTermStockData} input_labels={shortTermStockLabels} symbol={symbol.toUpperCase()}/>
        )}
        {!outOfRequests && (
        <div className='text-2xl font-medium '>
          Long Stock Data - Max 25 Years
        </div>
        )}
        {longTermStockData && longTermStockLabels && (
          <Chart input_data={longTermStockData} input_labels={longTermStockLabels} symbol={symbol.toUpperCase()}/>
        )}
        {/* FOR TESTING <Chart symbol={symbol.toUpperCase()}/>*/}



        
        <Link to='/' className='border-[1px] border-[#6900FF] rounded-md shadow-based p-4 w-fit 
        hover:bg-[#6900FF] hover:text-[#26272B] text-2xl my-4 self-start'>
          Back to Home
        </Link>

      </div>
    </div>
  )
}
