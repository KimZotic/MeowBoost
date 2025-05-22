// app/about/page.js

import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Tentang MeowBoost</h1>
      <p className="text-lg text-gray-300">
        MeowBoost ialah platform servis media sosial yang menyediakan perkhidmatan berkualiti tinggi seperti penambahan followers, likes, views, dan banyak lagi. Kami menyasarkan untuk membantu perniagaan dan individu dalam membina kehadiran digital mereka dengan harga yang mampu milik dan proses yang mudah.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Misi Kami</h2>
        <p className="text-gray-300">
          Memberi solusi digital yang pantas, selamat, dan dipercayai dalam dunia media sosial.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Kenapa Pilih Kami?</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Servis pantas & automatik</li>
          <li>Sokongan pelanggan mesra</li>
          <li>Harga murah & kompetitif</li>
          <li>Pelbagai pilihan servis</li>
        </ul>
      </div>
    </div>
  );
    }
