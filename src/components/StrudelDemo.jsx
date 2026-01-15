import { useRef, useEffect, useState } from "react";
import useStrudelEditor from "../hooks/useStrudelEditor";
import PreProessTextArea from "./Editor/PreProessTextArea";
import ControlsPanel from "./Controls/ControlsPanel";
import console_monkey_patch from "../console-monkey-patch";
import { stranger_tune } from "../tunes";
import SelectorPanel from "./Selectors/SelectorPanel";
import { buildAndEvaluate } from "../hooks/useProcessedEditor";
import usePlaybackControls from "../hooks/usePlaybackControls";
import useSaveJSON from "../hooks/useSaveJSON";
import SaveJSON from "./SaveChanges/SaveJSON";
import Canvas from "./D3/Canvas";

export default function StrudelDemo() {
  const editorRootRef = useRef(null);
  const outputRootRef = useRef(null);
  const canvasRef = useRef(null);
  const procRef = useRef(null);

  const [procValue, setProcValue] = useState(stranger_tune || "");
  const [hush, setHush] = useState({ drums: false, bass: false, arps: false });
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(140);
  const [pattern, setPattern] = useState(0);
  const [reverb, setReverb] = useState(0.6);
  const [volume, setVolume] = useState(1);
  const [drumBank, setDrumBank] = useState("RolandTR808");
  const [statusMessage, setStatusMessage] = useState("");
  const [d3Data, setD3Data] = useState(null);

  const getCurrentState = () => ({
    hush,
    tempo,
    pattern,
    reverb,
    volume,
    drumBank,
    procValue,
  });

  const { saveToJson, loadFromJson } = useSaveJSON({
    getCurrentState,
    setHush,
    setTempo,
    setPattern,
    setReverb,
    setVolume,
    setDrumBank,
    setProcValue,
    setStatusMessage,
  });

  const { evaluate, stop, setCode, ready, getReplState, editor } =
    useStrudelEditor({
      editorRootRef,
      outputRootRef,
      canvasRef,
      initialCode: procValue,
    });

  const { handleProcAndPlay, handlePlay, handleStop, syncMuteStates } =
    usePlaybackControls({
      editor,
      setCode,
      evaluate,
      stop,
      getReplState,
      procValue,
      hush,
      reverb,
      volume,
      pattern,
      drumBank,
      tempo,
      isPlaying,
      setIsPlaying,
    });

  useEffect(() => {
    console_monkey_patch();
    const handleD3Data = (e) => setD3Data(e.detail);
    document.addEventListener("d3Data", handleD3Data);
    return () => document.removeEventListener("d3Data", handleD3Data);
  }, []);

  // Manual code changes
  useEffect(() => {
    if (!editor) return;
    const timer = setTimeout(() => {
      buildAndEvaluate(
        {
          editor,
          setCode,
          evaluate,
          getReplState,
          procValue,
          hush,
          reverb,
          volume,
          pattern,
          drumBank,
          tempo,
          syncMuteStates,
        },
        { evaluateIfPlaying: true, skipTempo: true }
      );
    }, 150);
    return () => clearTimeout(timer);
  }, [procValue, editor, setCode, evaluate, syncMuteStates]);

  // Control changes (sliders, toggles)
  useEffect(() => {
    if (!editor) return;
    const timer = setTimeout(() => {
      buildAndEvaluate(
        {
          editor,
          setCode,
          evaluate,
          getReplState,
          procValue,
          hush,
          reverb,
          volume,
          pattern,
          drumBank,
          tempo,
          syncMuteStates,
        },
        { evaluateIfPlaying: true }
      );
      syncMuteStates();
    }, 150);
    return () => clearTimeout(timer);
  }, [
    hush,
    reverb,
    volume,
    pattern,
    drumBank,
    tempo,
    editor,
    setCode,
    evaluate,
    getReplState,
    syncMuteStates,
  ]);

  // Status message timer
  useEffect(() => {
    if (!statusMessage) return;
    const timer = setTimeout(() => setStatusMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  return (
    <div className="p-6 bg-panel min-h-screen text-text">
      <h2 className="text-5xl my-4 font-heading font-bold text-danger text-center">
        EchoLab
      </h2>

      <ControlsPanel
        onPlay={handlePlay}
        onStop={handleStop}
        onProcPlay={handleProcAndPlay}
        isPlaying={isPlaying}
        hush={hush}
        setHush={setHush}
        tempo={tempo}
        setTempo={setTempo}
        volume={volume}
        setVolume={setVolume}
        reverb={reverb}
        setReverb={setReverb}
        saveToJson={saveToJson}
        loadFromJson={loadFromJson}
      />

      <SelectorPanel
        drumBank={drumBank}
        setDrumBank={setDrumBank}
        pattern={pattern}
        setPattern={setPattern}
      />

      <div className="mt-2 text-text flex justify-center gap-6">
        <div>Editor ready: {ready ? "yes" : "no"}</div>
        <div>Repl started: {getReplState().started ? "yes" : "no"}</div>
      </div>

      <div className="mt-4 flex justify-end">
        <SaveJSON
          saveToJson={saveToJson}
          loadFromJson={loadFromJson}
          statusMessage={statusMessage}
        />
      </div>

      <div className="mt-6 space-y-6">
        <Canvas canvasRef={canvasRef} d3Data={d3Data} />
        <PreProessTextArea
          procValue={procValue}
          onProcChange={setProcValue}
          procRef={procRef}
          editorRootRef={editorRootRef}
          outputRootRef={outputRootRef}
        />
      </div>
    </div>
  );
}
