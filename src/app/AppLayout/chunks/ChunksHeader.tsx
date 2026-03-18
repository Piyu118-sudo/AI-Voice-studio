
type Props = {
  id: string;
  text: string;
  mood: string;
  model: string;

}
export default function ChunksHeader({id,text,mood,model}:Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="font-medium">
          Chunk {id}
        </span>
        <div className="flex gap-2 text-sm">
          <span className="px-2 py-1 bg-gray-100 rounded">
            {mood}
          </span>
            <span className="px-2 py-1 bg-gray-100 rounded">
              {model}
          </span>
          
          <textarea rows={4}>
            {text}
          </textarea>
          
        </div>

      </div>
    </div>
  )
}

