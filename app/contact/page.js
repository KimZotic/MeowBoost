'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesanan anda telah dihantar!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Hubungi Kami</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Nama anda"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email anda"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Tulis mesej anda di sini..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Hantar
        </button>
      </form>
    </div>
  );
            }
