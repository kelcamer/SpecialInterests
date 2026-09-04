import Trace from "./Trace.jsx";
import { APPS } from "../data/apps.js";

/* Eight channels on one sheet. It reads as a recording and works as an
   index: each row is the app, and hovering it lifts the matching card. */
export default function ChannelStrip({ active, onHover }) {
  return (
    <div className="strip" onMouseLeave={() => onHover(null)}>
      <div className="strip-head">
        <span>Channel</span>
        <span>Readout</span>
      </div>

      {APPS.map((a, i) => (
        <a
          key={a.id}
          className={`channel pen-${a.pen}${active === a.id ? " lit" : ""}`}
          href={a.url}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => onHover(a.id)}
          onFocus={() => onHover(a.id)}
          onBlur={() => onHover(null)}
        >
          <span className="ch-no">{String(i + 1).padStart(2, "0")}</span>
          <span className="ch-name">
            {a.name}
            {a.variant ? <i> · {a.variant}</i> : null}
          </span>
          <span className="ch-trace">
            <Trace kind={a.trace} w={620} h={22} />
          </span>
          <span className="ch-measure">{a.measures}</span>
        </a>
      ))}
    </div>
  );
}
