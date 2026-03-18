"use client";

import { useProjectStore } from "@/store/useProjectStore";

type Props = {
  isGenerating: boolean;
  setIsGenerating: (val: boolean) => void;
};

export default function GenerateToolbar({
  isGenerating,
  setIsGenerating,
}: Props) {

  const generateChunks = useProjectStore((s) => s.generateChunks);

  const handleGenerate = () => {
    setIsGenerating(true);

    
    setTimeout(() => {
      generateChunks();
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="flex items-center gap-3">

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {isGenerating ? "Generating..." : "Generate Voice"}
      </button>

      <button className="text-sm text-gray-500 hover:text-gray-700">
        View Metrics
      </button>

    </div>
  );
}
