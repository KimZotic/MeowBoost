// app/faq/page.js

import React from "react";

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Soalan Lazim (FAQ)</h1>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500">Bagaimana cara membuat pesanan?</h2>
        <p className="text-gray-300">
          Daftar akaun, log masuk, pilih servis, masukkan maklumat, dan buat pesanan. Kami akan proses secara automatik.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500">Berapa lama pesanan akan selesai?</h2>
        <p className="text-gray-300">
          Ia bergantung kepada servis yang dipilih. Kebanyakan servis akan mula dalam masa beberapa minit selepas pembayaran dibuat.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500">Adakah servis ini selamat?</h2>
        <p className="text-gray-300">
          Ya. Kami hanya menggunakan kaedah yang selamat dan tidak meminta kata laluan anda.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500">Bagaimana untuk tambah dana?</h2>
        <p className="text-gray-300">
          Pergi ke halaman "Add Fund", pilih kaedah pembayaran dan ikut arahan yang diberi.
        </p>
      </div>
    </div>
  );
}
