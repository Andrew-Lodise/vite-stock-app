import React from 'react'

export default function StockItem(props) {
  const name = props.name
  const symbol = props.symbol

  return (
    <div className='flex w-full max-w-[1000px] justify-evenly my-2'>
      <p>{name}</p>
      <p className='text-[#6900FF] font-medium'>{symbol}</p>
    </div>
  )
}
