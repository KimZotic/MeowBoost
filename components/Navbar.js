import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">
          MeowBoost
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/services" className="hover:text-red-400">Services</Link>
          <Link href="/contact" className="hover:text-red-400">Contact</Link>
          <Link href="/faq" className="hover:text-red-400">FAQ</Link>
          <Link href="/login" className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
    }
