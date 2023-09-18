import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComp = () => {
  return (
    <div className="h-100">
      <GoogleMapReact 
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 26.8467, lng: 80.9462 }}
      />
    </div>
  );
}

export default MapComp;
