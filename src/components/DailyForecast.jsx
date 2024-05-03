import React, {useState} from 'react'
import SunnyIcon from '../assets/icons/sunny.svg'
import Dummy from './Dummy';
import Carousel from './Carousel';

const DailyForecast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='font-cabin absolute bottom-10 right-10 w-2/5 h-64 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl'>
      <div className='flex flex-col'>
        {/* txt 1 */}
        <div className='mt-1 ml-2 font-cabin font-light text-white'>
            <h1 className='text-xl'>Considerable cloudiness with a couple of showers</h1>
        </div>
        {/* White line */}
        <div class="px-2 mt-1 border-opacity-50 border-b w-full border-white"></div>
        {/* Hourly Forecast */}
        <div className='flex flex-row overflow-hidden'>
            <Carousel>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-center'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>12°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>12°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>12°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>62°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>52°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>42°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>13°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>1°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white text-lg'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 text-lg'>111°C</h1>
                </div>
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default DailyForecast
