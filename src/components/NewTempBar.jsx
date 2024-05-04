import React from 'react'

const NewTempBar = ({currTemp, minTemp, maxTemp}) => {
    const barWidth = '200px';
    const barHeight = '2px';

    const totalRange = maxTemp - minTemp;
    const currentOffset = ((currTemp - minTemp) / totalRange) * 100;
    const minOffset = 0;
    const maxOffset = 100;


  return (
    <div className='flex flex-row mt-2'>
      <div 
        className='bg-white rounded-full w-1 h-1'
      />
      {/* BAR */}
      <div className='bg-blue-500 w-64 h-4 rounded-2xl ' 
        style={{width: `${maxOffset}`, height: barHeight}} 
      />
      <div 
        className='bg-white rounded-full w-1 h-1'
      />
      <div
        className="bg-white rounded-full w-1 h-1 absolute"
        style={{ left: `${currentOffset}%` }}
      />
      
    </div>
  )
}

export default NewTempBar
