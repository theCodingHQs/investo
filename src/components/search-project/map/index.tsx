import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import { Location, SearchResult } from "./types";
import "leaflet/dist/leaflet.css";

const pinIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
export const currentLocationIcon = L.divIcon({
  html: `
    <div style="
      width: 16px;
      height: 16px;
      background: #2a93ff;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0, 136, 255, 0.8);
      animation: pulse 1.5s infinite;
    "></div>
  `,
  className: "",
  iconSize: [16, 16],
});

interface MapUpdaterProps {
  searchResult: SearchResult | null;
}

function MapUpdater({ searchResult }: MapUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    if (searchResult) {
      const lat = parseFloat(searchResult.lat);
      const lon = parseFloat(searchResult.lon);
      map.setView([lat, lon], 12, { animate: true });
    }
  }, [searchResult, map]);

  return null;
}

function BoundaryOverlay({ searchResult }: MapUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    if (!searchResult || !searchResult.geojson) return;

    const getBoundaryRing = (
      geojson: SearchResult["geojson"]
    ): [number, number][] => {
      if (!geojson) return [];

      if (geojson.type === "Polygon") {
        return (geojson.coordinates[0] as number[][]).map(([lng, lat]) => [
          lat,
          lng,
        ]);
      } else if (geojson.type === "MultiPolygon") {
        return (geojson.coordinates[0][0] as number[][]).map(([lng, lat]) => [
          lat,
          lng,
        ]);
      }
      return [];
    };

    const boundaryRing = getBoundaryRing(searchResult.geojson);
    if (boundaryRing.length === 0) return;

    const outerRing = [
      [-90, -180],
      [90, -180],
      [90, 180],
      [-90, 180],
    ] as [number, number][];

    const dimLayer = L.polygon([outerRing, boundaryRing], {
      color: "transparent",
      fillColor: "#000000",
      fillOpacity: 0.4,
      interactive: false,
    }).addTo(map);

    return () => {
      map.removeLayer(dimLayer);
    };
  }, [searchResult, map]);

  return null;
}

interface MapProps {
  locations: Location[];
  searchResult: SearchResult | null;
}

export default function Map({ locations, searchResult }: MapProps) {
  const mapRef = useRef<L.Map>(null);

  const getBoundaryCoordinates = (
    geojson: SearchResult["geojson"]
  ): [number, number][] => {
    if (!geojson) return [];

    if (geojson.type === "Polygon") {
      return (geojson.coordinates[0] as number[][]).map(([lng, lat]) => [
        lat,
        lng,
      ]);
    } else if (geojson.type === "MultiPolygon") {
      return (geojson.coordinates[0][0] as number[][]).map(([lng, lat]) => [
        lat,
        lng,
      ]);
    }

    return [];
  };

  const boundaryCoords = searchResult?.geojson
    ? getBoundaryCoordinates(searchResult.geojson)
    : null;

  return (
    <MapContainer
      center={[18.487223, 73.791085]}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater searchResult={searchResult} />
      <BoundaryOverlay searchResult={searchResult} />

      {boundaryCoords && boundaryCoords.length > 0 && (
        <Polygon
          positions={boundaryCoords}
          pathOptions={{
            color: "#2563eb",
            weight: 3,
            opacity: 1,
            fillOpacity: 0,
            dashArray: "10, 10",
          }}
        />
      )}

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={pinIcon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg mb-1">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <CurrentLocation />
    </MapContainer>
  );
}

function CurrentLocation() {
  const map = useMap();
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];
        setPosition(coords);
        map.setView(coords, 15);
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );
  }, [map]);

  return position ? (
    <Marker icon={currentLocationIcon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}
