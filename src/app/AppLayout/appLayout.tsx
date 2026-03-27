"use client";

import { useEffect } from "react";
import { useProjectStore } from "@/store/useProjectStore";

export default function Page() {
    const chunks = useProjectStore((s) => s.chunks);
    const script = useProjectStore((s) => s.script);

    useEffect(() => {
        localStorage.setItem(
            "ai-voice-project",
            JSON.stringify({ script, chunks })
        );
    }, [script, chunks]);

    return (
        <div>
           
        </div>
    );
}