import { g as u, j as l, p as c } from "chunk-ARJ7WQTJ.mjs";
import { a as w } from "chunk-SWYZG2NI.mjs";
import { a } from "chunk-5QSN7R54.mjs";
import { e as y } from "chunk-WLHSDIGQ.mjs";
function M(e) {
  return typeof e == "string";
}
function v(e) {
  return Number.isFinite(e);
}
function f(e) {
  return e.key + e.extension;
}
function A(e, t, n, r) {
  let o = a(),
    s = new URL(`${o.userContent}/images/${e}`);
  return (
    v(t) && s.searchParams.set("scale-down-to", `${t}`),
    n && s.searchParams.set("lossless", "1"),
    r &&
      (s.searchParams.set("width", r.width.toString()),
      s.searchParams.set("height", r.height.toString())),
    s.toString()
  );
}
function C(e, t, n) {
  return A(
    f(e),
    t,
    n,
    e.properties?.image
      ? { width: e.properties.image.width, height: e.properties.image.height }
      : void 0
  );
}
function R(e) {
  return `${a().userContent}/assets/${e}`;
}
function z(e) {
  return R(f(e));
}
function j(e) {
  let t = a(),
    n = new URL(e);
  if (n.origin !== t.userContent) return;
  let [, r, o, ...s] = n.pathname.split("/");
  if (!(r !== "images" && r !== "assets") && !(o === void 0 || o === "" || s.length > 0))
    return { filename: o, searchParams: n.searchParams };
}
var g = new Set();
function m(e, ...t) {
  g.has(e) || (g.add(e), console.warn(e, ...t));
}
var p = y(w(), 1),
  d = (e) => () => {
    m(e);
  },
  x = () => () => {},
  L = {
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
  S = {
    imagePlaceholderSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>',
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = i.useImageSource(e, t, n);
      return (0, p.useMemo)(() => {
        let o = new Image();
        return ((o.src = r), e.srcSet && (o.srcset = e.srcSet), o);
      }, [r, e.srcSet]);
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
    fontStore: L,
    isOnPageCanvas: !1,
  },
  h = !1,
  b = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
          ? x()
          : d(
              h
                ? `${String(t)} is not available in this version of Framer.`
                : `${String(t)} is only available inside of Framer. https://www.framer.com/`
            );
    },
  },
  i = new Proxy(S, b),
  U = {
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
function T(e) {
  (Object.assign(S, e), (h = !0));
}
function V(e) {
  return Object.keys(e);
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
  m as a,
  i as b,
  U as c,
  T as d,
  V as e,
  M as f,
  v as g,
  f as h,
  A as i,
  C as j,
  R as k,
  z as l,
  j as m,
  k as n,
  F as o,
  O as p,
  P as q,
  B as r,
  H as s,
};
//# sourceMappingURL=chunk-B5RAPL46.mjs.map
