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
      <label className="text-xs font-bold text-muted uppercase tracking-wider ml-1">
        Kit
      </label>

      <div className="relative group">
        <select
          value={drumBank}
          onChange={(e) => setDrumBank(e.target.value)}
          className="
            w-full appearance-none
            bg-panelInner hover:bg-panelMuted
            border border-panelBorder/30
            text-text hover:text-white text-sm
            rounded-xl
            px-3 py-2.5 pr-8
            focus:outline-none
            focus:border-danger
            focus:ring-1 focus:ring-danger
            transition-all duration-200
            cursor-pointer
            shadow-sm
          "
        >
          {kits.map((kit) => (
            <option key={kit} value={kit} className="bg-panelInner text-text">
              {kit}
            </option>
          ))}
        </select>

        <div
          className="
            absolute inset-y-0 right-0
            flex items-center px-3
            pointer-events-none
            text-muted
            group-hover:text-dangerSoft
            transition-colors
          "
        >
          <FaChevronDown size={10} />
        </div>
      </div>
    </div>
  );
}
