export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MeowBoost. All rights reserved.
      </div>
    </footer>
  );
}
