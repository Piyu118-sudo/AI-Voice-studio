import { create } from "zustand"

type Chunk = {
    id: string
    text: string
    mood: string
    model: string
}

type Store = {
    script: string
    chunks: Chunk[]

    setScript: (text: string) => void
    generateChunks: () => void
    deleteChunk: (id: string) => void
    updateChunk: (id: string, data: Partial<Chunk>) => void
    splitChunk: (id: string) => void
}

export const useProjectStore = create<Store>((set, get) => ({
    script: "",
    chunks: [],

    setScript: (text) => set({ script: text }),

    generateChunks: () => {
        const script = get().script

        const newChunks = script
            .split(".")
            .map((t) => t.trim())
            .filter((t) => t.length > 0)
            .map((text, i) => ({
                id: String(i + 1),
                text,
                mood: "neutral",
                model: "Echo",
            }))

        set({ chunks: newChunks })
    },

    deleteChunk: (id) => {
        const updated = get().chunks.filter((c) => c.id !== id)
        set({ chunks: updated })
    },

    updateChunk: (id, data) => {
        const updated = get().chunks.map((c) =>
            c.id === id ? { ...c, data } : c
        )
        set({ chunks: updated })
    },

    splitChunk: (id) => {
        const chunks = get().chunks
        const index = chunks.findIndex((c) => c.id === id)

        if (index === -1) return

        const current = chunks[index]

        const mid = Math.floor(current.text.length / 2)
        const first = current.text.slice(0, mid)
        const second = current.text.slice(mid)

        const newChunks = [
            ...chunks.slice(0, index),
            { ...current, id: Date.now().toString(), text: first },
            { ...current, id: Date.now().toString() + "2", text: second },
            ...chunks.slice(index + 1),
        ]

        set({ chunks: newChunks })
    },
}))