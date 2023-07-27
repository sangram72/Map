import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const DynamicMap = () => {
  const [showMap, setShowMap] = useState(false);

  // Simulate asynchronous loading of data or other conditions that determine whether to show the map
  useEffect(() => {
    // Set `showMap` to true after some delay (e.g., 2 seconds) to simulate data loading
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMap) {
    return <div>Loading map...</div>;
  }

  return (
    <Map center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default DynamicMap;
