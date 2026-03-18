"use client";

import { useState, useRef } from "react";

type Chunk = {
    id: string;
    audio: string;
};

type Props = {
    chunks: Chunk[];
};

export default function GlobalPlayerBar({ chunks }: Props) {
    const [index, setIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const play = () => {
        if (!audioRef.current || chunks.length === 0) return;

        audioRef.current.src = chunks[index].audio;
        audioRef.current.play();
    };

    const next = () => {
        setIndex((i) => (i < chunks.length - 1 ? i + 1 : i));
    };

    const prev = () => {
        setIndex((i) => (i > 0 ? i - 1 : i));
    };

    return (
        <div className="flex items-center gap-3 p-4 border-t bg-white">

            <button
                onClick={prev}
                disabled={index === 0}
                className="px-2 py-1 bg-gray-100 rounded disabled:opacity-50"
            >
                Prev
            </button>

            <button
                onClick={play}
                className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
                Play
            </button>

            <button
                onClick={next}
                disabled={index === chunks.length - 1}
                className="px-2 py-1 bg-gray-100 rounded disabled:opacity-50"
            >
                Next
            </button>

            <span className="text-sm text-gray-500">
                {chunks.length > 0 ? `Chunk ${index + 1} / ${chunks.length}` : "No audio"}
            </span>

            <audio ref={audioRef} />

        </div>
    );
}
