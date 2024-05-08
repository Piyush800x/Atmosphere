import React, {useState, useEffect} from 'react'
import RainyIcon from '../assets/icons/rainy.svg'

const Summary = ({currTemp, location, time, minTemp, maxTemp}) => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
    // getData()
    // fetchHourlyForecast()
    // bg-white bg-opacity-10 backdrop-blur-lg
  return (
    <div className='absolute bottom-10 left-10 w-96 h-64 rounded-3xl'>
      {/* 12 C and cloud */}
      <div className='flex flex-row font-inter text-white'>
        {/* 12 c */}
        <div className='ml-2 mt-2'>
          <h1 className='font-bold text-9xl'>{currTemp}°C</h1>
        </div>
        {/* Cloud */}
        <div className='flex ml-4 mt-2'>
          <img src={RainyIcon}></img>
        </div>
      </div>
      {/* Tokyo, Japan */}
      <div className='mt-5 flex font-inter text-white justify-start'>
        <h1 className='ml-4 text-4xl font-bold'>Tokyo, Japan</h1>
      </div>
      {/* 04:00 | H:20° L:11° */}
      <div>
        <div className='font-inter text-white justify-start'>
          <h1 className='ml-5 mt-2 text-xl'>{currentTime.getHours()}:{currentTime.getMinutes()} | H:20° L:11° </h1>
        </div>
      </div>
    </div>
  )
}

export default Summary
