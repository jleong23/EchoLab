/**
 * DrumSoundSelector:
 * Renders a dropdown menu ( select element ) to allow users to choose a drum kit ( sound bank )
 * onChange event is triggered when user selects a new kit from the dropdown.
 */
import { FaChevronDown } from "react-icons/fa";

export default function DrumSoundSelector({ drumBank, setDrumBank }) {
  const kits = [
    "RolandTR808",
    "RolandTR909",
    "KorgDDM110",
    "ElektronAnalogRytm",
  ];

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
        Kit
      </label>
      <div className="relative group">
        <select
          value={drumBank}
          onChange={(e) => setDrumBank(e.target.value)}
          className="w-full appearance-none bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 text-sm rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200 cursor-pointer shadow-sm"
        >
          {kits.map((kit) => (
            <option key={kit} value={kit} className="bg-gray-800">
              {kit}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 group-hover:text-red-400 transition-colors">
          <FaChevronDown size={10} />
        </div>
      </div>
    </div>
  );
}
