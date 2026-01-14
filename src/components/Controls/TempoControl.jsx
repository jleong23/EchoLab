/**
 * TempoControl:
 * Renders a slider and a number input to control the tempo (BPM).
 * It allows for both quick adjustments through the slider and precise input via the text box.
 */
import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

export default function TempoControl({ tempo, setTempo }) {
  const [inputValue, setInputValue] = useState(tempo); // local input state

  // Keep local input synced if tempo changes externally
  useEffect(() => {
    setInputValue(tempo);
  }, [tempo]);

  // Apply only when tick is clicked
  const applyTempo = () => {
    const newTempo = Number(inputValue);
    if (!isNaN(newTempo) && newTempo > 0) {
      setTempo(newTempo);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="flex justify-between items-end text-gray-300 text-sm font-medium mb-1">
        <span>Tempo</span>
        <div className="flex items-center gap-1">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-12 bg-gray-800 border border-gray-600 text-center rounded text-xs text-white p-0.5 focus:outline-none focus:border-red-500 transition-colors"
          />
          <button
            onClick={applyTempo}
            className="bg-gray-700 hover:bg-red-600 text-white rounded p-0.5 transition-colors"
          >
            <TiTick size={14} />
          </button>
        </div>
      </label>

      {/* Slider */}
      <input
        type="range"
        min="50"
        max="200"
        value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-red-500 hover:accent-red-400 transition-all"
      />
    </div>
  );
}
