import React from 'react'

export default function StockItem(props) {
  const name = props.name
  const symbol = props.symbol
  const logo = props.logo

  return (
    <div className='flex w-full justify-evenly items-center'>
      <p className=' w-[150px] text-center'>{name}</p>
      <p className=' w-[150px] text-[#6900FF] text-center font-medium'>{symbol}</p>
      <div className='w-[150px] flex justify-center'>
        <img src={logo} alt="logo" className=' h-[50px]'/>
      </div>
    </div>
  )
}
