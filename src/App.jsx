import { useState } from "react";
import { APPS } from "./data/apps.js";
import { hueFor } from "./data/synesthesia.js";
import Spectrum from "./components/Spectrum.jsx";
import AppCard from "./components/AppCard.jsx";

/* The title is set in the Fisher-Price alphabet-magnet colours: red,
   orange, yellow, green, blue, purple, cycling from A. The colour belongs
   to the letter, so every "e" matches every other "e". See
   data/synesthesia.js. */
function Synesthetic({ text }) {
  return text.split("").map((ch, i) => {
    const hue = hueFor(ch);
    return hue ? (
      <span key={i} className={`ltr ltr-${hue}`}>{ch}</span>
    ) : (
      <span key={i}>{ch}</span>
    );
  });
}

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
          <Synesthetic text="Special Interests" />
        </h1>

        <p className="standfirst">
          Eight things I got obsessed with and then built. Mostly neuroscience,
          one about drums, and one about my mother's opinion of the things that
          her friends do. Everything runs in the browser, nothing to install or sign
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
