import React from 'react'

export default function StockItem(props) {
  const name = props.name
  const symbol = props.symbol

  return (
    <div className=' bg-blue-800 flex w-full max-w-[1000px] justify-evenly my-1'>
      <p>{name}</p>
      <p>{symbol}</p>
    </div>
  )
}
