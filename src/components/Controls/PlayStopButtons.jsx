import { FaPlay, FaPause } from "react-icons/fa";

export default function PlayStopButtons({ onPlay, onStop, isPlaying }) {
  return (
    <div className="flex justify-center gap-4 md:gap-6">
      <button
        onClick={onPlay}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 ${
          isPlaying
            ? "bg-danger shadow-danger/40 ring-2 ring-dangerSoft ring-offset-2 ring-offset-panel"
            : "bg-danger hover:bg-red-800"
        }`}
      >
        <FaPlay
          className={`w-5 h-5 md:w-6 md:h-6 text-white ${
            isPlaying ? "animate-pulse" : "ml-1"
          }`}
        />
      </button>

      <button
        onClick={onStop}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 bg-panelInner hover:bg-panelMuted text-muted hover:text-white border border-panelBorder/30"
      >
        <FaPause className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
