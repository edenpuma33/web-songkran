import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

import * as L from "leaflet"

const toiletIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  iconSize: [24,24],
})


function LocationMarker() {
  const [position, setPosition] = useState(null);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const toiletIcon2 = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/9759/9759266.png",
  iconSize: [24,24],
})

const Map2 = () => {
  const DEFAULT_LOCATION = [20, 100];

  return (
    <div>
      <MapContainer
        className="h-[50vh] round-md"
        center={DEFAULT_LOCATION}
        zoom={4}
        scrollWheelZoom={true}
        style={{
            height: '50vh',
            width: '50vw',
            display: 'flex',
            marginLeft: '25vw'
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <Marker icon={toiletIcon} position={[20,80]}>
          <Popup>India</Popup>
        </Marker>
        <Marker icon={toiletIcon} position ={[7,81]}>
          <Popup>Sri lanka</Popup>
        </Marker>
        <Marker icon={toiletIcon} position={[30,100]}>
          <Popup>China</Popup>
        </Marker>

        <Marker icon={toiletIcon2} position={[13,105]}>
          <Popup>India</Popup>
        </Marker>
        <Marker icon={toiletIcon2} position={[22,98]}>
          <Popup>Sri lanka</Popup>
        </Marker>
        <Marker icon={toiletIcon2} position={[18,100]}>
          <Popup>China</Popup>
        </Marker>
        <Marker icon={toiletIcon2} position={[11,107]}>
          <Popup>India</Popup>
        </Marker>
        <Marker icon={toiletIcon2} position={[18,105]}>
          <Popup>Sri lanka</Popup>
        </Marker>
     
      </MapContainer>
    </div>
  );
};
export default Map2;
