import { B as k, x as R, z as g } from "chunk-BBYUV4ZR.mjs";
import { rw as h } from "chunk-XLLY536B.mjs";
import { xf as T } from "chunk-DPHJW6UJ.mjs";
import { a as x } from "chunk-2FCXHKEL.mjs";
import { a as y } from "chunk-SWYZG2NI.mjs";
import { e as d } from "chunk-WLHSDIGQ.mjs";
function J(e, ...n) {
  if (!e) throw Error("Assertion Error" + (n.length > 0 ? ": " + n.join(" ") : ""));
}
function L(e) {
  throw new Error(`Unexpected value: ${e}`);
}
var P = d(y(), 1),
  S = d(x(), 1),
  w = "local-module:layoutTemplate/preview-placeholder:default";
function V(e) {
  return e === w;
}
function C() {
  return w;
}
var N = { flex: "1 0 0px", background: "transparent" },
  A = P.default.memo(function () {
    return (0, S.jsx)("div", { style: N });
  });
function v(e) {
  let n = [];
  for (let r in e) n.push({ key: r, value: e[r] });
  return n;
}
function K(e) {
  let n = {};
  for (let { key: r, value: i } of e) n[r] = i;
  return n;
}
var u = d(y(), 1);
var m = d(x(), 1);
function E(e, n, r) {
  for (let [i, t] of Object.entries(n)) {
    let o = e[i];
    if (typeof t == "number") {
      e[i] = r(t, o);
      continue;
    }
    I(o, t, r);
  }
}
function I(e, n, r) {
  if (typeof n != "number") {
    if (Array.isArray(n)) {
      if (!Array.isArray(e)) return;
      let [i] = n;
      for (let t = 0; t < e.length; t++) {
        let o = e[t];
        typeof i == "number" ? (e[t] = r(i, o)) : I(o, i, r);
      }
      return;
    }
    e === null || typeof e != "object" || Array.isArray(e) || E(e, n, r);
  }
}
function O(e) {
  let n = new Map();
  function r(t) {
    return t.map(i);
  }
  function i(t) {
    switch (t[0]) {
      case 1: {
        let [, ...o] = t,
          s = r(o);
        return (0, u.createElement)(u.Fragment, void 0, ...s);
      }
      case 2: {
        let [, o, ...s] = t,
          c = r(s);
        return (0, u.createElement)(R, o, ...c);
      }
      case 3: {
        let [, o, s, c] = t;
        E(s, c, (f, a) => {
          if (f === 1) return a && i(a);
          if (typeof a != "string") return a;
          let l = e[a];
          return l ? (h(l) && l.preload(), l) : a;
        });
        let p = e[o];
        return (
          J(p, "Module not found"),
          h(p) && p.preload(),
          (0, m.jsx)(k, {
            componentIdentifier: o,
            children: (f) => (0, m.jsx)(g, { component: p, props: { ...f, ...s } }),
          })
        );
      }
      case 4: {
        let [, o, s, ...c] = t,
          p = r(c);
        return o === "a" ? (0, u.createElement)(T.a, s, ...p) : (0, u.createElement)(o, s, ...p);
      }
      case 5: {
        let [, o] = t;
        return o;
      }
    }
  }
  return (t) => {
    let o = n.get(t);
    if (o) return o;
    let s = JSON.parse(t),
      c = i(s);
    return (n.set(t, c), c);
  };
}
export { J as a, L as b, E as c, O as d, V as e, C as f, A as g, v as h, K as i };
//# sourceMappingURL=chunk-QSCCRWPZ.mjs.map
