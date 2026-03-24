"use client";

import { useState, useRef, useEffect } from "react";

type Chunk = {
  id: string;
  audio: string;
};

type Props = {
  chunks: Chunk[];
};

export default function GlobalPlayerBar({ chunks }: Props) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🎵 Play current chunk
  const play = () => {
    if (!audioRef.current || chunks.length === 0) return;

    audioRef.current.src = chunks[index].audio;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const next = () => {
    setIndex((i) => (i < chunks.length - 1 ? i + 1 : i));
  };

  const prev = () => {
    setIndex((i) => (i > 0 ? i - 1 : i));
  };

  // ⏱ Track progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    };

    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  return (
    <div className="border-t bg-white px-6 py-3 shadow-sm flex items-center gap-4">

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={prev}
          disabled={index === 0}
          className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-40"
        >
          ⏮
        </button>

        {isPlaying ? (
          <button
            onClick={pause}
            className="px-4 py-1.5 rounded-md bg-purple-600 text-white hover:bg-purple-700"
          >
            ⏸ Pause
          </button>
        ) : (
          <button
            onClick={play}
            className="px-4 py-1.5 rounded-md bg-purple-600 text-white hover:bg-purple-700"
          >
            ▶ Play
          </button>
        )}

        <button
          onClick={next}
          disabled={index === chunks.length - 1}
          className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-40"
        >
          ⏭
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex-1">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-sm text-gray-600 whitespace-nowrap">
        {chunks.length > 0
          ? `Chunk ${index + 1} / ${chunks.length}`
          : "No audio"}
      </div>

      {/* Hidden audio */}
      <audio ref={audioRef} />
    </div>
  );
}