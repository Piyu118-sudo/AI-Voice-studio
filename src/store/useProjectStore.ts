"use client";

import { create } from "zustand";

type Chunk = {
    id: string;
    text: string;
    mood: "Neutral" | "Happy" | "Sad";
    model: string;
    audioUrl?: string;
    genTime?: number;
    cpu?: number;
    ram?: number;
};

type Store = {
    script: string;
    chunks: Chunk[];

    setScript: (text: string) => void;
    generateChunks: () => void;
    deleteChunk: (id: string) => void;
    updateChunk: (id: string, data: Partial<Chunk>) => void;
    splitChunk: (id: string) => void;
};

export const useProjectStore = create<Store>((set, get) => ({
    script: "",
    chunks: [],

   
    setScript: (text) => set({ script: text }),

   
    generateChunks: () => {
        const script = get().script;

        const sentences = script
            .split(".")
            .map((s) => s.trim())
            .filter(Boolean);

        const newChunks: Chunk[] = sentences.map((text) => ({
            id: crypto.randomUUID(),
            text,
            mood: "Neutral",
            model: "Echo",
        }));

        set({ chunks: newChunks }); 
    },

   
    deleteChunk: (id) => {
        set({
            chunks: get().chunks.filter((c) => c.id !== id),
        });
    },

    
    updateChunk: (id, data) => {
        set({
            chunks: get().chunks.map((c) =>
                c.id === id ? { ...c, ...data } : c
            ),
        });
    },

    
    splitChunk: (id) => {
        const chunks = get().chunks;
        const index = chunks.findIndex((c) => c.id === id);

        if (index === -1) return;

        const current = chunks[index];

        const parts = current.text
            .split(".")
            .map((s) => s.trim())
            .filter(Boolean);

        if (parts.length <= 1) return;

        const newChunks: Chunk[] = parts.map((text) => ({
            id: crypto.randomUUID(),
            text,
            mood: current.mood,
            model: current.model,
        }));

        set({
            chunks: [
                ...chunks.slice(0, index),
                ...newChunks,
                ...chunks.slice(index + 1),
            ],
        });
    },
}));