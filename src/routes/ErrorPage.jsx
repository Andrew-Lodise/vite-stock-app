import React from 'react'
import Navbar from '../components/Navbar'

export default function ErrorPage() {
  return (
    <div className='bg-[#26272B] w-full h-screen text-[#F4F4F4] flex flex-col items-center'>
      <Navbar />
      <div className='w-full flex justify-center max-w-[1000px] text-2xl
      border-[1px] border-[#6900FF] m-2 mt-8 p-4 rounded-md shadow-based'>
        Sorry this is an invalid URL. Click the title at the top to return to the projects homepage.
      </div>
    </div>
  )
}
