// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import * as L from "leaflet";

// const Map = ({ optionSelected }) => {
//   const DEFAULT_LOCATION = [20, 95];

//   // Define custom icons
//   const toiletIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/128/3944/3944427.png",
//     iconSize: [32, 32],
//   });

//   // Default and updated marker positions
//   const MARKER1 = [
//     { id: 1, position: [28.644800, 77.216721], label: "ประเทศอินเดีย" },
//     { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
//     { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
//   ];

//   const MARKER2 = [
//     { id: 1, position: [28.644800, 77.216721], label: "ประเทศอินเดีย" },
//     { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
//     { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
//     { id: 4, position: [18.81266, 95.28952], label: "เมืองปยู (เมืองศรีเกษตร, พม่า)" },
//     { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
//     { id: 6, position: [13.755388, 98.6546138], label: "ชุมชนชาวมอญ" },
//     { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
//     { id: 8, position: [17.23012591373351, 99.7281588685331], label: "เมืองสุโขทัย" },
//     { id: 9, position: [16.531905812815115, 97.60657310630492], label: "เมืองเมาะตะมะ, พม่า" },
//     { id: 10, position: [19.484554451391613, 98.43767775979737], label: "เมืองล้านนา (เชียงใหม่)" },
//     { id: 11, position: [18.803647189410167, 102.12129001631494], label: "ประเทศลาว" },
//     { id: 12, position: [21.282915315384425, 99.61185593292927], label: "ชุมชนไทใหญ่" },
//     { id: 13, position: [20.123204364916216, 105.14021501852591], label: "เมืองเวียดนามตอนบน" },
//     { id: 14, position: [11.866292786187158, 103.80086179691206], label: "เมืองจามปา (เวียดนามตอนใต้)" },
//     { id: 15, position: [8.301685037642743, 99.76870087296258], label: "เมืองนครศรีธรรมราช" },
//     { id: 16, position: [14.521138277980743, 99.916253515693], label: "เมืองสุพรรณบุรี" },
//     { id: 17, position: [14.428059237901051, 100.56719342530805], label: "อยุธยา" },
//   ];

//   const MARKER3 = [
//     { id: 4, position: [18.81266, 95.28952], label: "เมืองปยู (เมืองศรีเกษตร, พม่า)" },
//     { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
//     { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
//     { id: 8, position: [17.23012591373351, 99.7281588685331], label: "เมืองสุโขทัย" },
//     { id: 11, position: [18.803647189410167, 102.12129001631494], label: "ประเทศลาว" },
//   ]

//   const MARKER4 = [
//     { id: 1, position: [28.644800, 77.216721], label: "ประเทศอินเดีย" },
//     { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
//     { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
//   ]
//   // State for markers
//   const [markers, setMarkers] = useState(MARKER1);
//   const [icons, setIcons] = useState("")

//   useEffect(() => {
//     if (optionSelected === "option1") {
//       setMarkers(MARKER1);
//     } else if (optionSelected === "option2") {
//       setMarkers(MARKER2);
//     } else if (optionSelected === "option3") {
//       setMarkers(MARKER3);
//     } else if (optionSelected === "option4") {
//       setMarkers(MARKER4);
//     } 
//   }, [optionSelected]);

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
//     </div>
//   );
// };

// export default Map;




import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import * as L from "leaflet";

const Map = ({ optionSelected }) => {
  const DEFAULT_LOCATION = [20, 95];

  // Define custom icons
  const defaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3944/3944427.png",
    iconSize: [32, 32],
  });

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9759/9759266.png", // Change this URL to your custom icon
    iconSize: [32, 32],
  });

  // Marker Data
  const MARKER1 = [
    { id: 1, position: [28.6448, 77.216721], label: "ประเทศอินเดีย" },
    { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
    { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
  ];

  const MARKER2 = [
    { id: 1, position: [28.6448, 77.216721], label: "ประเทศอินเดีย" },
    { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
    { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
    { id: 4, position: [18.81266, 95.28952], label: "เมืองปยู (พม่า)" },
    { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
    { id: 6, position: [13.755388, 98.6546138], label: "ชุมชนชาวมอญ" },
    { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
    { id: 8, position: [17.23012591373351, 99.7281588685331], label: "เมืองสุโขทัย" },
    { id: 9, position: [16.531905812815115, 97.60657310630492], label: "เมืองเมาะตะมะ, พม่า" },
    { id: 10, position: [19.484554451391613, 98.43767775979737], label: "เมืองล้านนา (เชียงใหม่)" },
    { id: 11, position: [18.803647189410167, 102.12129001631494], label: "ประเทศลาว" },
    { id: 12, position: [21.282915315384425, 99.61185593292927], label: "ชุมชนไทใหญ่" },
    { id: 13, position: [20.123204364916216, 105.14021501852591], label: "เมืองเวียดนามตอนบน" },
    { id: 14, position: [11.866292786187158, 103.80086179691206], label: "เมืองจามปา (เวียดนามตอนใต้)" },
    { id: 15, position: [8.301685037642743, 99.76870087296258], label: "เมืองนครศรีธรรมราช" },
    { id: 16, position: [14.521138277980743, 99.916253515693], label: "เมืองสุพรรณบุรี" },
    { id: 17, position: [14.428059237901051, 100.56719342530805], label: "อยุธยา" },
  ];

  const MARKER3 = [
    { id: 4, position: [18.81266, 95.28952], label: "เมืองปยู (พม่า)" },
    { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
    { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
    { id: 8, position: [17.23012591373351, 99.7281588685331], label: "เมืองสุโขทัย" },
    { id: 11, position: [18.803647189410167, 102.12129001631494], label: "ประเทศลาว" },
  ];

  const MARKER4 = [
    { id: 1, position: [28.6448, 77.216721], label: "ประเทศอินเดีย" },
    { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
    { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
  ];

  // State for markers
  const [markers, setMarkers] = useState(MARKER1);

  useEffect(() => {
    if (optionSelected === "option1") {
      setMarkers(MARKER1);
    } else if (optionSelected === "option2") {
      setMarkers(MARKER2);
    } else if (optionSelected === "option3") {
      setMarkers(MARKER3);
    } else if (optionSelected === "option4") {
      setMarkers(MARKER4);
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
          <Marker
            key={marker.id}
            icon={optionSelected === "option2" && marker.id >= 4 ? customIcon : defaultIcon}
            position={marker.position}
          >
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
