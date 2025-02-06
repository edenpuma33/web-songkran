// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState } from "react";

// import * as L from "leaflet"

// const toiletIcon = L.icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
//   iconSize: [24,24],
// })

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

// const Map = () => {
//   const DEFAULT_LOCATION = [20, 100];

//   return (
//     <div>
//       <MapContainer
//         className="h-[50vh] round-md"
//         center={DEFAULT_LOCATION}
//         zoom={4}
//         scrollWheelZoom={true}
//         style={{
//           height: '50vh',
//           width: '50vw',
//           display: 'flex',
//       }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarker />
//         <Marker icon={toiletIcon} position={[20,80]}>
//           <Popup>India</Popup>
//         </Marker>
//         <Marker icon={toiletIcon} position={[7,81]}>
//           <Popup>Sri lanka</Popup>
//         </Marker>
//         <Marker icon={toiletIcon} position={[30,100]}>
//           <Popup>China</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };
// export default Map;

// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState } from "react";
// import * as L from "leaflet";

// const toiletIcon = L.icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
//   iconSize: [24, 24],
// });

// const Map = () => {
//   const DEFAULT_LOCATION = [20, 100];

//   // State for marker positions
//   const [markers, setMarkers] = useState([
//     { id: 1, position: [20, 80], label: "India" },
//     { id: 2, position: [7, 81], label: "Sri Lanka" },
//     { id: 3, position: [30, 100], label: "China" },
//   ]);

//   // Function to update markers dynamically
//   const updateMarkers = () => {
//     setMarkers([
//       { id: 1, position: [21, 81], label: "India Moved" },
//       { id: 2, position: [8, 82], label: "Sri Lanka Moved" },
//       { id: 3, position: [31, 101], label: "China Moved" },
//     ]);
//   };

//   return (
//     <div>
//       <MapContainer
//         className="h-[50vh] rounded-md"
//         center={DEFAULT_LOCATION}
//         zoom={4}
//         scrollWheelZoom={true}
//         style={{
//           height: "50vh",
//           width: "50vw",
//           display: "flex",
//         }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Render Markers */}
//         {markers.map((marker) => (
//           <Marker key={marker.id} icon={toiletIcon} position={marker.position}>
//             <Popup>{marker.label}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>

//       {/* Buttons to change marker positions */}
//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={updateMarkers}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         >
//           Move Markers
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Map;

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import * as L from "leaflet";

const Map = ({ optionSelected }) => {
  const DEFAULT_LOCATION = [20, 100];

  // Define custom icons
  const toiletIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    iconSize: [24, 24],
  });

  // Default and updated marker positions
  const DEFAULT_MARKERS = [
    { id: 1, position: [20, 80], label: "India" },
    { id: 2, position: [7, 81], label: "Sri Lanka" },
    { id: 3, position: [30, 100], label: "China" },
  ];

  const UPDATED_MARKERS = [
    { id: 1, position: [21, 81], label: "India Moved" },
    { id: 2, position: [8, 82], label: "Sri Lanka Moved" },
    { id: 3, position: [31, 101], label: "China Moved" },
  ];

  // State for markers
  const [markers, setMarkers] = useState(DEFAULT_MARKERS);

  useEffect(() => {
    if (optionSelected === "option_test_1") {
      setMarkers(DEFAULT_MARKERS);
    } else if (optionSelected === "option_test_2") {
      setMarkers(UPDATED_MARKERS);
    }
  }, [optionSelected]);

  return (
    <div>
      <MapContainer
        className="h-[50vh] rounded-md"
        center={DEFAULT_LOCATION}
        zoom={4}
        scrollWheelZoom={true}
        style={{
          height: "50vh",
          width: "50vw",
          display: "flex",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render Markers */}
        {markers.map((marker) => (
          <Marker key={marker.id} icon={toiletIcon} position={marker.position}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Buttons to update and reset marker positions */}
      {/* <div className="flex gap-2 mt-4">
        <button
          onClick={() => setMarkers(UPDATED_MARKERS)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Move Markers
        </button>
        <button
          onClick={() => setMarkers(DEFAULT_MARKERS)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Reset Markers
        </button>
      </div> */}
    </div>
  );
};

export default Map;
