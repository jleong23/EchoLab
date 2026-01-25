/**
 * PreProessTextArea:
 * Renders a collapsible panel containing a text area for input and an output display for the Strudel editor.
 * Supports dark/light themes using CSS variables.
 */

import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function PreProessTextArea({
  procValue,
  onProcChange,
  procRef,
  editorRootRef,
  outputRootRef,
}) {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Handle collapsible panel height
  useEffect(() => {
    if (show && containerRef.current) {
      setMaxHeight(`${containerRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [show]);

  // Apply theme styles to textarea and editor panels
  useEffect(() => {
    if (procRef?.current) {
      procRef.current.style.backgroundColor = `rgb(var(--panelInner))`;
      procRef.current.style.color = `rgb(var(--text))`;
      procRef.current.style.borderColor = `rgba(var(--panelBorder), 0.3)`;
    }
    if (editorRootRef?.current) {
      editorRootRef.current.style.backgroundColor = `rgb(var(--panelInner))`;
      editorRootRef.current.style.color = `rgb(var(--text))`;
    }
    if (outputRootRef?.current) {
      outputRootRef.current.style.backgroundColor = `rgb(var(--panelInner)/0.9)`;
      outputRootRef.current.style.color = `rgb(var(--text))`;
    }
  }, [procRef, editorRootRef, outputRootRef]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-4 md:px-6">
      {/* Toggle show button */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={() => setShow(!show)}
          className={`
            w-full flex items-center justify-center gap-2
            px-6 py-4 rounded-xl font-accent text-sm md:text-base
            font-bold tracking-wider uppercase transition-all duration-300
            shadow-lg active:scale-[0.98]
            bg-blue-900 hover:bg-red-800 text-white
            border border-red-700
            group mb-4
          `}
        >
          <span className="font-bold text-sm uppercase tracking-wider">
            {show ? "Hide Editor Panel" : "Show Editor Panel"}
          </span>
          <FiChevronDown
            className={`w-5 h-5 text-white transition-transform duration-300 ${
              show ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Collapsible panel */}
      <div
        ref={containerRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="grid md:grid-cols-2 gap-6 pb-2">
          {/* Text Area Input */}
          <div className="flex flex-col min-w-0">
            <label className="text-xs font-bold text-muted uppercase tracking-wider mb-3 ml-1">
              Input Code
            </label>
            <div className="relative w-full bg-panel/95 backdrop-blur-md border border-panelBorder/30 rounded-2xl shadow-xl overflow-hidden p-1">
              <textarea
                ref={procRef}
                value={procValue}
                onChange={(e) => onProcChange(e.target.value)}
                className="w-full h-64 md:h-96 p-4 resize-none font-code text-sm rounded-xl border-none focus:outline-none placeholder-muted"
                placeholder="// Enter your code here..."
                spellCheck="false"
              />
            </div>
          </div>

          {/* Editor output */}
          <div className="flex flex-col min-w-0">
            <label className="text-xs font-bold text-muted uppercase tracking-wider mb-3 ml-1">
              Processed Code
            </label>
            <div className="relative w-full bg-panel/95 backdrop-blur-md border border-panelBorder/30 rounded-2xl shadow-xl overflow-hidden p-1">
              <div
                ref={editorRootRef}
                className="w-full h-64 md:h-96 p-4 overflow-y-auto font-code text-sm rounded-xl scrollbar-thin scrollbar-thumb-panelBorder scrollbar-track-transparent"
              />
            </div>
            <div ref={outputRootRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
