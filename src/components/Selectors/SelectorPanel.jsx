import DrumSoundSelector from "./DrumSoundSelector";
import DrumPatternSelector from "./DrumPatternSelector";

export default function SelectorPanel({
  drumBank,
  setDrumBank,
  pattern,
  setPattern,
}) {
  return (
    <div
      className="
      w-full max-w-md mx-auto mt-4
      p-4
      bg-panel/95 backdrop-blur-xl
      border border-panelBorder/10
      rounded-2xl
      shadow-xl
    "
    >
      <div className="grid grid-cols-2 gap-4">
        <DrumSoundSelector drumBank={drumBank} setDrumBank={setDrumBank} />
        <DrumPatternSelector pattern={pattern} setPattern={setPattern} />
      </div>
    </div>
  );
}
