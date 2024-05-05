import React from 'react'
import TomorrowForecast from './TomorrowForecast'

const WeeklyForecast = () => {
  return (
    <div className='drop-shadow-lg font-cabin text-white absolute bottom-10 right-10 w-2/5 h-64 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl'>
        {/* 5 day forecast */}
      <div className='font-cabin text-lg mt-2 ml-3'>
        <h1>5-day Forecast</h1>
      </div>
      <div class="px-2 mt-1 mb-2 border-opacity-50 border-b w-full border-white"></div>
      {/* Daily */}
      <div className='overflow-hidden justify-between'>
        <TomorrowForecast/>
        <TomorrowForecast/>
        <TomorrowForecast/>
        <TomorrowForecast/>
        <TomorrowForecast/>
      </div>
    </div>
  )
}

export default WeeklyForecast
