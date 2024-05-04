import React from 'react';

const TemperatureBar = ({ currentTemp, minTemp, maxTemp }) => {
  const barWidth = '300px'; // Adjust this value to change the width of the bar
  const barHeight = '2px'; // Adjust this value to change the height of the bar

  // Calculate the positions of the temperature markers
  const totalRange = maxTemp - minTemp;
  const currentOffset = ((currentTemp - minTemp) / totalRange) * 100;
  const minOffset = 0;
  const maxOffset = 100;

  return (
    <div className="relative" style={{ width: barWidth }}>
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: `${maxOffset}%`, height: barHeight }}
      />
      <div
        className="bg-white rounded-full w-1 h-1 absolute top-1/2 transform -translate-y-1/2"
        style={{ left: `${minOffset}%` }}
      />
      <div
        className="bg-white rounded-full w-1 h-1 absolute top-1/2 transform -translate-y-1/2"
        style={{ left: `${maxOffset}%` }}
      />
      <div
        className="bg-white rounded-full w-3 h-3 absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${currentOffset}%` }}
      />
    </div>
  );
};

export default TemperatureBar;