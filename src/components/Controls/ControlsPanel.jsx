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
    <div className="w-full max-w-md mx-auto panel p-4 md:p-6 flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4">
        <ProcAndPlay onProcPlay={onProcPlay} isPlaying={isPlaying} />
        <PlayStopButtons
          onPlay={onPlay}
          onStop={onStop}
          isPlaying={isPlaying}
        />
      </div>

      <hr className="border-panelBorder/20" />

      <MuteControls hush={hush} setHush={setHush} />

      <div className="flex flex-col gap-5 bg-panelInner/30 p-4 rounded-xl border border-panelBorder/20">
        <TempoControl tempo={tempo} setTempo={setTempo} />
        <ReverbControl reverb={reverb} setReverb={setReverb} />
        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
}
