import React from 'react'
import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <div className='w-full bg-green-50 flex items-center'>
      <Link to='/' className=' text-3xl text-center w-full bg-green-300'>
        STOCK APP
      </Link>
    </div>
  )
}