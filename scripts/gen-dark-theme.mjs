#!/usr/bin/env node
/**
 * Writes app/dark-theme.generated.css: the dark-mode counterpart of every colour utility
 * (bg-, text-, border-, ring-, from-/via-/to-) that the site's source uses.
 *
 * The site was drawn with fixed light colours (bg-white, text-[#0F172A], ...). Instead of
 * adding `dark:` classes to every component, this scans app/, components/ and lib/ and maps each
 * colour to a dark equivalent by its OKLCH lightness. Run it again after adding new colours:
 *
 *   node scripts/gen-dark-theme.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_DIRS = ["app", "components", "lib"];
const OUT = path.join(ROOT, "app", "dark-theme.generated.css");

// ---------------------------------------------------------------------------------------------
// colours
const theme = fs.readFileSync(path.join(ROOT, "node_modules", "tailwindcss", "theme.css"), "utf8");
const named = new Map(); // "slate-600" -> {L, C, H}
for (const m of theme.matchAll(/--color-([a-z]+-\d{2,3}):\s*oklch\(([\d.]+)%\s+([\d.]+)\s+([\d.]+)\)/g)) {
  named.set(m[1], { L: Number(m[2]) / 100, C: Number(m[3]), H: Number(m[4]) });
}
named.set("white", { L: 1, C: 0, H: 0 });
named.set("black", { L: 0, C: 0, H: 0 });

function hexToOklch(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  const rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = rgb.map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  const [r, g, b] = lin;
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { L, C: Math.hypot(A, B), H: ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360 };
}

const fmt = (L, C, H, a) =>
  `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)}${a < 1 ? ` / ${a}` : ""})`;

// ---------------------------------------------------------------------------------------------
// mapping rules (return null to keep the colour as it is)
const rules = {
  bg: (c, a) => (c.L >= 0.9 && a >= 0.5 ? [0.13 + (c.L - 0.9) * 1.2, c.C * 0.5] : null),
  text: (c) => (c.L <= 0.6 ? [Math.max(c.L, 0.97 - c.L * 0.5), c.C * 0.9] : null),
  border: (c, a, isMono) => (c.L >= 0.8 && a >= 0.5 && !isMono ? [0.34 - (c.L - 0.8) * 0.4, c.C * 0.6] : null),
  ring: (c, a, isMono) => (c.L >= 0.8 && a >= 0.5 && !isMono ? [0.36 - (c.L - 0.8) * 0.4, c.C * 0.7] : null),
  gradient: (c, a) => (c.L >= 0.85 && a >= 0.5 ? [0.13 + (c.L - 0.85) * 1.1, c.C * 0.5] : null),
};

const PROPERTY = {
  bg: "background-color",
  text: "color",
  border: "border-color",
  ring: "--tw-ring-color",
  from: "--tw-gradient-from",
  via: "--tw-gradient-via",
  to: "--tw-gradient-to",
};

// ---------------------------------------------------------------------------------------------
// scan the source
const COLOR = String.raw`\[#[0-9A-Fa-f]{3,8}\]|white|black|(?:slate|gray|zinc|sky|blue|emerald|green|teal|amber|orange|red|rose|indigo)-\d{2,3}`;
const UTILITY = new RegExp(
  String.raw`(?<![\w-])((?:[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)?(?:\[[^\]]*\])?:)*)(bg|text|border|ring|from|via|to)-(${COLOR})(?:\/(\d{1,3}))?(?![\w-])`,
  "g"
);

function* files(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* files(full);
    else if (/\.(tsx?|jsx?|css)$/.test(entry.name) && !entry.name.includes(".generated.")) yield full;
  }
}

// The Sinchan Mitra page is themed with its own CSS variables (--sm-*), not these overrides.
const SKIP = ["components/sinchan-mitra", "app/sinchan-mitra"].map((p) => path.join(ROOT, p));

const found = new Map(); // full class -> {variants, util, color, alpha}
for (const dir of SOURCE_DIRS) {
  for (const file of files(path.join(ROOT, dir))) {
    if (SKIP.some((skip) => file.startsWith(skip))) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const m of text.matchAll(UTILITY)) {
      const [cls, variants, util, color, alpha] = m;
      found.set(cls, { variants, util, color, alpha: alpha ? Number(alpha) / 100 : 1 });
    }
  }
}

// ---------------------------------------------------------------------------------------------
const esc = (s) => s.replace(/[^a-zA-Z0-9_-]/g, (ch) => `\\${ch}`);

function selectorFor(cls, variants) {
  const v = variants.replace(/:$/, "");
  const cl = `.${esc(cls)}`;
  if (!v) return `.dark ${cl}`;
  if (v === "hover") return `.dark ${cl}:hover`;
  if (v === "focus") return `.dark ${cl}:focus`;
  if (v === "focus-visible") return `.dark ${cl}:focus-visible`;
  if (v === "focus-within") return `.dark ${cl}:focus-within`;
  if (v === "active") return `.dark ${cl}:active`;
  if (v === "aria-expanded") return `.dark ${cl}[aria-expanded="true"]`;
  if (v === "open") return `.dark ${cl}[open]`;
  if (v === "placeholder") return `.dark ${cl}::placeholder`;
  if (v === "group-hover") return `.dark .group:hover ${cl}`;
  const gh = v.match(/^group-hover\/([a-z0-9-]+)$/);
  if (gh) return `.dark .group\\/${gh[1]}:hover ${cl}`;
  return null;
}

const rulesOut = [];
const skipped = [];
for (const [cls, { variants, util, color, alpha }] of [...found].sort(([a], [b]) => a.localeCompare(b))) {
  const base = color.startsWith("[")
    ? hexToOklch(color.slice(1, -1))
    : named.get(color);
  if (!base) {
    skipped.push(`${cls} (unknown colour)`);
    continue;
  }
  const isMono = color === "white" || color === "black";
  const kind = util === "bg" || util === "text" || util === "border" || util === "ring" ? util : "gradient";
  const mapped = rules[kind](base, alpha, isMono);
  if (!mapped) continue;
  const selector = selectorFor(cls, variants);
  if (!selector) {
    skipped.push(`${cls} (variant not handled)`);
    continue;
  }
  let [L, C] = mapped;
  let H = base.H;
  // near-neutral lights become a faintly indigo dark so surfaces match the brand, not flat grey
  if (util !== "text" && base.C < 0.03) {
    H = 280;
    C = Math.max(C, 0.02);
  }
  rulesOut.push(`${selector}{${PROPERTY[util]}:${fmt(L, C, H, alpha)}}`);
}

const header = `/* GENERATED by scripts/gen-dark-theme.mjs. Do not edit by hand: run \`node scripts/gen-dark-theme.mjs\`. */\n`;
fs.writeFileSync(OUT, `${header}${rulesOut.join("\n")}\n`);
console.log(`${rulesOut.length} dark rules from ${found.size} colour classes -> ${path.relative(ROOT, OUT)}`);
if (skipped.length) console.log("skipped:\n  " + skipped.join("\n  "));
