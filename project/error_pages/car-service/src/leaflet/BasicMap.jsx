import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
const markerIcon = new L.Icon({
  iconUrl: require("../assets/images/location.jpg"),
  iconSize: [35, 45],
  iconAnchor: [17, 46],
});

const BasicMap = (props) => {
  const [center, setCenter] = useState({
    lat: props.position.latitude,
    lng: props.position.longitude,
  });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();
  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.flyTo(
        [props.position.latitude, props.position.longitude],
        ZOOM_LEVEL,
        {
          duration: 1.5,
        }
      );
    }
  }, [props.position]);

  return (
    <div className="container">
      <div id="basicmap" className="row map">
        <div className="col text-center">
          <div className="col-md-12 w-100">
            <MapContainer
              center={center}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
              style={{ width: "100%", height: "550px" }}
            >
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
              <Marker
                position={[props.position.latitude, props.position.longitude]}
                icon={markerIcon}
              ></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicMap;
