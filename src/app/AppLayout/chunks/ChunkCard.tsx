"use client";

import { useState } from "react";
import { useProjectStore } from "@/store/useProjectStore";

type Props = {
    id: string;
    text: string;
    mood: string;
    model: string;
};

export default function ChunkCard({ id, text, mood, model }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);

    const updateChunkText = useProjectStore((s) => s.updateChunk);

    const handleSave = () => {
        updateChunkText(id, { text: value });
        setIsEditing(false);
    };

    return (
        <div className="border rounded-xl p-4 hover:shadow-sm transition">

            <p className="text-xs text-gray-500 mb-1">
                {model} • {mood}
            </p>

            {isEditing ? (
                <>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full border p-2 rounded"
                    />

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transistion"
                    >
                        Save
                    </button>
                </>
            ) : (
                <p>{value}</p>
            )}

            <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transistion"
            >
                Edit
            </button>

        </div>
    );
}
