import React, {useState} from 'react'
import HourlyForecast from './HourlyForecast';
import WindSpeed from './WindSpeed';

const DailyForecast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='font-cabin absolute top-16 right-10 w-2/3 h-64 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl mt-5'>
      <div className='flex flex-col'>
        {/* txt 1 */}
        <div className='drop-shadow-lg mt-1 ml-2 font-cabin font-light text-white'>
            <h1 className='text-lg'>Considerable cloudiness with a couple of showers</h1>
        </div>
        {/* White line */}
        <div class="px-2 mt-1 border-opacity-50 border-b w-full border-white"></div>
        {/* Hourly Forecast */}
        <HourlyForecast/>
        {/* White line */}
        <div class="px-2 mt-1 border-opacity-50 border-b w-full border-white"></div>
        {/* Wind speed */}
        <WindSpeed/>
      </div>
    </div>
  )
}

export default DailyForecast
