/**
 * SaveJSON:
 * Renders buttons for saving the current state to a JSON file and loading state from one.
 * It also displays a status message to provide feedback on these operations.
 * The save/load logic is handled by the parent component via props.
 */
import { FaSave } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
export default function SaveJSON({ saveToJson, loadFromJson, statusMessage }) {
  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl">
      <div className="flex gap-4">
        {/* Save Button */}
        <button
          onClick={saveToJson}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 px-4 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95 group"
        >
          <span className="font-bold text-sm uppercase tracking-wider">
            Save
          </span>
          <FaSave
            className="text-red-500 group-hover:text-red-400 transition-colors"
            size={16}
          />
        </button>

        <label className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 px-4 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-200 active:scale-95 group select-none">
          {/* Load Button */}
          <span className="font-bold text-sm uppercase tracking-wider">
            Load
          </span>
          <CiSaveDown2
            className="text-red-500 group-hover:text-red-400 transition-colors"
            size={20}
          />

          <input
            type="file"
            accept="application/json"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) loadFromJson(file);
              e.target.value = ""; // dont trigger onChange again if same file selected.
            }}
            className="hidden"
          />
        </label>
      </div>

      {/* Status Message if Succesfully load / save */}
      {statusMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fadeInOut w-max max-w-[90vw]">
          <div
            className={`px-4 py-2 rounded-full shadow-2xl text-sm font-bold tracking-wide text-white backdrop-blur-xl border transition-all duration-300 flex items-center gap-2 ${
              statusMessage.startsWith("Succesfully")
                ? "bg-green-500/20 border-green-500/50 text-green-200 shadow-green-900/20"
                : "bg-red-500/20 border-red-500/50 text-red-200 shadow-red-900/20"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${statusMessage.startsWith("Succesfully") ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
            ></span>
            {statusMessage}
          </div>
        </div>
      )}
    </div>
  );
}
