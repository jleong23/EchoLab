/**
 * ReverbControl:
 * Renders a slider to control the reverb level.
 * It displays the current reverb value and allows the user to adjust it.
 */

export default function ReverbControl({ reverb = 0, setReverb }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="flex justify-between items-center text-gray-300 text-sm font-medium">
        <span>Reverb</span>
        <span className="text-red-400 font-mono text-xs">
          {reverb.toFixed(2)}
        </span>
      </label>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={reverb}
        onChange={(e) => setReverb(parseFloat(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-red-500 hover:accent-red-400 transition-all"
      />
    </div>
  );
}
