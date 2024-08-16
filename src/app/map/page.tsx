import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false, // Disable Server-Side Rendering for this component
});

export default function MapPage() {
  return (
    <div>
      {/* <h1>Map Page</h1> */}
      <Map />
    </div>
  );
}
