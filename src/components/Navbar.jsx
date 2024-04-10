import React from 'react'
import { Link } from 'react-router-dom' 
import { IoStatsChartSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='w-full flex items-center py-2 text-5xl hover:bg-gray-900 rounded-md'>
      <Link to='/' className='text-center w-full flex items-center justify-center'>
        <p className='font-bold'>
          Stock Lookup
        </p>
        <IoStatsChartSharp className='mx-2 text-[#6900FF]'/>
      </Link>
    </div>
  )
}