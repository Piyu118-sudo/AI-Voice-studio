"use client";

import { Play, Pencil, RefreshCw, Scissors, Trash } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";

type Props = {
  id: string;
};

export default function ChunkActions({ id }: Props) {
  const deleteChunk = useProjectStore((s) => s.deleteChunk);

  return (
    <div className="flex gap-2 flex-wrap">

      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transistion">
        <Play size={14} /> Play
      </button>

      <button className="flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
        <Pencil size={14} /> Edit
      </button>

      <button className="flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
        <RefreshCw size={14} /> Regen
      </button>

      <button className="flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
        <Scissors size={14} /> Split
      </button>

      <button
        onClick={() => deleteChunk(id)}
        className="flex items-center gap-1 px-2 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
      >
        <Trash size={14} /> Delete
      </button>

    </div>
  );
}