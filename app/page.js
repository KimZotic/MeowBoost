import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6">
        Selamat Datang ke MeowBoost
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        Platform terbaik untuk menambah pengikut, suka, tontonan dan lain-lain servis media sosial.
      </p>
      <Link href="/services">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold transition duration-300">
          Lihat Servis Kami
        </button>
      </Link>
    </main>
  );
}
