import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">MeowBoost</Link>
        <div className="space-x-4">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/support">Support</Link>
        </div>
      </nav>
    </header>
  )
}
