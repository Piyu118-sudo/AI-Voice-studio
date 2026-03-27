"use client";

import { useProjectStore } from "@/store/useProjectStore";
import {mergeAudio,bufferToWav } from "@/app/lib/audio"
import { saveProject, loadProject } from "@/app/utils/storage"

export function Navbar() {
    const chunks = useProjectStore((s) => s.chunks);

   
    const exportAudio = async () => {
        const urls = chunks
            .map((c) => c.audioUrl)
            .filter(Boolean) as string[];

        if (urls.length === 0) {
            alert("No audio to export");
            return;
        }

        const merged = await mergeAudio(urls);
        const url = bufferToWav(merged);

        const a = document.createElement("a");
        a.href = url;
        a.download = "final-audio.wav";
        a.click();
    };

    return (
        <div className="h-14 flex items-center justify-between px-6 border-b bg-white">

            
            <h1 className="font-semibold text-lg text-purple-700">
                🎙 AI Voice Studio
            </h1>

       
            <p className="text-sm text-gray-500">
                My Project • {chunks.length} chunks
            </p>

            
            <div className="flex gap-2">

              
                <button
                    onClick={() => location.reload()}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 transition"
                >
                    New
                </button>

               
                <button
                    onClick={loadProject}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 transition"
                >
                    Load
                </button>

                
                <button
                    onClick={saveProject}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 transition"
                >
                    Save
                </button>

          
                <button
                    onClick={exportAudio}
                    className="px-3 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                >
                    Export
                </button>

            </div>
        </div>
    );
}