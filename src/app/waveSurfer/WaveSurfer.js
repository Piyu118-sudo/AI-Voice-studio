"use client";

import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Waveform({ audioUrl }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const wave = WaveSurfer.create({
            container: ref.current,
            waveColor: "#e2e8f0",
            progressColor: "#7c3aed",
            height: 60,
        });

        wave.load(audioUrl);

        return () => wave.destroy();
    }, [audioUrl]);

    return <div ref={ref} />;
}