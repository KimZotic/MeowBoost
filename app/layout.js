export const metadata = {
  title: "MeowBoost",
  description: "Boost your social media presence with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">{children}</body>
    </html>
  );
}
