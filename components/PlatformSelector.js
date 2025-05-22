"use client";

import { useState } from "react";

export default function PlatformSelector({ platforms, onSelect }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (platform) => {
    setSelected(platform);
    onSelect(platform);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {platforms.map((platform) => (
        <button
          key={platform}
          className={`px-4 py-2 rounded-full border ${
            selected === platform
              ? "bg-red-500 text-white"
              : "bg-zinc-800 text-white border-zinc-600"
          } transition`}
          onClick={() => handleSelect(platform)}
        >
          {platform}
        </button>
      ))}
    </div>
  );
}
