import Trace from "./Trace.jsx";

export default function AppCard({ app, lit, onHover }) {
  return (
    <a
      className={`card pen-${app.pen}${lit ? " lit" : ""}`}
      href={app.url}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => onHover(app.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(app.id)}
      onBlur={() => onHover(null)}
    >
      <span className="card-top">
        <span className="card-kicker">{app.kicker}</span>
        <span className="card-measures">{app.measures}</span>
      </span>

      <span className="card-trace">
        <Trace kind={app.trace} w={260} h={56} />
      </span>

      <h3 className="card-name">{app.name}</h3>
      <p className="card-blurb">{app.blurb}</p>

      <span className="card-foot">
        <span className="card-repo">/{app.repo}</span>
        <span className="card-go">
          Open
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="2.4"
               strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13,6 19,12 13,18" />
            </g>
          </svg>
        </span>
      </span>
    </a>
  );
}
