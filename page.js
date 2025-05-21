
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10 mb-4">Boost Your Social Media Presence</h1>
      <p className="text-gray-400 mb-6">Get more followers, likes, and views at affordable prices</p>
      <a href="/services" className="bg-red-600 text-white px-4 py-2 rounded">Get Started</a>
      <div className="mt-10">
        <h2 className="text-xl text-red-500 mb-2">CHOOSE A SOCIAL MEDIA PLATFORM</h2>
        <div className="flex justify-center space-x-4 text-3xl">
          <span>🎵</span><span>📸</span><span>🐦</span><span>▶️</span><span>📘</span><span>📍</span><span>✈️</span>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceCard icon="🎵" title="TikTok Followers" description="High-quality, no drop followers for your TikTok account." />
        <ServiceCard icon="📍" title="Location Tracking" description="Track the location of a device with our advanced tracking service." />
      </div>
    </div>
  );
}
