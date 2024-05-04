import React from 'react'
import SunnyIcon from '../assets/icons/sunny.svg'

const HourlyForecast = () => {
  return (
    <div>
      <div className='drop-shadow-lg flex flex-row overflow-hidden justify-between'>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-center'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>1°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>2°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>3°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>4°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>5°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>6°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>7°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>8°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white'>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>9°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white '>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 '>10°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white '>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1 t'>11°C</h1>
                </div>
                <div className='flex flex-col px-3 pt-3 text-white justify-center items-start'>
                    <span className='ml-2 mb-1 text-white '>Now</span>
                    <img className='ml-3 mb-1' width={20} height={20} src={SunnyIcon}/>
                    <h1 className='ml-2 mb-1'>12°C</h1>
                </div>

        </div>
    </div>
  )
}

export default HourlyForecast
