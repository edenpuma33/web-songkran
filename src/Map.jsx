import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import * as L from "leaflet";

const Map = ({ optionSelected }) => {
  const DEFAULT_LOCATION = [20, 95];

  // Define icons
  const defaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3944/3944427.png",
    iconSize: [32, 32],
  });

  const specialIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9759/9759266.png",
    iconSize: [32, 32],
  });

  const otherIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/7945/7945007.png",
    iconSize: [32, 32],
  });

  // Define marker sets
  const MARKER1 = [
    { id: 1, position: [28.6448, 77.216721], label: "ประเทศอินเดีย" },
    { id: 2, position: [6.927079, 79.861244], label: "ประเทศศรีลังกา" },
    { id: 3, position: [30.596069, 114.297691], label: "ประเทศจีน" },
  ];

  const MARKER2 = [
    ...MARKER1,
    {
      id: 4,
      position: [18.81266, 95.28952],
      label: "เมืองปยู (เมืองศรีเกษตร, พม่า)",
    },
    { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
    { id: 6, position: [13.755388, 98.6546138], label: "ชุมชนชาวมอญ" },
    { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
    { id: 8, position: [17.2301259, 99.7281588], label: "เมืองสุโขทัย" },
    { id: 9, position: [16.5319058, 97.6065731], label: "เมืองเมาะตะมะ, พม่า" },
    {
      id: 10,
      position: [19.4845544, 98.4376777],
      label: "เมืองล้านนา (เชียงใหม่)",
    },
    { id: 11, position: [18.8036471, 102.12129], label: "ประเทศลาว" },
    { id: 12, position: [21.2829153, 99.6118559], label: "ชุมชนไทใหญ่" },
    { id: 13, position: [20.1232043, 105.140215], label: "เมืองเวียดนามตอนบน" },
    {
      id: 14,
      position: [11.8662927, 103.8008617],
      label: "เมืองจามปา (เวียดนามตอนใต้)",
    },
    { id: 15, position: [8.301685, 99.7687008], label: "เมืองนครศรีธรรมราช" },
    { id: 16, position: [14.5211382, 99.9162535], label: "เมืองสุพรรณบุรี" },
    { id: 17, position: [14.4280592, 100.5671934], label: "อยุธยา" },
  ];

  const MARKER3 = [
    {
      id: 4,
      position: [18.81266, 95.28952],
      label: "เมืองปยู (เมืองศรีเกษตร, พม่า)",
    },
    { id: 5, position: [19.937312, 93.8391687], label: "เมืองยะไข่, พม่า" },
    { id: 7, position: [12.1758794, 104.8560342], label: "เขมรโมราณ" },
    { id: 8, position: [17.2301259, 99.7281588], label: "เมืองสุโขทัย" },
    { id: 11, position: [18.8036471, 102.12129], label: "ประเทศลาว" },
  ];

  const MARKER4 = [...MARKER1];

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
        <LayersControl>
          <LayersControl.BaseLayer name="osm" checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="map" checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Render Markers with different icons */}
        {markers.map((marker) => {
          let icon = defaultIcon; // Default icon

          if (optionSelected === "option2" && marker.id >= 4) {
            icon = specialIcon; // Change icon for IDs 4-17 in MARKER2
          } else if (optionSelected === "option3") {
            icon = otherIcon; // Change icon for all markers in MARKER3 and MARKER4
          } else {
            icon = defaultIcon;
          }

          return (
            <Marker key={marker.id} icon={icon} position={marker.position}>
              <Popup>
              {optionSelected === "option1" &&
                (marker.id === 1 || marker.id === 2 || marker.id === 3) ? (
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {marker.label}
                  </a>
                ) : (
                  marker.label
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
