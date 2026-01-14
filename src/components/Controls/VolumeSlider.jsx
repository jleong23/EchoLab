/**
 * VolumeSliders:
 * Renders a slider and a mute/unmute button to control the master volume.
 * It allows the user to adjust the volume and toggle mute.
 */
import { useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

export default function VolumeSlider({ volume, setVolume }) {
  const [muted, setMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);

  // Sync muted state if volume is set externally
  useEffect(() => {
    if (volume === 0 && !muted) setMuted(true);
    if (volume > 0 && muted) setMuted(false);
  }, [volume]);

  const toggleMute = () => {
    if (!muted) {
      setPrevVolume(volume);
      setVolume(0);
      setMuted(true);
    } else {
      setVolume(prevVolume || 1);
      setMuted(false);
    }
  };

  const VolumeIcon = () => {
    if (muted || volume === 0) return <FaVolumeMute />;
    if (volume < 0.5) return <FaVolumeDown />;
    return <FaVolumeUp />;
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-center text-gray-300 text-sm font-medium">
        <span>Volume</span>
        <span className="text-red-400 font-mono text-xs">
          {muted ? "0.00" : volume.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleMute}
          className={`
            p-2 rounded-lg transition-colors duration-200 flex-shrink-0
            ${
              muted
                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }
          `}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          <VolumeIcon />
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={muted ? 0 : volume}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setVolume(val);
            setMuted(val === 0);
            if (val > 0) setPrevVolume(val);
          }}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-red-500 hover:accent-red-400 transition-all"
        />
      </div>
    </div>
  );
}
