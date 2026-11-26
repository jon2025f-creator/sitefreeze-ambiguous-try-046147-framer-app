import { g as u, j as l, p as c } from "chunk-ARJ7WQTJ.mjs";
import { a as w } from "chunk-SWYZG2NI.mjs";
import { a } from "chunk-5QSN7R54.mjs";
import { e as y } from "chunk-WLHSDIGQ.mjs";
var f = new Set();
function g(e, ...t) {
  f.has(e) || (f.add(e), console.warn(e, ...t));
}
var d = y(w(), 1),
  m = (e) => () => {
    g(e);
  },
  v = () => () => {},
  A = {
    isSelectorLoaded() {
      return !0;
    },
    async loadFonts() {
      return { newlyLoadedFontCount: 0 };
    },
    async loadWebFontsFromSelectors() {
      return [];
    },
    async loadMissingFonts() {},
  },
  p = {
    imagePlaceholderSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>',
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = i.useImageSource(e, t, n);
      return (0, d.useMemo)(() => {
        let o = new Image();
        return ((o.src = r), e.srcSet && (o.srcset = e.srcSet), o);
      }, [r, e.srcSet]);
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
    fontStore: A,
    isOnPageCanvas: !1,
  },
  S = !1,
  R = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
          ? v()
          : m(
              S
                ? `${String(t)} is not available in this version of Framer.`
                : `${String(t)} is only available inside of Framer. https://www.framer.com/`
            );
    },
  },
  i = new Proxy(p, R),
  C = {
    isSelectorLoaded(e) {
      return i.fontStore.isSelectorLoaded(e);
    },
    loadFonts(e) {
      return i.fontStore.loadFonts(e);
    },
    loadWebFontsFromSelectors(e) {
      return i.fontStore.loadWebFontsFromSelectors(e);
    },
    loadMissingFonts(e, t) {
      return i.fontStore.loadMissingFonts(e, t);
    },
  };
function z(e) {
  (Object.assign(p, e), (S = !0));
}
function W(e) {
  return Object.keys(e);
}
function U(e) {
  return typeof e == "string";
}
function x(e) {
  return Number.isFinite(e);
}
function h(e) {
  return e.key + e.extension;
}
function L(e, t, n, r) {
  let o = a(),
    s = new URL(`${o.userContent}/images/${e}`);
  return (
    x(t) && s.searchParams.set("scale-down-to", `${t}`),
    n && s.searchParams.set("lossless", "1"),
    r &&
      (s.searchParams.set("width", r.width.toString()),
      s.searchParams.set("height", r.height.toString())),
    s.toString()
  );
}
function T(e, t, n) {
  return L(
    h(e),
    t,
    n,
    e.properties?.image
      ? { width: e.properties.image.width, height: e.properties.image.height }
      : void 0
  );
}
function b(e) {
  return `${a().userContent}/assets/${e}`;
}
function q(e) {
  return b(h(e));
}
function V(e) {
  let t = a(),
    n = new URL(e);
  if (n.origin !== t.userContent) return;
  let [, r, o, ...s] = n.pathname.split("/");
  if (!(r !== "images" && r !== "assets") && !(o === void 0 || o === "" || s.length > 0))
    return { filename: o, searchParams: n.searchParams };
}
function k(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e) if (!t.has(n)) return !1;
  return !0;
}
function F(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e) if (!t.has(n) || t.get(n) !== r) return !1;
  return !0;
}
function O(e, t) {
  if (e === t) return !0;
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] != t[r]) return !1;
  return !0;
}
function P(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = n.length;
  if (r !== Object.keys(t).length) return !1;
  for (let o = r; o-- !== 0;) {
    let s = n[o];
    if (c(s) || e[s] != t[s]) return !1;
  }
  return !0;
}
function B(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = n.length;
  if (r !== Object.keys(t).length) return !1;
  for (let o = r; o-- !== 0;) {
    let s = n[o];
    if (c(s) || e[s] !== t[s]) return !1;
  }
  return !0;
}
function H(e, t) {
  return e === t
    ? !0
    : l(e)
      ? l(t)
        ? O(e, t)
        : !1
      : u(e) && u(t)
        ? e instanceof Set
          ? t instanceof Set
            ? k(e, t)
            : !1
          : e instanceof Map
            ? t instanceof Map
              ? F(e, t)
              : !1
            : P(e, t)
        : !1;
}
export {
  g as a,
  i as b,
  C as c,
  z as d,
  W as e,
  U as f,
  x as g,
  h,
  L as i,
  T as j,
  b as k,
  q as l,
  V as m,
  k as n,
  F as o,
  O as p,
  P as q,
  B as r,
  H as s,
};
//# sourceMappingURL=chunk-V6PD4VCB.mjs.map
