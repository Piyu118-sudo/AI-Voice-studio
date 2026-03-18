"use client";

import { useProjectStore } from "@/store/useProjectStore";

type Props = {
  id: string;
  mood: string;
  model: string;
};

export default function ChunkSettings({ id, mood, model }: Props) {
  const updateChunk = useProjectStore((s) => s.updateChunk);

  return (
    <div className="flex gap-4">

      
      <select
        value={model}
        onChange={(e) =>
          updateChunk(id, { model: e.target.value })
        }
        className="border rounded px-2 py-1 text-sm"
      >
        <option>Echo</option>
        <option>Nova</option>
      </select>

      
      <select
        value={mood}
        onChange={(e) =>
          updateChunk(id, { mood: e.target.value })
        }
        className="border rounded px-2 py-1 text-sm"
      >
        <option>Sad</option>
        <option>Neutral</option>
        <option>Happy</option>
      </select>

      
      <select className="border rounded px-2 py-1 text-sm">
        <option>No pause</option>
        <option>0.5s</option>
        <option>1s</option>
      </select>

    </div>
  );
}