import React from 'react'
import { Link } from 'react-router-dom'
import stocks from '../data/stock_data'
import StockItem from './StockItem'

export default function Stocks() {
  return (
    <>
      <div className='w-full bg-blue-300 flex flex-col items-center justify-center'>
        <div className='bg-blue-500 flex w-full max-w-[1000px] items-center justify-evenly text-2xl'>
          <p>Name</p>
          <p>Symbol</p>
        </div>

        <div className='w-full flex flex-col'>
        {stocks.map(stock => (
          <div key={stock.symbol} className='w-full bg-blue-900 flex justify-center'>
            <Link to={`/stocks/${stock.symbol}`} className='w-full flex justify-center'>
              <StockItem name={stock.name} symbol={stock.symbol} />
            </Link>
            
          </div>
        ))}

        </div>
      </div>
    </>
  )
}
