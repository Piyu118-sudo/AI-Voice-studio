"use client";

import ChunkCard from "./chunks/ChunkCard";

type Chunk = {
    id: string;
    text: string;
    model: string;
    mood: "Neutral" | "Happy" | "Sad";
};

export default function ChunksContainer() {
    const chunks: Chunk[] = [
        {
            id: "1",
            text: "AI is reshaping the job market",
            mood: "Neutral",
            model: "Echo",
        },
        {
            id: "2",
            text: "Automation will create new opportunities",
            mood: "Happy",
            model: "Nova",
        },
        {
            id: "3",
            text: "Developers must adapt to new technologies",
            mood: "Neutral",
            model: "Echo",
        },
    ];

    return (
        <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="font-semibold mb-4">Generated Chunks</h2>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {chunks.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        No chunks generated yet
                    </div>
                ) : (
                    chunks.map((chunk, i) => (
                        <ChunkCard
                            key={chunk.id}
                            id={chunk.id}
                            index={i + 1}
                            text={chunk.text}
                            mood={chunk.mood}
                            model={chunk.model}
                            genTime={1}
                            cpu={10}
                            ram={50}
                        />
                    ))
                )}
            </div>
        </div>
    );
}