# Rules

## 1. Every new web app gets added to this index

When Kelsey publishes another web app, add it here. Not "eventually" — as
part of shipping it. An app that isn't on this page is invisible.

This is the front door to everything at `github.com/kelcamer`. It only
works if it stays complete.

### How to add one

Append an entry to the `APPS` array in [`src/data/apps.js`](src/data/apps.js).
That single object drives the count in the header, the spectrum band and
the card — there is nothing else to update.

```js
{
  id: "short-slug",              // unique, lowercase
  name: "What It's Called",      // use the app's real <title>
  kicker: "Category",            // 1–2 words, e.g. "Training", "Case atlas"
  measures: "what it shows",     // the small mono line, e.g. "50 grooves"
  blurb: "One or two sentences saying what it actually does.",
  url: "https://kelcamer.github.io/REPO/",
  repo: "REPO",                  // repo name, shown as /REPO
  pen: "blue",                   // colour identity — see below
  trace: "steps",                // readout drawn for it — see below
}
```

Then `npm run build` to check it compiles, commit, and push. The Pages
workflow deploys on every push to `main`.

### Writing the blurb

Take it from the app's own `<title>` and `<meta name="description">`
where those exist. Say what the app does, not why it's interesting.
Don't invent capabilities it doesn't have.

### Colours (`pen`)

`blue` · `rose` · `violet` · `green` · `teal` · `amber` · `red` · `lime`

One hue per app. Reusing a hue is fine once they are all taken, but give
neighbouring cards different ones so the grid stays readable. Any new
colour must clear 4.5:1 contrast against white, because the spectrum
bands carry white text on `--solid`.

### Readouts (`trace`)

Defined in [`src/components/Trace.jsx`](src/components/Trace.jsx):

| kind | what it draws | used for |
|---|---|---|
| `steps` | square wave | reaction-time drills |
| `ticks` | marks along a timeline | a dated register |
| `contour` | a sagittal outline | brain-region atlases |
| `diverging` | bars either side of a midline | values that run high or low |
| `histogram` | bars off a baseline | counts per period |
| `sixteenths` | a 16-step grid | rhythm |
| `tally` | five-bar gates | a running score |
| `channels` | four stacked live traces, one of them noisy | multi-channel recording |

Reuse one if it fits. If the new app measures something none of these
describe, write a new generator rather than forcing a bad match — the
trace is supposed to say something true about the app.

## 2. The title is set in grapheme colours

The letters of "Special Interests" are coloured by Kelsey's
grapheme-colour synesthesia, not by position. A is red, E is blue, and
the rest follow the associations most commonly reported by English
synesthetes.

The colour belongs to the **letter**. Every "e" in the title is the same
blue; both "s"es the same gold. If a letter's colour ever varies by
position, that's a bug — the consistency is the entire point.

The map lives in [`src/data/synesthesia.js`](src/data/synesthesia.js),
one line per letter. Change a hue there and nothing else needs touching.

## 3. Keep the structure predictable

The page is loud on purpose, but every card carries the same fields in
the same order, and nothing moves unless it's pointed at. Motion stays
behind `prefers-reduced-motion`. Colour is where the energy goes;
layout stays boring so the page is easy to scan.

## 4. Check the links still work

Apps get renamed and repos get restructured. Before shipping a change
here, confirm every `url` in `apps.js` still returns 200 — a dead link on
the front door is worse than a missing app.
