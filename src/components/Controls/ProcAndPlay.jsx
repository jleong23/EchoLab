export default function ProcAndPlay({ onProcPlay, isPlaying }) {
  return (
    <div className="flex justify-center w-full">
      {/* Proc & Play Button */}
      <button
        onClick={onProcPlay}
        className={`
          relative w-full md:w-auto px-6 py-3 rounded-xl font-accent text-sm md:text-base font-bold tracking-wider uppercase
          transition-all duration-300 shadow-lg transform active:scale-[0.98]
          ${
            isPlaying
              ? "bg-red-500/20 text-red-400 border border-red-500/50 shadow-red-900/20"
              : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-red-900/30 border border-transparent"
          }
        `}
      >
        <span className="flex items-center justify-center gap-2">
          {isPlaying && (
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          )}
          PROC & PLAY
        </span>
      </button>
    </div>
  );
}
