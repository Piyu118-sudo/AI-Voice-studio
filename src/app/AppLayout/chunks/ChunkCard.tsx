"use client";

import { useState } from "react";
import { useProjectStore } from "@/store/useProjectStore";


type Props = {
    id: string;
    index: number;
    text: string;
    mood: "Neutral" | "Happy" | "Sad";
    model: string;
    genTime: number;
    cpu: number;
    ram: number;
    audioUrl?: string;
};

export default function ChunkCard({
    id,
    index,
    text,
    mood,
    model,
    genTime,
    cpu,
    ram,
    audioUrl,
}: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);
    const [loading, setLoading] = useState(false);

    const updateChunk = useProjectStore((s) => s.updateChunk);
    const splitChunk = useProjectStore((s) => s.splitChunk);

    const handleSave = () => {
        updateChunk(id, { text: value });
        setIsEditing(false);
    };

    const handleSplit = () => {
        splitChunk(id);
    };

    const generateAudio = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/tts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: value }),
            });

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            updateChunk(id, { audioUrl: url });

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md transition">


            <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2 items-center">
                    <p className="font-semibold">Chunk {index}</p>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                        {mood}
                    </span>
                </div>

                <p className="text-xs text-gray-500">{model}</p>
            </div>


            {isEditing ? (
                <>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full border p-2 rounded mb-2"
                    />

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition"
                    >
                        Save
                    </button>
                </>
            ) : (
                <p className="text-sm text-gray-700 mb-3">{value}</p>
            )}


            {audioUrl ? (
                <>


                    <audio controls className="w-full mb-3">
                        <source src={audioUrl} type="audio/mpeg" />
                    </audio>
                </>
            ) : (
                <div className="mb-3">
                    <div className="h-2 bg-gray-200 rounded-full" />
                    <p className="text-xs text-gray-400 mt-1">0:00 / 0:00</p>
                </div>
            )}


            <div className="flex gap-4 text-xs text-gray-500 mb-3">
                <span>⏱ {genTime}s</span>
                <span>⚡ {cpu}% CPU</span>
                <span>💾 {ram} MB</span>
            </div>


            <div className="flex gap-2 mb-3">
                <select className="border rounded px-2 py-1 text-sm">
                    <option>Echo</option>
                    <option>Nova</option>
                    <option>Shimmer</option>
                </select>

                <select className="border rounded px-2 py-1 text-sm">
                    <option>Neutral</option>
                    <option>Happy</option>
                    <option>Sad</option>
                </select>

                <select className="border rounded px-2 py-1 text-sm">
                    <option>None</option>
                    <option>1s</option>
                    <option>2s</option>
                </select>
            </div>


            <div className="flex gap-2 flex-wrap">
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
                    ▶ Play
                </button>

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
                >
                    Edit
                </button>

                <button
                    onClick={generateAudio}
                    className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
                >
                    {loading ? "Generating..." : "🔄 Regen"}
                </button>

                <button
                    onClick={handleSplit}
                    className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
                >
                    ✂ Split
                </button>
            </div>
        </div>
    );
}