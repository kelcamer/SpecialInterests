import { useState } from "react";
import { APPS } from "./data/apps.js";
import Spectrum from "./components/Spectrum.jsx";
import AppCard from "./components/AppCard.jsx";

/* The title carries the palette: one letter per interest, in that
   interest's own colour, so the page states its logic before it explains it. */
const PENS = ["blue", "rose", "violet", "green", "teal", "amber", "red"];
const WORD = "Interests";

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="page">
      <header className="masthead">
        <div className="rule">
          <span className="mono">Kelsey Cameron</span>
          <span className="mono">{APPS.length} of them · all public</span>
        </div>

        <h1>
          Special{" "}
          <span className="rainbow">
            {WORD.split("").map((ch, i) => (
              <span key={i} className={`pen-${PENS[i % PENS.length]}`}>
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <p className="standfirst">
          Seven things I got obsessed with and then built. Mostly neuroscience,
          one about drums, one about my mother's opinion of the household.
          Everything runs in the browser — nothing to install, nothing to sign
          up for.
        </p>
      </header>

      <Spectrum active={active} onHover={setActive} />

      <section className="grid" aria-label="All apps">
        {APPS.map((a) => (
          <AppCard key={a.id} app={a} lit={active === a.id} onHover={setActive} />
        ))}

        <a
          className="card end"
          href="https://github.com/kelcamer?tab=repositories"
          target="_blank"
          rel="noopener"
        >
          <span className="card-top">
            <span className="card-kicker">Source</span>
          </span>
          <h3 className="card-name">All of it, on GitHub</h3>
          <p className="card-blurb">
            Every app here is a public repo. Read the code, or take a copy and
            make it yours.
          </p>
          <span className="card-foot">
            <span className="card-repo">/kelcamer</span>
            <span className="card-go">
              Browse
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
      </section>

      <footer>
        <p className="mono">
          Built and hosted on GitHub Pages ·{" "}
          <a href="https://github.com/kelcamer" target="_blank" rel="noopener">
            github.com/kelcamer
          </a>
        </p>
      </footer>
    </div>
  );
}
