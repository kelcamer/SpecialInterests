import Trace from "./Trace.jsx";
import { APPS } from "../data/apps.js";

/* All of them at once, as colour. Hovering a band widens it — the only
   motion on the page, and it is opt-in, reversible and predictable. */
export default function Spectrum({ active, onHover }) {
  return (
    <div className="spectrum" onMouseLeave={() => onHover(null)}>
      {APPS.map((a, i) => (
        <a
          key={a.id}
          className={`band pen-${a.pen}${active === a.id ? " lit" : ""}`}
          href={a.url}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => onHover(a.id)}
          onFocus={() => onHover(a.id)}
          onBlur={() => onHover(null)}
        >
          <span className="band-no">{String(i + 1).padStart(2, "0")}</span>
          <span className="band-trace">
            <Trace kind={a.trace} w={200} h={40} />
          </span>
          <span className="band-name">{a.name}</span>
        </a>
      ))}
    </div>
  );
}
