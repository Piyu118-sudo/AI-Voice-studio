"use client";

import { useState } from "react";
import ScriptEditor from "./ScriptEditor";
import GenerateToolbar from "./GenerateToolbar";
import ExportToolbar from "./ExportToolbar";
import ChunksContainer from "./ChunksContainer";

export default function MainWorkspace() {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-6 p-4 max-w-6xl mx-auto">


      <div className="space-y-4">
        <ScriptEditor />

        <GenerateToolbar
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
        />

        <ExportToolbar />
      </div>


      <div>
        <ChunksContainer />
      </div>

    </div>
  );
}