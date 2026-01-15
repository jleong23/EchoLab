/**
 * DataGraph:
 * Processes raw numeric audio data and renders bass frequencies and drum frequencies
 */
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function DataGraph({ data }) {
  const maxPoints = 50;

  // ensure input data is Numeric
  const numericData = Array.isArray(data)
    ? data.map((v) => parseFloat(v) || 0) // ensure input data is Numeric , if not = 0
    : [];
  const third = Math.ceil(numericData.length / 3); //

  // maxPoints to limit chart width
  const bassData = numericData.slice(0, third).slice(-maxPoints);
  const drumData = numericData.slice(third, 2 * third).slice(-maxPoints);

  return (
    <div className="bg-panel/95 backdrop-blur-md border border-panelBorder rounded-2xl shadow-xl p-4 flex flex-col gap-4 h-full min-h-[300px]">
      <LineChart data={bassData} />
      <BarChart data={drumData} />
    </div>
  );
}
