import React from 'react'
import Chart from './Chart'

const ShortTermAnalysis = (props) => {
  let data = [] // going to be an array of nums
  let labels = props.labels

  if(props.data != undefined){
    for (let i = 0; i < props.data.length; i++){
      data.push(parseFloat(props.data[i]))
    }
  }
  else{
    return
  }
  


  return (
    <div className='w-full h- bg-gray-900 flex justify-center items-center flex-col py-8'>
      <div name='container' className=' w-full max-w-[500px] grid grid-cols-1 grid-rows-5 text-2xl border-[1px] border-[#6900ff]
      rounded-md '>
        <div className='group grid grid-cols-2 grid-rows-1 border-b-[1px] border-[#6900ff]'>
          <span className=' text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            Earliest
          </span>
          <span className='text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            ${data[0]}
          </span>
        </div>

        <div className='group grid grid-cols-2 grid-rows-1 border-b-[1px] border-[#6900ff]'>
          <span className=' text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            Most Recent
          </span>
          <span className='text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            ${data[data.length-1]}
          </span>
        </div>


        <div className='group grid grid-cols-2 grid-rows-1 border-b-[1px] border-[#6900ff]'>
          <span className=' text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            Change ($)
          </span>
          <span className='text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            ${(data[data.length -1] -data[0]).toFixed(2)}
          </span>
        </div>

        <div className='group grid grid-cols-2 grid-rows-1 border-b-[1px] border-[#6900ff]'>
          <span className=' text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            Change (%)
          </span>
          <span className='text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            %{(((data[data.length -1] - data[0])/data[0]) * 100).toFixed(2)}
          </span>
        </div>
        <div className='group grid grid-cols-2 grid-rows-1 border-b-[1px] border-[#6900ff]'>
          <span className=' text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            Average
          </span>
          <span className='text-center group-hover:text-[#6900FF] duration-300 ease-in-out
           cursor-default'>
            %{(((data[data.length -1] - data[0])/data[0]) * 100).toFixed(2)}
          </span>

        </div>
      </div>
    </div>
  )
}

export default ShortTermAnalysis