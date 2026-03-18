
"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayerMini() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="flex items-center gap-3 mt-2">

      
      <button
        onClick={togglePlay}
        className="bg-gray-100 p-2 rounded hover:bg-gray-200"
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>

     
      <audio ref={audioRef} src="/sample.mp3" />

      
      <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden relative">
        <div className="w-1/3 h-full bg-purple-500"></div>
      </div>

      
      <span className="text-xs text-gray-500">
        0:00 / 0:10
      </span>

    </div>
  );
}
