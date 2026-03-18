import { useProjectStore } from "@/store/useProjectStore";

export default function ScriptEditor() {
  const script = useProjectStore((s) => s.script)
  const setScript = useProjectStore((s) => s.setScript)

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
      <textarea value={script}
        onChange={(e) => setScript(e.target.value)} className="w-full h-40 border rounded p-3">
        
      </textarea>
      <p className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
        {script.length} characters
        
      </p>
    </div>
  )
}