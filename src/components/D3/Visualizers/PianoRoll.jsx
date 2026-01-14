import { useEffect, useRef } from "react";

export default function PianoRollCanvas({ canvasRef }) {
  const localRef = useRef(null);

  useEffect(() => {
    const canvas = localRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
  }, []);

  return (
    <canvas
      ref={(el) => {
        localRef.current = el;
        if (canvasRef) canvasRef.current = el;
      }}
      className="w-full h-64 md:h-96 bg-gray-950 rounded-xl"
    />
  );
}
