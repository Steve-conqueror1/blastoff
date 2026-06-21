"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issue in Next.js using CDN links
const defaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Location {
  name: string;
  coords: [number, number];
  description: string;
  isCity: boolean;
}

const locations: Location[] = [
  {
    name: "Red Deer",
    coords: [52.2681, -113.8112],
    description: "Headquarters & Primary Service Hub - Kitchen Exhaust & Fire Protection Services",
    isCity: true,
  },
  {
    name: "Calgary & Area",
    coords: [51.0447, -114.0719],
    description: "Full service area for commercial hood cleaning & fire protection systems",
    isCity: true,
  },
  {
    name: "Edmonton & Area",
    coords: [53.5461, -113.4938],
    description: "Full service area for commercial kitchens, grease extraction, & Ansul systems",
    isCity: true,
  },
  {
    name: "Lacombe County",
    coords: [52.4684, -113.7323],
    description: "Regular compliance hood and exhaust cleaning services",
    isCity: false,
  },
  {
    name: "Blackfalds",
    coords: [52.3831, -113.7915],
    description: "Rapid dispatch local restaurant cleaning services",
    isCity: true,
  },
  {
    name: "Sylvan Lake",
    coords: [52.3083, -114.0964],
    description: "Fire suppression system testing & hood degreasing",
    isCity: true,
  },
  {
    name: "Rocky Mountain House",
    coords: [52.3739, -114.9192],
    description: "Commercial kitchen exhaust systems inspection & compliance",
    isCity: true,
  },
  {
    name: "Camrose County",
    coords: [53.016, -112.8273],
    description: "Commercial fire safety & exhaust vent cleanups",
    isCity: false,
  },
  {
    name: "Wetaskiwin County",
    coords: [52.9692, -113.3768],
    description: "Certified exhaust cleaning and fire extinguisher maintenance",
    isCity: false,
  },
];

export default function ServiceAreaMap() {
  useEffect(() => {
    // Set default icon for all markers
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  // Center on Red Deer, AB
  const mapCenter: [number, number] = [52.5, -113.6];

  return (
    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={mapCenter}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Coverage Circles */}
        {/* Red Deer core - 60km */}
        <Circle
          center={[52.2681, -113.8112]}
          radius={60000}
          pathOptions={{ fillColor: "#D32F2F", fillOpacity: 0.15, color: "#D32F2F", weight: 1.5 }}
        />

        {/* Outer coverage (Central Alberta Corridor from Calgary to Edmonton) */}
        <Circle
          center={mapCenter}
          radius={170000}
          pathOptions={{ fillColor: "#fbbf24", fillOpacity: 0.05, color: "#fbbf24", weight: 1, dashArray: "5, 5" }}
        />

        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.coords}>
            <Popup>
              <div className="p-1">
                <h4 className="font-heading font-bold text-dark text-base border-b border-gray-100 pb-1 mb-1">
                  {loc.name}
                </h4>
                <p className="text-sm text-gray-600 font-sans leading-snug">{loc.description}</p>
                <div className="mt-2 text-xs font-semibold text-primary font-sans">
                  Active Service Region &bull; 24/7 Coverage
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
