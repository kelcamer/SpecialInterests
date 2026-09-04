/* Instrument readouts. Each trace is generated to the width it is asked
   for, so a channel can run the full width of the recorder strip and the
   same geometry can sit small on a card. */

function steps(w, h) {
  // Reaction-time drill: a hold, a response, a hold.
  const y0 = h - 3, y1 = 3, mid = h / 2;
  const dwell = [0.06, 0.1, 0.05, 0.14, 0.07, 0.11, 0.06, 0.13, 0.08, 0.1];
  let x = 0, d = `M0 ${y0}`, up = false;
  dwell.forEach((f) => {
    x += f * w;
    d += ` H${x.toFixed(1)} V${up ? y0 : y1}`;
    up = !up;
  });
  d += ` H${w} `;
  return <path d={d} fill="none" strokeWidth="1.6" vectorEffect="non-scaling-stroke" style={{ stroke: "currentColor" }} />;
}

function ticks(w, h) {
  // The case register: one mark per case, clustered as the record thickens.
  const years = [0.0, 0.04, 0.05, 0.13, 0.2, 0.3, 0.37, 0.42, 0.46, 0.5,
                 0.55, 0.58, 0.62, 0.65, 0.68, 0.7, 0.73, 0.75, 0.77, 0.79,
                 0.81, 0.83, 0.85, 0.87, 0.88, 0.9, 0.92, 0.94, 0.96, 1.0];
  return (
    <>
      <line x1="0" y1={h / 2} x2={w} y2={h / 2} strokeWidth="1" opacity="0.45"
        vectorEffect="non-scaling-stroke" style={{ stroke: "currentColor" }} />
      {years.map((f, i) => {
        const x = Math.min(w - 0.5, f * w);
        const tall = i % 4 === 0;
        return (
          <line key={i} x1={x} y1={h / 2 - (tall ? h * 0.42 : h * 0.24)}
            x2={x} y2={h / 2 + (tall ? h * 0.42 : h * 0.24)}
            strokeWidth="1.4" vectorEffect="non-scaling-stroke"
            style={{ stroke: "currentColor" }} />
        );
      })}
    </>
  );
}

function contour(w, h) {
  // A sagittal outline — the atlas is a map of regions, so draw the map.
  const s = (n) => (n / 240) * w;
  const t = (n) => (n / 44) * h;
  return (
    <>
      <path
        d={`M${s(14)} ${t(30)} C${s(14)} ${t(12)} ${s(42)} ${t(4)} ${s(84)} ${t(6)}
            C${s(140)} ${t(8)} ${s(196)} ${t(14)} ${s(214)} ${t(24)}
            C${s(226)} ${t(31)} ${s(218)} ${t(38)} ${s(196)} ${t(40)}
            C${s(150)} ${t(43)} ${s(70)} ${t(42)} ${s(40)} ${t(38)}
            C${s(22)} ${t(36)} ${s(14)} ${t(34)} ${s(14)} ${t(30)} Z`}
        fill="none" strokeWidth="1.6" vectorEffect="non-scaling-stroke"
        style={{ stroke: "currentColor" }} />
      <path d={`M${s(40)} ${t(24)} C${s(74)} ${t(17)} ${s(120)} ${t(16)} ${s(160)} ${t(20)}`}
        fill="none" strokeWidth="1.1" opacity="0.55" vectorEffect="non-scaling-stroke"
        style={{ stroke: "currentColor" }} />
      <ellipse cx={s(112)} cy={t(28)} rx={s(15)} ry={t(6)} fill="currentColor" opacity="0.5" />
      <ellipse cx={s(178)} cy={t(30)} rx={s(11)} ry={t(5)} fill="currentColor" opacity="0.32" />
    </>
  );
}

function diverging(w, h) {
  // Taxa running high or low: bars off a midline, both directions.
  const vals = [0.7, -0.35, 0.45, -0.8, 0.25, 0.6, -0.5, 0.9, -0.2, 0.4,
                -0.65, 0.3, 0.75, -0.45, 0.55, -0.3, 0.85, -0.55, 0.35, -0.7];
  const mid = h / 2, bw = Math.max(1.5, (w / vals.length) * 0.5);
  return (
    <>
      <line x1="0" y1={mid} x2={w} y2={mid} strokeWidth="1" opacity="0.4"
        vectorEffect="non-scaling-stroke" style={{ stroke: "currentColor" }} />
      {vals.map((v, i) => {
        const x = (i + 0.5) * (w / vals.length) - bw / 2;
        const len = Math.abs(v) * (h / 2 - 2);
        return (
          <rect key={i} x={x} y={v > 0 ? mid - len : mid} width={bw} height={len}
            fill="currentColor" opacity={v > 0 ? 0.9 : 0.42} />
        );
      })}
    </>
  );
}

function histogram(w, h) {
  // Papers surfacing per day.
  const vals = [3, 5, 2, 6, 4, 7, 3, 5, 8, 4, 6, 2, 5, 7, 3, 6, 4, 8, 5, 3];
  const max = 8, bw = Math.max(1.5, (w / vals.length) * 0.55);
  return (
    <>
      {vals.map((v, i) => {
        const bh = (v / max) * (h - 4);
        return (
          <rect key={i} x={(i + 0.5) * (w / vals.length) - bw / 2} y={h - bh}
            width={bw} height={bh} fill="currentColor" opacity={0.35 + (v / max) * 0.6} />
        );
      })}
      <line x1="0" y1={h - 0.5} x2={w} y2={h - 0.5} strokeWidth="1" opacity="0.5"
        vectorEffect="non-scaling-stroke" style={{ stroke: "currentColor" }} />
    </>
  );
}

function sixteenths(w, h) {
  // One bar of sixteenths: hats on every step, kick and snare where they fall.
  const hat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  const kick =[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0];
  const snr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
  const step = w / 16, cw = Math.max(1.6, step * 0.42);
  const rows = [hat, snr, kick];
  return (
    <>
      {rows.map((row, r) =>
        row.map((on, i) =>
          on ? (
            <rect key={`${r}-${i}`} x={i * step + (step - cw) / 2}
              y={2 + r * ((h - 4) / 3) + 1} width={cw}
              height={(h - 4) / 3 - 2} fill="currentColor"
              opacity={r === 0 ? 0.4 : 0.95} />
          ) : null
        )
      )}
      {[4, 8, 12].map((i) => (
        <line key={i} x1={i * step} y1="0" x2={i * step} y2={h}
          strokeWidth="1" opacity="0.22" vectorEffect="non-scaling-stroke"
          style={{ stroke: "currentColor" }} />
      ))}
    </>
  );
}

function tally(w, h) {
  // Five-bar gates, the way a record like this actually gets kept.
  const groups = Math.max(3, Math.floor(w / 34));
  const gw = w / groups;
  const out = [];
  for (let g = 0; g < groups; g++) {
    const x0 = g * gw + gw * 0.12;
    const inner = gw * 0.62;
    for (let i = 0; i < 4; i++) {
      const x = x0 + (inner / 4) * i;
      out.push(
        <line key={`${g}-${i}`} x1={x} y1={4} x2={x} y2={h - 4}
          strokeWidth="1.7" vectorEffect="non-scaling-stroke"
          style={{ stroke: "currentColor" }} />
      );
    }
    out.push(
      <line key={`${g}-s`} x1={x0 - inner * 0.08} y1={h - 5}
        x2={x0 + inner * 0.85} y2={5} strokeWidth="1.7" opacity="0.85"
        vectorEffect="non-scaling-stroke" style={{ stroke: "currentColor" }} />
    );
  }
  return out;
}

const KINDS = { steps, ticks, contour, diverging, histogram, sixteenths, tally };

export default function Trace({ kind, w = 240, h = 44, className = "" }) {
  const draw = KINDS[kind] || steps;
  return (
    <svg
      className={`trace ${className}`}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      {draw(w, h)}
    </svg>
  );
}
