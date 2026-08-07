import { useCallback, useEffect, useRef, useState } from "react";

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden select-none"
      style={{ backgroundColor: "var(--ink-soft)" }}
    >
      {/* AFTER panel (base) */}
      <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--ink-soft)]">
        <span className="label-eyebrow px-4 text-center text-[color:var(--muted-dark)]">
          After job photo — cleared Uxbridge garage
        </span>
        <span className="label-eyebrow absolute right-4 bottom-4 bg-[color:var(--bone)] px-3 py-1 text-[color:var(--ink)]">
          After
        </span>
      </div>

      {/* BEFORE panel (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          backgroundColor: "color-mix(in oklab, var(--ink) 88%, white)",
        }}
      >
        <span className="label-eyebrow px-4 text-center text-[color:var(--muted-dark)]">
          Before job photo — cluttered Uxbridge garage
        </span>
        <span className="label-eyebrow absolute bottom-4 left-4 bg-[color:var(--maple)] px-3 py-1 text-white">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-[color:var(--maple)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[color:var(--maple)] text-white">
          <span aria-hidden className="text-sm font-black">
            ‹ ›
          </span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after junk removal photo"
        className="absolute bottom-2 left-1/2 w-[70%] -translate-x-1/2 opacity-0 focus-visible:opacity-100"
      />
    </div>
  );
}
