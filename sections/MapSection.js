"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix marker icon issue in Next.js
import "leaflet/dist/leaflet.css";
delete (L.Icon.Default.prototype )._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const markers = [
  { id: 1, lat: 40.7128, lng: -74.006, title: "New York" },
  { id: 2, lat: 48.8566, lng: 2.3522, title: "Paris" },
  { id: 3, lat: -33.8688, lng: 151.2093, title: "Sydney" },
];

export default function MapSection() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false} // disable scroll zoom
      className="w-full h-screen"
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
