/* Grapheme-colour mapping for the title — the Fisher-Price magnet set.
   ------------------------------------------------------------------
   The colours are the ones on the Fisher-Price plastic alphabet magnets
   sold 1971-1990: the six rainbow colours minus indigo, cycling from A.

       red · orange · yellow · green · blue · purple

   So A is red, B orange, C yellow, D green, E blue, F purple, and G
   starts the cycle again. Witthoft, Winawer & Eagleman (2015, PLoS ONE
   10(3):e0118996, PMID 25734383) found >6% of American synesthetes'
   letter colours match this exact set — 15% of those born 1975-1980 —
   and note that in the toy G and Y are red, which is what fixes the
   cycle's phase: both sit at position 1 of a six-colour repeat.

   A letter's colour belongs to the letter, not to its position, so
   every "e" in the title is the same blue and both "s"es the same red.
   That consistency is the whole point; without it it's just a rainbow.
   The toy gives it for free — the cycle is defined on the alphabet.

   Kelsey's own associations still land where the toy puts them: A red,
   E blue.

   The hues in styles.css are the toy's colours darkened for light mode
   only as far as legibility on cream needs (the title clears 3:1 at its
   size); dark mode carries the bright plastic versions.

   To change one: edit the hue here. Nothing else needs to change. */
export const LETTER_HUE = {
  a: "red",    b: "orange", c: "yellow", d: "green",  e: "blue",   f: "purple",
  g: "red",    h: "orange", i: "yellow", j: "green",  k: "blue",   l: "purple",
  m: "red",    n: "orange", o: "yellow", p: "green",  q: "blue",   r: "purple",
  s: "red",    t: "orange", u: "yellow", v: "green",  w: "blue",   x: "purple",
  y: "red",    z: "orange",
};

export function hueFor(ch) {
  return LETTER_HUE[ch.toLowerCase()] || null;
}
