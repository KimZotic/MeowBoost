// app/addfund/page.js

"use client";

import React, { useState } from "react";

export default function AddFundPage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("manual");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Jumlah: RM${amount}, Kaedah: ${paymentMethod}`);
    // Tambahkan integrasi payment gateway/manual handling di sini
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Tambah Dana</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 p-4 rounded-xl">
        <div>
          <label className="block text-sm font-medium text-white mb-1">Jumlah (RM)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded-md bg-zinc-800 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Kaedah Pembayaran</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 rounded-md bg-zinc-800 text-white"
          >
            <option value="manual">Manual Transfer</option>
            <option value="fpx">FPX (Online Banking)</option>
            <option value="ewallet">E-Wallet</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-md text-white font-semibold"
        >
          Teruskan Pembayaran
        </button>
      </form>
    </div>
  );
}
