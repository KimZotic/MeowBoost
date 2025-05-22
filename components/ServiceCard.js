export default function ServiceCard({ title, description, price }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-zinc-700">
      <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
      <p className="text-zinc-300 mb-4">{description}</p>
      <div className="text-white font-semibold">{price}</div>
    </div>
  );
}
