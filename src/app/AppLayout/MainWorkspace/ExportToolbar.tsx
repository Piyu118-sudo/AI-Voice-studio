"use client"

import { useProjectStore } from "@/store/useProjectStore"

export default function ExportToolbar() {
  const chunks = useProjectStore(s => s.chunks)

  const exportText = () => {
    const text = chunks.map(c => c.text).join(". ")

    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "script.txt"
    a.click()
  }

  return (
    <div className="flex gap-3 border-t pt-4">

      <button
        onClick={exportText}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Export
      </button>

    </div>
  )
}
