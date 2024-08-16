import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function MapPage() {
  return (
    <div>
      <Map />
    </div>
  );
}
