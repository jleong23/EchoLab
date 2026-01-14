/**
 * MuteControls:
 * Renders a set of toggle switches for muting individual audio tracks.
 * It dynamically creates a switch for each specified instrument ( drums, bass, arps ).
 * The mute state is controlled by the parent component through the `hush` and `setHush` props.
 */

export default function MuteControls({ hush, setHush }) {
  const toggle = (key) => setHush((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 w-full">
      <div className="flex justify-between items-center gap-2">
        {["drums", "bass", "arps"].map((key) => (
          <div
            key={key}
            onClick={() => toggle(key)}
            className={`
              flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg cursor-pointer transition-all duration-200 border select-none
              ${
                hush[key]
                  ? "bg-red-500/10 border-red-500/30 text-red-400"
                  : "bg-gray-700/30 border-transparent text-gray-400 hover:bg-gray-700/50"
              }
            `}
          >
            <span className="text-xs font-bold uppercase tracking-wider mb-1">
              {key}
            </span>
            <div
              className={`w-8 h-4 rounded-full relative transition-colors ${hush[key] ? "bg-red-500" : "bg-gray-600"}`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${hush[key] ? "translate-x-4" : "translate-x-0"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
