/**
 * ControlsPanel:
 * Renders a control panel with various audio controls.
 * This component includes playback buttons, mute toggles, and sliders for
 * tempo, reverb, and volume. It aggregates several smaller control components
 * into a single, unified panel.
 */

import MuteControls from "./MuteControls";
import PlayStopButtons from "../Controls/PlayStopButtons";
import ProcAndPlay from "../Controls/ProcAndPlay";
import TempoControl from "../Controls/TempoControl";
import ReverbControl from "../Controls/ReverbControl";
import VolumeSlider from "./VolumeSlider";

export default function ControlsPanel({
  onPlay,
  onStop,
  onProcPlay,
  hush,
  setHush,
  tempo,
  setTempo,
  volume,
  setVolume,
  reverb,
  setReverb,
  isPlaying,
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-900/95 backdrop-blur-md border border-gray-800 p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col gap-6">
      {/* Top Section: Main Actions */}
      <div className="flex flex-col items-center gap-4">
        <ProcAndPlay onProcPlay={onProcPlay} isPlaying={isPlaying} />
        <PlayStopButtons
          onPlay={onPlay}
          onStop={onStop}
          isPlaying={isPlaying}
        />
      </div>

      <hr className="border-gray-800" />

      {/* Middle Section: Toggles */}
      <MuteControls hush={hush} setHush={setHush} />

      {/* Bottom Section: Sliders */}
      <div className="flex flex-col gap-5 bg-gray-800/30 p-4 rounded-xl border border-gray-800/50">
        <TempoControl tempo={tempo} setTempo={setTempo} />
        <ReverbControl reverb={reverb} setReverb={setReverb} />
        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
}
