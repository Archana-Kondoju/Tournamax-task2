import dynamic from 'next/dynamic';

// Ensure this path matches your actual file structure
const Map = dynamic(() => import('./map/Map'), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div>
      <Map />
    </div>
  );
}
