import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const selectedRegion = useSelector((state) => state.region.selectedRegion);

  // Default center and zoom if no region is selected
  const defaultCenter = { latitude: 51.505, longitude: -0.09, zoom: 13 };

  // Use the selectedRegion data if available, otherwise use default
  const center = selectedRegion
    ? [selectedRegion.latitude, selectedRegion.longitude]
    : [defaultCenter.latitude, defaultCenter.longitude];
  const zoom = selectedRegion ? selectedRegion.zoom : defaultCenter.zoom;

  // Reference to the map instance
  const mapRef = useRef();

  // State to keep track of the current center and zoom
  const [currentCenter, setCurrentCenter] = useState(center);
  const [currentZoom, setCurrentZoom] = useState(zoom);

  // Watch for changes in the selected region and update the map
  useEffect(() => {
    const newCenter = selectedRegion
      ? [selectedRegion.latitude, selectedRegion.longitude]
      : [defaultCenter.latitude, defaultCenter.longitude];
    const newZoom = selectedRegion ? selectedRegion.zoom : defaultCenter.zoom;

    // Update the map center and zoom
    if (mapRef.current) {
      mapRef.current.setView(newCenter, newZoom);
      setCurrentCenter(newCenter);
      setCurrentZoom(newZoom);
    }
  }, [selectedRegion, defaultCenter]);


  return (
    <div style={{ height: '100vh', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Set the height to fill the available space, but limit it to 100% of the viewport */}
      <MapContainer center={currentCenter} zoom={currentZoom} style={{ height: '100%', width: '100%' }} whenCreated={(map) => (mapRef.current = map)}>
        <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedRegion && (
          <Marker position={currentCenter}>
            <Popup>{selectedRegion.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
