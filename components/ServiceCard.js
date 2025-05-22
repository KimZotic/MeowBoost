export default function ServiceCard({ service }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-4 shadow-md w-full max-w-sm transition hover:shadow-lg hover:scale-105">
      <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
      <p className="text-zinc-400 text-sm mb-1">Platform: {service.platform}</p>
      <p className="text-zinc-400 text-sm mb-1">Harga: {service.price} / 1000</p>
      <p className="text-zinc-400 text-sm">{service.description}</p>
    </div>
  );
}
