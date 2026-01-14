/**
 * PreProessTextArea:
 * Renders a collapsible panel containing a text area for input and an output display for the Strudel editor.
 * It allows users to input code, which is then processed and displayed.
 * The component manages its collapsible state and integrates with Strudel editor refs.
 */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi"; // import the chevron icon

export default function PreProessTextArea({
  procValue,
  onProcChange,
  procRef,
  editorRootRef,
  outputRootRef,
}) {
  const [show, setShow] = useState(true);
  const containerRef = useRef(null); // Ref to the collapsible div
  const [maxHeight, setMaxHeight] = useState("0px"); // for smooth collapse/expand

  // Adjust maxHeight according to show state
  useEffect(() => {
    if (show && containerRef.current) {
      setMaxHeight(`${containerRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [show]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-4 md:px-6">
      {/* Toggle show Button */}
      <button
        onClick={() => setShow(!show)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl text-gray-200 hover:bg-gray-800 transition-all group mb-4"
      >
        <span className="font-bold text-sm uppercase tracking-wider">
          {show ? "Hide Editor Panel" : "Show Editor Panel"}
        </span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-400 group-hover:text-red-400 transition-transform duration-300 ${
            show ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Collapsible Panel */}
      <div
        ref={containerRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="grid md:grid-cols-2 gap-6 pb-2">
          {/* Text Area Input */}
          <div className="flex flex-col min-w-0">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
              Input Code
            </label>
            <div className="relative w-full bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl overflow-hidden p-1">
              <textarea
                ref={procRef}
                value={procValue}
                onChange={(e) => onProcChange(e.target.value)}
                className="w-full h-64 md:h-96 bg-gray-950 text-gray-300 p-4 focus:outline-none resize-none font-mono text-sm rounded-xl border-none placeholder-gray-700"
                placeholder="// Enter your code here..."
                spellCheck="false"
              />
            </div>
          </div>

          {/* Editor output */}
          <div className="flex flex-col min-w-0">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
              Console Output
            </label>
            <div className="relative w-full bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl overflow-hidden p-1">
              <div
                ref={editorRootRef}
                className="w-full h-64 md:h-96 bg-gray-950 text-gray-300 p-4 overflow-y-auto font-mono text-sm rounded-xl scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
              />
            </div>
            <div ref={outputRootRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
