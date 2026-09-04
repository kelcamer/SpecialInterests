/* Grapheme-colour mapping for the title.
   ------------------------------------------------------------------
   A letter's colour belongs to the letter, not to its position — so
   every "e" in the title is the same blue, and both "s"es the same gold.
   That consistency is the whole point; without it it's just a rainbow.

   Kelsey's own associations are fixed points: A is red, E is blue.
   The rest follow the associations most commonly reported by English
   grapheme-colour synesthetes (A red, B blue, C yellow, D brown,
   P purple, R red, S yellow, T blue, I and O achromatic), nudged only
   where two adjacent letters in the title would otherwise collide.

   Letters usually reported as white or black are set in graphite, since
   white is invisible on this page and black would read as "uncoloured".

   To change one: edit the hue here. Nothing else needs to change. */
export const LETTER_HUE = {
  a: "red",     b: "blue",    c: "orange",  d: "brown",
  e: "blue",    f: "green",   g: "green",   h: "orange",
  i: "graphite",j: "orange",  k: "green",   l: "green",
  m: "red",     n: "brown",   o: "graphite",p: "violet",
  q: "violet",  r: "rose",    s: "amber",   t: "teal",
  u: "amber",   v: "violet",  w: "teal",    x: "graphite",
  y: "amber",   z: "graphite",
};

export function hueFor(ch) {
  return LETTER_HUE[ch.toLowerCase()] || null;
}
