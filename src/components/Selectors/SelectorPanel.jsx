/**
 * SelectorPanel:
 * Renders a panel that combines the DrumSoundSelector and DrumPatternSelector components.
 * It uses a grid layout to arrange the drum sound & pattern selectors.
 */
import DrumSoundSelector from "./DrumSoundSelector";
import DrumPatternSelector from "./DrumPatternSelector";

export default function SelectorPanel({
  drumBank,
  setDrumBank,
  pattern,
  setPattern,
}) {
  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl">
      <div className="grid grid-cols-2 gap-4">
        <DrumSoundSelector drumBank={drumBank} setDrumBank={setDrumBank} />
        <DrumPatternSelector pattern={pattern} setPattern={setPattern} />
      </div>
    </div>
  );
}
