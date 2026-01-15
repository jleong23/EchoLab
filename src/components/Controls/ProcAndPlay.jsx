export default function ProcAndPlay({ onProcPlay, isPlaying }) {
  return (
    <div className="flex justify-center w-full">
      <button
        onClick={onProcPlay}
        className={`relative w-full md:w-auto px-6 py-3 rounded-xl font-accent text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 shadow-lg active:scale-[0.98] ${
          isPlaying
            ? "bg-[rgba(var(--danger),0.2)] text-[rgba(var(--dangerSoft),1)] border border-[rgba(var(--danger),0.5)]"
            : "text-white"
        }`}
        style={{
          background: isPlaying
            ? undefined
            : "linear-gradient(to right, rgba(var(--danger),1), rgba(var(--danger),0.9))",
        }}
        onMouseOver={(e) => {
          if (!isPlaying)
            e.currentTarget.style.background =
              "linear-gradient(to right, rgba(var(--danger),0.9), rgba(var(--danger),1))";
        }}
        onMouseOut={(e) => {
          if (!isPlaying)
            e.currentTarget.style.background =
              "linear-gradient(to right, rgba(var(--danger),1), rgba(var(--danger),0.9))";
        }}
      >
        <span className="flex items-center justify-center gap-2">
          {isPlaying && (
            <span className="w-2 h-2 rounded-full bg-[rgba(var(--danger),1)] animate-ping" />
          )}
          PROC & PLAY
        </span>
      </button>
    </div>
  );
}
