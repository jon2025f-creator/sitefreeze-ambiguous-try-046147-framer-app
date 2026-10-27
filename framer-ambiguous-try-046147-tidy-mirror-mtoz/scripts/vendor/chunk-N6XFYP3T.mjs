import { gf as D } from "chunk-5ZHHUVR3.mjs";
import { Ca as F, Ma as $, Na as H, ya as O } from "chunk-6LFNE4ZE.mjs";
import { Qo as P } from "chunk-ZMQ5KVTE.mjs";
import {
  Dh as E,
  Ng as s,
  Xb as c,
  Zb as A,
  Zg as g,
  b as h,
  ej as M,
  gg as I,
  jc as R,
  se as U,
  vk as B,
} from "chunk-DWJUKCZJ.mjs";
import { d as N, g as C } from "chunk-NYCWGTYH.mjs";
import { of as w } from "chunk-VED5QBJM.mjs";
import { a as V } from "chunk-2FCXHKEL.mjs";
import { a as T, b as m, e as y, f as G, o as x } from "chunk-Y3GZLMBF.mjs";
import { b as d, c as k } from "chunk-4JY5UMT2.mjs";
import { c as X, e as f } from "chunk-WLHSDIGQ.mjs";
var W = X((ie, L) => {
  "use strict";
  L.exports = typeof globalThis.ReactDOMServer > "u" ? void 0 : globalThis.ReactDOMServer;
});
function Q(r) {
  return r === "loading" || r === "error";
}
function oe(r, t) {
  for (let n of t) {
    let i = r.getNode(n);
    if (!i) continue;
    let e = r.getGroundNodeFor(i);
    if (I(e) && Q(e.gesture)) return !0;
  }
  return !1;
}
var q = f(W(), 1),
  a = f(V(), 1),
  Y = 1e3,
  _ = 50,
  b = class {
    constructor(t, n, i) {
      this.svg = t;
      this.lastAccess = n;
      this.hash = i;
    }
    svg;
    lastAccess;
    hash;
  },
  j = class r {
    map = new Map();
    shouldUpdateGeneration = !1;
    generation = 0;
    oldestGeneration = 0;
    static _instance;
    static shared() {
      return (r._instance || (r._instance = new r()), r._instance);
    }
    getSVGStringForNode(t, n) {
      if (c(n)) {
        let i = n.getContentHash(),
          e = this.map.get(i);
        if (e) return ((e.lastAccess = this.generation), e.svg);
        this.shouldUpdateGeneration && ((this.generation += 1), (this.shouldUpdateGeneration = !1));
        let o = z(t, n, "s" + i);
        return (this.map.set(i, new b(o, this.generation, i)), o);
      }
      return z(t, n, n.id);
    }
    update() {
      ((this.shouldUpdateGeneration = !0),
        !(this.map.size < Y) && (this.generation - this.oldestGeneration < _ || this.evict()));
    }
    evict() {
      let t = Array.from(this.map.values()).sort((e, o) => e.lastAccess - o.lastAccess),
        n = Math.floor(t.length / 2),
        i = t[n];
      (d(i, "SVG entry must be defined"), (this.oldestGeneration = i.lastAccess));
      for (let e = 0; e < n; e++) {
        let o = t[e];
        if ((d(o, "SVG entry must be defined"), this.generation - o.lastAccess < _)) break;
        this.map.delete(o.hash);
      }
    }
  },
  v = class {
    constructor(t) {
      this.contentHash = t;
    }
    contentHash;
    counter = 0;
    nextId() {
      return ((this.counter += 1), `${this.contentHash}_${this.counter}`);
    }
  };
function z(r, t, n) {
  let i = new v("s" + n),
    e = null;
  if (c(t) && t.fillEnabled && t.exportIncludesBackground && !E(t)) {
    let { children: p, ...K } = t.raw();
    e = S(new D(K), r, i, !1);
  }
  let o = !c(t),
    l = (o ? [t] : t.children).map((p) => (g(p) ? S(p, r, i, !o) : null)),
    J = (0, a.jsx)(w, {
      isStatic: !0,
      children: (0, a.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: `0 0 ${h(t.width, 3)} ${h(t.height, 3)}`,
        overflow: o ? "visible" : void 0,
        children: [e, l],
      }),
    });
  return N({ target: C.export }, () => q.renderToStaticMarkup(J));
}
function S(r, t, n, i) {
  let e = n.nextId();
  if (A(r)) {
    let u = r.getProps(t);
    return (
      (u.id = e),
      (0, a.jsx)(
        H,
        { ...u, includeTransform: i, children: r.children.map((l) => S(l, t, n, !0)) },
        e
      )
    );
  }
  let o = r.getProps(t);
  return (
    (o.id = e),
    (o.strokeClipId = `clip_${e}`),
    (0, a.jsx)($, { ...o, includeTransform: i }, e)
  );
}
function Z(r) {
  return c(r) ? !1 : !!(ee(r) || re(r) || (B(r) && r.children.some((t) => g(t) && Z(t))));
}
function ee(r) {
  return !P(r) || !r.strokeEnabled || !r.strokeWidth ? !1 : r.strokeAlignment === "center";
}
function re(r) {
  return M(r) ? (U(r.boxShadows) ? !0 : !!r.boxShadows?.some((t) => !t.inset)) : !1;
}
function Ne(r, t) {
  let n = t.get(r);
  return R(n) ? n : null;
}
function* Ue(r, t) {
  for (let n in r) {
    let i = r[n];
    if (!i || !F(i)) continue;
    let e = t[n];
    if (!x(e)) continue;
    let o = O(n);
    switch (i.type) {
      case "number":
        if (!y(e) && !s(e)) break;
        yield { name: o, uniform: { type: "number", value: e } };
        break;
      case "boolean":
        if (!T(e) && !s(e)) break;
        yield { name: o, uniform: { type: "boolean", value: e } };
        break;
      case "color":
        if (!m(e) && !s(e)) break;
        yield { name: o, uniform: { type: "color", value: e } };
        break;
      case "responsiveimage":
        if (!m(e) && !G(e) && !s(e)) break;
        yield { name: o, uniform: { type: "responsiveimage", value: e } };
        break;
      case "file":
        if (!m(e) && !s(e)) break;
        yield { name: o, uniform: { type: "file", value: e } };
        break;
      case "enum":
        if (!y(e) && !s(e)) break;
        yield { name: o, uniform: { type: "enum", value: e } };
        break;
      case "array":
        if ((!Array.isArray(e) && !s(e)) || i.control?.type !== "color") break;
        yield { name: o, uniform: { type: "array", value: e } };
        break;
      default:
        k(i);
    }
  }
}
export { Ne as a, Q as b, oe as c, Ue as d, W as e, j as f, Z as g };
//# sourceMappingURL=chunk-N6XFYP3T.mjs.map
