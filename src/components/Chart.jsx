import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';
import { example_MSFT_data, example_MSFT_labels } from '../data/example_data';

export default function Chart(props) {

  const data = {
    labels: props.input_labels,
    //labels: example_MSFT_labels,
    datasets: [
      {
        label: `${props.symbol} Chart`,
        data: props.input_data,
        //data: example_MSFT_data,
        fill: true,
        backgroundColor: 'rgba(105,0,255, .7)',
        borderColor: 'rgb(244,244,244)',
        tension: .5,
      }
    ]
  }
  const options = {
    maintainAspectRatio: false, // Set to false to allow manual adjustment of aspect ratio
    aspectRatio: 2, // Adjust the aspect ratio to control the height of the chart
    borderWidth: 2,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)', // Adjust legend label color
          font: {
            size: 24 // Adjust legend label font size
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(244,244,244, .5)' 
        },
        ticks: {
          color: 'rgba(244,244,244, .5)', 
          font: {
            size: 16 
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(244,244,244, .5)' 
        },
        ticks: {
          color: 'rgba(244,244,244, .5)', 
          font: {
            size: 16 
          }
        }
      }
    }
  }

  return (
    <div className='w-full flex items-center justify-center h-[300px] md:h-[550px] bg-[#26272B]
    border-[1px] border-[#6900FF] rounded-md shadow-based my-2 py-2 hover:shadow-basedHover
    duration-300 ease-in-out'>
      <Line data={data} options={options} className='w-full max-w-[1000px] h-full]'/>
    </div>
  )
}
