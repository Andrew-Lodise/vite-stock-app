import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';
import { example_MSFT_data, example_MSFT_labels } from '../data/example_data';

export default function Chart(props) {

  const data = {
    //labels: props.input_labels,
    labels: example_MSFT_labels,
    datasets: [
      {
        label: `${props.symbol} Chart`,
        //data: props.input_data,
        data: example_MSFT_data,
        fill: true,
        backgroundColor: 'rgba(105,0,255, .7)',
        borderColor: 'rgb(244,244,244)',
        tension: .5,
      }
    ]
  }

  const options = {
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
    <div className='w-full flex items-center justify-center h-[500px] bg-[#26272B]'>
      <Line data={data} options={options} className='w-full max-w-[1000px] h-full]'/>

    </div>

  )
}
