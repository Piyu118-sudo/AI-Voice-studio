export default function GlobalPlayerBar() {
    return (
        <div className="h-16 border-t bg-white flex items-center justify-between px-6">

            <div className="flex gap-3">
                <button>⏮</button>
                <button>▶</button>
                <button>⏭</button>
            </div>

            <div className="flex-1 mx-6">
                <div className="h-2 bg-gray-200 rounded"></div>
            </div>

            <div>
                Volume
            </div>

        </div>
    );
}