"use client";

import GlobalMoodPanel from "./GlobelMoodPanel";
import GlobalSettingsPanel from "./GlobelSettingsPanel";
import GlobalVoicePanel from "./VoiceModelsPanel";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-white p-4 space-y-5 h-full">

      <GlobalMoodPanel />
      <GlobalSettingsPanel />
      <GlobalVoicePanel />

    </aside>
  );
};

export default Sidebar;