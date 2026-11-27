import { a as Y } from "chunk-FJLPC3KG.mjs";
import { gf as $ } from "chunk-WKXIZXJ4.mjs";
import { _a as H, ab as j, rb as W, sb as _ } from "chunk-DRVF2SUD.mjs";
import { wc as O } from "chunk-BP2ZYPEN.mjs";
import { Qi as D, wl as L } from "chunk-RE42INF2.mjs";
import {
  Ab as R,
  Fg as g,
  Ob as U,
  Of as B,
  b as h,
  jh as P,
  mj as F,
  se as E,
  tg as s,
  yb as m,
} from "chunk-3GNDJY2L.mjs";
import { d as w, f as G, o as x } from "chunk-GV47JEYI.mjs";
import { d as C, g as k } from "chunk-WCKYYOJP.mjs";
import { lf as V } from "chunk-DPHJW6UJ.mjs";
import { a as T } from "chunk-2FCXHKEL.mjs";
import { a as I, b as u, f as y, g as A, q as M } from "chunk-ARJ7WQTJ.mjs";
import { b as d, c as N } from "chunk-4JY5UMT2.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
function Z(r) {
  return r === "loading" || r === "error";
}
function ie(r, t) {
  for (let n of t) {
    let o = r.getNode(n);
    if (!o) continue;
    let e = r.getGroundNodeFor(o);
    if (B(e) && Z(e.gesture)) return !0;
  }
  return !1;
}
var K = c(Y(), 1),
  a = c(T(), 1),
  ee = 1e3,
  z = 50,
  b = class {
    constructor(t, n, o) {
      this.svg = t;
      this.lastAccess = n;
      this.hash = o;
    }
    svg;
    lastAccess;
    hash;
  },
  q = class r {
    map = new Map();
    shouldUpdateGeneration = !1;
    generation = 0;
    oldestGeneration = 0;
    static _instance;
    static shared() {
      return (r._instance || (r._instance = new r()), r._instance);
    }
    getSVGStringForNode(t, n) {
      if (m(n)) {
        let o = n.getContentHash(),
          e = this.map.get(o);
        if (e) return ((e.lastAccess = this.generation), e.svg);
        this.shouldUpdateGeneration && ((this.generation += 1), (this.shouldUpdateGeneration = !1));
        let i = J(t, n, "s" + o);
        return (this.map.set(o, new b(i, this.generation, o)), i);
      }
      return J(t, n, n.id);
    }
    update() {
      ((this.shouldUpdateGeneration = !0),
        !(this.map.size < ee) && (this.generation - this.oldestGeneration < z || this.evict()));
    }
    evict() {
      let t = Array.from(this.map.values()).sort((e, i) => e.lastAccess - i.lastAccess),
        n = Math.floor(t.length / 2),
        o = t[n];
      (d(o, "SVG entry must be defined"), (this.oldestGeneration = o.lastAccess));
      for (let e = 0; e < n; e++) {
        let i = t[e];
        if ((d(i, "SVG entry must be defined"), this.generation - i.lastAccess < z)) break;
        this.map.delete(i.hash);
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
function J(r, t, n) {
  let o = new v("s" + n),
    e = null;
  if (m(t) && t.fillEnabled && t.exportIncludesBackground && !P(t)) {
    let { children: f, ...Q } = t.raw();
    e = S(new $(Q), r, o, !1);
  }
  let i = !m(t),
    l = (i ? [t] : t.children).map((f) => (g(f) ? S(f, r, o, !i) : null)),
    X = (0, a.jsx)(V, {
      isStatic: !0,
      children: (0, a.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: `0 0 ${h(t.width, 3)} ${h(t.height, 3)}`,
        overflow: i ? "visible" : void 0,
        children: [e, l],
      }),
    });
  return C({ target: k.export }, () => K.renderToStaticMarkup(X));
}
function S(r, t, n, o) {
  let e = n.nextId();
  if (R(r)) {
    let p = r.getProps(t);
    return (
      (p.id = e),
      (0, a.jsx)(
        _,
        { ...p, includeTransform: o, children: r.children.map((l) => S(l, t, n, !0)) },
        e
      )
    );
  }
  let i = r.getProps(t);
  return (
    (i.id = e),
    (i.strokeClipId = `clip_${e}`),
    (0, a.jsx)(W, { ...i, includeTransform: o }, e)
  );
}
function re(r) {
  return m(r) ? !1 : !!(te(r) || oe(r) || (F(r) && r.children.some((t) => g(t) && re(t))));
}
function te(r) {
  return !O(r) || !r.strokeEnabled || !r.strokeWidth ? !1 : r.strokeAlignment === "center";
}
function oe(r) {
  return D(r) ? (E(r.boxShadows) ? !0 : !!r.boxShadows?.some((t) => !t.inset)) : !1;
}
function ke(r, t) {
  let n = t.get(r);
  return U(n) ? n : null;
}
function Ge(r, t) {
  if (G(r)) return x(r).type;
  if (w(r)) {
    let o = L.getModuleNodes(t).find((e) => e.codeComponentIdentifier === r);
    return o ? o.type : void 0;
  }
}
function* Pe(r, t) {
  for (let n in r) {
    let o = r[n];
    if (!o || !j(o)) continue;
    let e = t[n];
    if (!M(e)) continue;
    let i = H(n);
    switch (o.type) {
      case "number":
        if (!y(e) && !s(e)) break;
        yield { name: i, uniform: { type: "number", value: e } };
        break;
      case "boolean":
        if (!I(e) && !s(e)) break;
        yield { name: i, uniform: { type: "boolean", value: e } };
        break;
      case "color":
        if (!u(e) && !s(e)) break;
        yield { name: i, uniform: { type: "color", value: e } };
        break;
      case "responsiveimage":
        if (!u(e) && !A(e) && !s(e)) break;
        yield { name: i, uniform: { type: "responsiveimage", value: e } };
        break;
      case "file":
        if (!u(e) && !s(e)) break;
        yield { name: i, uniform: { type: "file", value: e } };
        break;
      case "enum":
        if (!y(e) && !s(e)) break;
        yield { name: i, uniform: { type: "enum", value: e } };
        break;
      case "array":
        if ((!Array.isArray(e) && !s(e)) || o.control?.type !== "color") break;
        yield { name: i, uniform: { type: "array", value: e } };
        break;
      default:
        N(o);
    }
  }
}
export { ke as a, Z as b, ie as c, Pe as d, Ge as e, q as f, re as g };
//# sourceMappingURL=chunk-TDXZ5LG3.mjs.map
