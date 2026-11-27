import { g as c, j as f, p as m } from "chunk-ARJ7WQTJ.mjs";
import { a as L } from "chunk-SWYZG2NI.mjs";
import { c as g } from "chunk-4JY5UMT2.mjs";
import { a as l } from "chunk-5QSN7R54.mjs";
import { e as b } from "chunk-WLHSDIGQ.mjs";
var p = new Set();
function S(e, ...t) {
  p.has(e) || (p.add(e), console.warn(e, ...t));
}
var y = b(L(), 1),
  h = (e) => () => {
    S(e);
  },
  k = () => () => {},
  F = {
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
  A = {
    imagePlaceholderSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>',
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = a.useImageSource(e, t, n);
      return (0, y.useMemo)(() => {
        let s = new Image();
        return ((s.src = r), e.srcSet && (s.srcset = e.srcSet), s);
      }, [r, e.srcSet]);
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
    fontStore: F,
    isOnPageCanvas: !1,
  },
  w = !1,
  z = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
          ? k()
          : h(
              w
                ? `${String(t)} is not available in this version of Framer.`
                : `${String(t)} is only available inside of Framer. https://www.framer.com/`
            );
    },
  },
  a = new Proxy(A, z),
  K = {
    isSelectorLoaded(e) {
      return a.fontStore.isSelectorLoaded(e);
    },
    loadFonts(e) {
      return a.fontStore.loadFonts(e);
    },
    loadWebFontsFromSelectors(e) {
      return a.fontStore.loadWebFontsFromSelectors(e);
    },
    loadMissingFonts(e, t) {
      return a.fontStore.loadMissingFonts(e, t);
    },
  };
function U(e) {
  (Object.assign(A, e), (w = !0));
}
function H(e) {
  return Object.keys(e);
}
function v(e) {
  switch (e) {
    case "small":
      return 512;
    case "medium":
      return 1024;
    case "large":
      return 2048;
    case "full":
      return;
    case "lossless":
    case "auto":
    case void 0:
      return;
    default:
      g(e);
  }
}
var I = [512, 1024, 2048, 4096];
function x(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    s = 0;
  t > e && ((n = t), (r = e), (s = 1));
  let o = n / r,
    i = [];
  for (let u of I) {
    if (n <= u) return i;
    i.push({ maxSideSize: u, width: s === 0 ? u : Math.trunc(u / o) });
  }
  return i;
}
function d(e, t, n, r, s) {
  let o = new URL(`${e}/images/${t}`);
  return (
    Number.isFinite(n) && o.searchParams.set("scale-down-to", `${n}`),
    r && o.searchParams.set("lossless", "1"),
    s &&
      (o.searchParams.set("width", s.width.toString()),
      o.searchParams.set("height", s.height.toString())),
    o.toString()
  );
}
function _(e, t, n, r) {
  let s = v(r),
    o = s === void 0 ? void 0 : x(n?.width, n?.height)?.find(({ maxSideSize: i }) => i >= s);
  return d(e, t, o?.maxSideSize, r === "lossless", n);
}
function X(e) {
  return typeof e == "string";
}
function Y(e) {
  return Number.isFinite(e);
}
function R(e) {
  return e.key + e.extension;
}
function O(e, t, n, r) {
  return d(l().userContent, e, t, n, r);
}
function ee(e, t, n) {
  return O(
    R(e),
    t,
    n,
    e.properties?.image
      ? { width: e.properties.image.width, height: e.properties.image.height }
      : void 0
  );
}
function P(e) {
  return `${l().userContent}/assets/${e}`;
}
function te(e) {
  return P(R(e));
}
function ne(e) {
  let t = l(),
    n = new URL(e);
  if (n.origin !== t.userContent) return;
  let [, r, s, ...o] = n.pathname.split("/");
  if (!(r !== "images" && r !== "assets") && !(s === void 0 || s === "" || o.length > 0))
    return { filename: s, searchParams: n.searchParams };
}
function M(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e) if (!t.has(n)) return !1;
  return !0;
}
function C(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e) if (!t.has(n) || t.get(n) !== r) return !1;
  return !0;
}
function j(e, t) {
  if (e === t) return !0;
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] != t[r]) return !1;
  return !0;
}
function W(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = n.length;
  if (r !== Object.keys(t).length) return !1;
  for (let s = r; s-- !== 0;) {
    let o = n[s];
    if (m(o) || e[o] != t[o]) return !1;
  }
  return !0;
}
function oe(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = n.length;
  if (r !== Object.keys(t).length) return !1;
  for (let s = r; s-- !== 0;) {
    let o = n[s];
    if (m(o) || e[o] !== t[o]) return !1;
  }
  return !0;
}
function ie(e, t) {
  return e === t
    ? !0
    : f(e)
      ? f(t)
        ? j(e, t)
        : !1
      : c(e) && c(t)
        ? e instanceof Set
          ? t instanceof Set
            ? M(e, t)
            : !1
          : e instanceof Map
            ? t instanceof Map
              ? C(e, t)
              : !1
            : W(e, t)
        : !1;
}
export {
  S as a,
  a as b,
  K as c,
  U as d,
  H as e,
  v as f,
  x as g,
  d as h,
  _ as i,
  X as j,
  Y as k,
  R as l,
  O as m,
  ee as n,
  P as o,
  te as p,
  ne as q,
  M as r,
  C as s,
  j as t,
  W as u,
  oe as v,
  ie as w,
};
//# sourceMappingURL=chunk-XWVB37KR.mjs.map
