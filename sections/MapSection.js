"use client"
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
const Map = dynamic(() => import("./realMap"), { ssr: false });
export default function MapSection() {
  return (
    <Map/>
  );
}
