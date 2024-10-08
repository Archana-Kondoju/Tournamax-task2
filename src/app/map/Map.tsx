"use client"
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';


// Set default icon for markers

  const DefaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;


function Map() {
  const markers: { position: LatLngTuple; label: string }[] = [
    { position: [28.6139, 77.2090], label: "New Delhi" },
    { position: [19.0760, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];

  return (
    <div className="h-screen">
      <MapContainer
        className="h-screen"
        center={[28.6139, 77.2090]} // Centered at New Delhi, India
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.position}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
