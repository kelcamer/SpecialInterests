import { useState } from "react";
import { APPS } from "./data/apps.js";
import ChannelStrip from "./components/ChannelStrip.jsx";
import AppCard from "./components/AppCard.jsx";

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="page">
      <header className="masthead">
        <div className="rule">
          <span className="mono">Kelsey Cameron</span>
          <span className="mono">{APPS.length} instruments · all public</span>
        </div>

        <h1>
          Things I built<br />
          to look at <em>brains</em>.
        </h1>

        <p className="standfirst">
          Eight web apps, mostly neuroscience, one about drums and one about my
          mother's opinion of the household. Each runs in the browser with
          nothing to install. Pick a channel.
        </p>
      </header>

      <ChannelStrip active={active} onHover={setActive} />

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
          <span className="card-kicker">Source</span>
          <h3 className="card-name">Everything on GitHub</h3>
          <p>
            Every app here is a public repo. Read the code, or take a copy.
          </p>
          <span className="card-foot">
            <span className="card-repo">/kelcamer</span>
            <span className="card-go">
              Browse
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false">
                <g fill="none" stroke="currentColor" strokeWidth="2"
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
