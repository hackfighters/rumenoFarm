import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <div className="h-100">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA5Lt3E5gYb-lfogvaSpCrvCpocLqHwNOI" }}
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 26.8467, lng: 80.9462 }}
      />
    </div>
  );
};

export default GoogleMap;