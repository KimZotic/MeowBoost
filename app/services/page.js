"use client";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Contoh data dummy
    setServices([
      {
        id: 1,
        title: "TikTok Followers",
        description: "Dapatkan pengikut aktif dan berkualiti untuk akaun TikTok anda.",
        price: "RM10 / 1000",
      },
      {
        id: 2,
        title: "Instagram Likes",
        description: "Tambahkan likes pada post Instagram anda secara automatik.",
        price: "RM5 / 500",
      },
      {
        id: 3,
        title: "YouTube Views",
        description: "Naikkan jumlah tontonan video YouTube anda dengan servis berkualiti.",
        price: "RM15 / 1000",
      },
    ]);
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-10 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-red-500">Senarai Servis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </main>
  );
    }
