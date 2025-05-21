import ServiceCard from '../../components/ServiceCard'

export default function Services() {
  const services = [
    { title: "TikTok Followers", description: "High quality followers with refill" },
    { title: "Instagram Likes", description: "Instant likes with guaranteed speed" },
    { title: "YouTube Views", description: "Real views for your videos" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500 mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  )
}
