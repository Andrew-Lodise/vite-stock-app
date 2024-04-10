import React from 'react'
import { Link } from 'react-router-dom'
import stocks from '../data/stock_data'
import StockItem from './StockItem'
import Chart from './Chart'

export default function Stocks() {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center px-2'>
        <div className=' flex w-full max-w-[1000px] items-center justify-evenly text-3xl mt-8 rounded-md
         font-medium'>
          <p>Name</p>
          <p>Symbol</p>
        </div>

        <div className='w-full flex flex-col'>
        {stocks.map(stock => (
          <div key={stock.symbol} className='w-full flex justify-center'>
            <Link to={`/stocks/${stock.symbol}`} className='w-full max-w-[1000px] flex justify-center
            border-[1px] border-[#F4F4F4] text-2xl m-8 py-2 rounded-md hover:bg-[#F4F4F4] 
            hover:text-[#26272B] hover:scale-[103%] duration-300 ease-in-out shadow-based' >
              <StockItem name={stock.name} symbol={stock.symbol}/>
            </Link>
            
          </div>
        ))}
        </div>

        {/*<Chart symbol='test'/>*/}
      </div>
    </>
  )
}
