import { FaSave } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

export default function SaveJSON({ saveToJson, loadFromJson, statusMessage }) {
  const isSuccess = statusMessage?.startsWith("Succesfully");

  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-panel/95 backdrop-blur-md border border-muted/30 rounded-2xl shadow-xl">
      <div className="flex gap-4">
        {/* Save Button */}
        <button
          onClick={saveToJson}
          className="flex-1 flex items-center justify-center gap-2 bg-panel hover:bg-muted/20 border border-muted text-text px-4 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95 group"
        >
          <span className="font-bold text-sm uppercase tracking-wider">
            Save
          </span>
          <FaSave
            className="text-danger group-hover:text-danger/80 transition-colors"
            size={16}
          />
        </button>

        {/* Load Button */}
        <label className="flex-1 flex items-center justify-center gap-2 bg-panel hover:bg-muted/20 border border-muted text-text px-4 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-200 active:scale-95 group select-none">
          <span className="font-bold text-sm uppercase tracking-wider">
            Load
          </span>
          <CiSaveDown2
            className="text-danger group-hover:text-danger/80 transition-colors"
            size={20}
          />
          <input
            type="file"
            accept="application/json"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) loadFromJson(file);
              e.target.value = ""; // reset
            }}
            className="hidden"
          />
        </label>
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fadeInOut w-max max-w-[90vw]">
          <div
            className={`px-4 py-2 rounded-full shadow-2xl text-sm font-bold tracking-wide backdrop-blur-xl border flex items-center gap-2 transition-all duration-300
              ${
                isSuccess
                  ? "bg-success/20 border-success/50 text-success/90 shadow-success/20"
                  : "bg-danger/20 border-danger/50 text-danger/90 shadow-danger/20"
              }
            `}
          >
            <span
              className={`w-2 h-2 rounded-full ${isSuccess ? "bg-success animate-pulse" : "bg-danger"}`}
            ></span>
            {statusMessage}
          </div>
        </div>
      )}
    </div>
  );
}
