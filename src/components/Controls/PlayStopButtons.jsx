/**
 * PlayStopButtons:
 * Renders Play and Stop buttons for controlling audio playback.
 * The `isPlaying` prop visually indicates the active playback state,
 * and `onPlay`/`onStop` props handle the click events.
 */

import { FaPlay, FaPause } from "react-icons/fa";

function PlayStopButtons({ onPlay, onStop, isPlaying }) {
  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {/* Play Button */}
      <button
        onClick={onPlay}
        className={`
          w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95
          ${
            isPlaying
              ? "bg-red-500 shadow-red-500/40 ring-2 ring-red-400 ring-offset-2 ring-offset-gray-900"
              : "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-black/30"
          }
        `}
        title="Play"
      >
        <FaPlay
          className={`w-5 h-5 md:w-6 md:h-6 text-white ${isPlaying ? "animate-pulse" : "ml-1"}`}
        />
      </button>

      {/* Stop Button */}
      <button
        onClick={onStop}
        className={`
          w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95
          bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700
        `}
        title="Stop"
      >
        <FaPause className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

export default PlayStopButtons;
