"use client"

import { useProjectStore } from "@/store/useProjectStore"
import ChunksCard from "../chunks/ChunkCard"

export default function ChunksContainer() {
  const chunks = useProjectStore((s) => s.chunks)

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">

      <h2 className="font-semibold mb-4">
        Generated Chunks
      </h2>

      {chunks.length === 0 ? (
        <div className="tbg-white p-5 rounded-2xl shadow-md border border-gray-100">
          No chunks generated yet
        </div>
      ) : (
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">

          {chunks.map((chunk) => (
            <ChunksCard key={chunk.id} {...chunk} />
          ))}

        </div>
      )}

    </div>
  )
}