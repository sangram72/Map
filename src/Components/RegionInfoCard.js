import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfoCard = () => {
  const regionInfo = useSelector((state) => state.region.regionInfo);

  if (!regionInfo) {
    return null;
  }

  return (
    <div>
      <h3>Region Information</h3>
      <p>Currency: {regionInfo.currency}</p>
      <p>Units of Speed: {regionInfo.speedUnits}</p>
      <p>Units of Distance: {regionInfo.distanceUnits}</p>
      <p>Units of Volume: {regionInfo.volumeUnits}</p>
      {/* Add more region-specific information here */}
    </div>
  );
};

export default RegionInfoCard;
