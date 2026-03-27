"use client";

import { useProjectStore } from "@/store/useProjectStore";

export default function Sidebar() {
  const chunks = useProjectStore((s) => s.chunks);
  const updateChunk = useProjectStore((s) => s.updateChunk);

  const changeModel = (model: string) => {
    chunks.forEach((c) => updateChunk(c.id, { model }));
  };

  const changeMood = (mood: "Neutral" | "Happy" | "Sad") => {
    chunks.forEach((c) => updateChunk(c.id, { mood }));
  };

  const moods: ("Neutral" | "Happy" | "Sad")[] = [
    "Neutral",
    "Happy",
    "Sad",
  ];

  return (
    <div className="w-[280px] bg-gray-50 border-r p-4 space-y-6">

  
      <div>
        <h3 className="text-sm font-semibold mb-2">Voice Models</h3>

        <select
          onChange={(e) => changeModel(e.target.value as string)}
          className="w-full border border-gray-200 rounded-md px-2 py-1 text-sm mb-2"
        >
          <option>Echo</option>
          <option>Nova</option>
          <option>Shimmer</option>
        </select>

        <button className="text-xs text-purple-600">
          + Add Model
        </button>
      </div>

      
      <div>
        <h3 className="text-sm font-semibold mb-2">Global Mood</h3>

        <div className="flex gap-2">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => changeMood(m)}
              className="px-3 py-1 text-xs border rounded-md hover:bg-gray-100"
            >
              {m}
            </button>
          ))}
        </div>
      </div>

  
      <div>
        <h3 className="text-sm font-semibold mb-2">Global Settings</h3>

        <div className="mb-3">
          <p className="text-xs text-gray-500">Volume</p>
          <input type="range" className="w-full" />
        </div>

        <div>
          <p className="text-xs text-gray-500">Speed</p>
          <input type="range" className="w-full" />
        </div>
      </div>

    </div>
  );
}