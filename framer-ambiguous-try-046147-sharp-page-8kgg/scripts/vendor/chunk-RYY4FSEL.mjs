var I = "__framer_force_showing_editorbar_since",
  A = "__framer_editor_button_position",
  u = "2147483647";
var y = "--framer-fresco-";
function b(t, e) {
  return `${y}${t}-${e}`;
}
function h(t, e, n, o) {
  return `var(${b(t, e)}, ${n}${o || ""})`;
}
function i(t, e, n) {
  let o = {};
  for (let r in t) {
    let l = t[r];
    l !== void 0 && (o[r] = h(r, e, l, n));
  }
  return o;
}
var d =
    '"Inter Variable UI", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  k = {
    monospace: '"Input Mono", Menlo, monospace',
    sansSerif: `${d}, emoji, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    sansSerifWithoutEmoji: d,
  },
  E = {
    micro: "9px",
    caption: "10px",
    base: "12px",
    baseLarge: "13px",
    heading: "16px",
    display: "20px",
  },
  T = { base: 450, heading: 550 },
  C = { base: 1.4, compact: 1.2 };
var s = {
  family: i(k, "font-family"),
  size: i(E, "font-size"),
  weight: i(T, "font-weight"),
  lineHeight: i(C, "line-height"),
};
var R = "__framer-editorbar-container",
  c = "__framer-editorbar-label",
  x = "__framer-editorbar-button",
  w = "__framer-editorbar-button-tooltip-visible",
  a = "__framer-editorbar-spinner",
  _ = "__framer-editorbar-spinner-track",
  g = "__framer-editorbar-spinner-car",
  $ = `
#${R} {
    align-items: center;
    display: flex;
    gap: 8px;
    position: fixed;
    z-index: calc(${u});
    width: max-content;
    cursor: pointer;
}

#${c} {
    background-color: #111;
    border-radius: 8px;
    font-family: ${s.family.sansSerif};
    font-size: ${s.size.base};
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: ${s.weight.base};
    flex-shrink: 0;
    position: fixed;
    width: max-content;
    pointer-events: none;
    user-select: none;
}

#${x} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
    flex-shrink: 0;
}

.${a} {
    display: block;
    width: 16px;
    height: 16px;
    transform-origin: 50% 50%;
    will-change: transform;
    animation: ${a}-spin 600ms linear infinite;
}

.${a} svg {
    display: block;
    overflow: visible;
}

.${_}, .${g} {
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
}

.${_} {
    opacity: 0.25;
}

.${g} {
    stroke-linecap: round;
    stroke-dasharray: 30 70;
}

@keyframes ${a}-spin {
    to {
        transform: rotate(360deg);
    }
}

#${c}.${w} {
    opacity: 1;
}

#${c}, #${x} {
    backdrop-filter: blur(10px);
    background-color: rgba(34, 34, 34, 0.8);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
    color: #fff;
}
`,
  m = document.createElement("style");
m.innerHTML = $;
document.head.appendChild(m);
function S(t) {
  let e = window.__framer_editorBarDependencies;
  if (!e) throw new Error("Dependencies not found");
  if (e.__version < 1 || e.__version > 3) throw new Error("Unsupported version");
  let n = e[t];
  if (!n) throw new Error("Dependency not found");
  return n;
}
var {
  createElement: p,
  memo: M,
  useCallback: j,
  useEffect: H,
  useRef: K,
  useState: F,
  useLayoutEffect: P,
} = S("react");
function G(t, e, n) {
  let { children: o, ...r } = e ?? {};
  return (n !== void 0 && (r.key = n), p(t, r, o));
}
function Y(t, e, n) {
  let { children: o, ...r } = e ?? {};
  return (n !== void 0 && (r.key = n), p(t, r, ...o));
}
var f = class extends Error {};
function q(t, e) {
  if (t) return;
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "(assert message threw)";
    }
  typeof e == "string" && e.length > 2048 && (e = e.slice(0, 2048) + "\u2026");
  let n = new f(e ? "Assertion Error: " + e : "Assertion Error");
  if (n.stack)
    try {
      let o = n.stack.split(`
`);
      o[1]?.includes("assert")
        ? (o.splice(1, 1),
          (n.stack = o.join(`
`)))
        : o[0]?.includes("assert") &&
          (o.splice(0, 1),
          (n.stack = o.join(`
`)));
    } catch {}
  throw n;
}
function J(t, e) {
  throw e instanceof Error
    ? e
    : e !== void 0
      ? new Error(String(e))
      : new Error(t ? `Unexpected value: ${t}` : "Application entered invalid state");
}
export {
  I as a,
  A as b,
  u as c,
  R as d,
  c as e,
  x as f,
  w as g,
  a as h,
  _ as i,
  g as j,
  S as k,
  M as l,
  j as m,
  H as n,
  K as o,
  F as p,
  q,
  J as r,
  G as s,
  Y as t,
};
//# sourceMappingURL=chunk-RYY4FSEL.mjs.map
