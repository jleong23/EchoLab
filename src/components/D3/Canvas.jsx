/**
 * Canvas:
 * Renders main D3 visualtization components.
 * Displays:
 * 1. Piano Roll on the left
 * 2. Data Graph on the right
 */
import DataGraph from "./Visualizers/DataGraph";
import PianoRollCanvas from "./Visualizers/PianoRoll";

export default function Canvas({ canvasRef, d3Data }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto mt-8 px-4 md:px-6">
      {/* Piano Roll on the left */}
      <div className="flex-1 flex flex-col min-w-0">
        <label className="text-xs font-bold text-muted uppercase tracking-wider mb-3 ml-1">
          Live Piano Roll
        </label>
        <div className="relative w-full backdrop-blur-md border border-panelBorder rounded-2xl shadow-xl overflow-hidden p-1">
          <PianoRollCanvas canvasRef={canvasRef} />
        </div>
      </div>

      {/* Data Graph on the right */}
      <div className="flex-1 flex flex-col min-w-0">
        <label className="text-xs font-bold text-muted uppercase tracking-wider mb-3 ml-1">
          Frequency Visualizer
        </label>
        <DataGraph data={d3Data} />
      </div>
    </div>
  );
}
