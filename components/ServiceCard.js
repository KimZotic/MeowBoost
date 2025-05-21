export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold text-red-400">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  )
}
