"use client";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Setting up the default Leaflet icon
let DefaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Override the default icon for all markers
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const markers = [
    { position: [28.6139, 77.2090] as [number, number], label: "New Delhi" },
    { position: [19.0760, 72.8777] as [number, number], label: "Mumbai" },
    { position: [13.0827, 80.2707] as [number, number], label: "Chennai" },
    { position: [22.5726, 88.3639] as [number, number], label: "Kolkata" },
    { position: [12.9716, 77.5946] as [number, number], label: "Bangalore" },
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


// "use client";

// import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { LatLngTuple } from "leaflet";

// // Setting up the default Leaflet icon
// let DefaultIcon = L.icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// // Override the default icon for all markers
// L.Marker.prototype.options.icon = DefaultIcon;

// function Map() {
//   const markers: LatLngTuple[] = [
//     { position: [28.6139, 77.209], label: "New Delhi" },
// { position: [19.076, 72.8777], label: "Mumbai" },
// { position: [13.0827, 80.2707], label: "Chennai" },
// { position: [22.5726, 88.3639], label: "Kolkata" },
// { position: [12.9716, 77.5946], label: "Bangalore" },
//   ];

//   return (
//     <div className="h-screen">
//       <MapContainer
//         className="h-screen"
//         center={[28.6139, 77.209]} // Centered at New Delhi, India
//         zoom={13}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers.map((position, idx) => (
//           <Marker key={idx} position={position} />
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;



// // "use client"

// // import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet'

// // let DefaultIcon = L.icon({
// //     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
// //     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// //     iconSize: [25, 41], // size of the icon
// //     iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
// //     popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
// //     shadowSize: [41, 41]  // size of the shadow
// //   });
  
// //   // Override the default icon for all markers
// //   L.Marker.prototype.options.icon = DefaultIcon;
// // function Map(){
// //     const markers = [
// //         { position: [51.505, -0.09], id: 1 },
// //         { position: [51.515, -0.1], id: 2 },
// //         { position: [51.525, -0.08], id: 3 },
// //         { position: [51.535, -0.07], id: 4 },
// //         { position: [51.545, -0.06], id: 5 },
// //       ];
    
// //     return (
// //         <div className="h-screen">
// //             <MapContainer className="h-screen" center={[28.6139, 77.209]} zoom={13} scrollWheelZoom={false}>
// //             <TileLayer
// //                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //             />
// //             {markers.map(marker => (
// //                 <Marker key={marker.id} position={marker.position} />
// //             ))}
// //             </MapContainer>
// //         </div>
// //     )
// // }
// // export default Map