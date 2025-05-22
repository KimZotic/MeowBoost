// app/update/page.js

"use client";

import React, { useState } from "react";

export default function UpdatePage() {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      title: "Penambahan Servis TikTok Baru",
      description: "Kami telah menambah 3 servis TikTok baru dengan harga lebih murah dan refill.",
      date: "22 Mei 2025",
    },
    {
      id: 2,
      title: "Penambahbaikan Sistem Auto-Order",
      description: "Sistem auto-order kini lebih pantas dan stabil.",
      date: "20 Mei 2025",
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Kemaskini Terbaru</h1>
      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="bg-zinc-900 p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-white">{update.title}</h2>
            <p className="text-sm text-zinc-400">{update.date}</p>
            <p className="mt-2 text-zinc-300">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
