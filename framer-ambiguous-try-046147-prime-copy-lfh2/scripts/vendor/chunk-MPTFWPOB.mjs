import { ra as d } from "chunk-JT3NKTG7.mjs";
import { Ku as T, ri as i } from "chunk-JCKPR6HO.mjs";
import { _h as u, vp as k } from "chunk-CMWKQFSN.mjs";
import { a as g } from "chunk-SWYZG2NI.mjs";
import { b as m } from "chunk-4JY5UMT2.mjs";
import { e as C } from "chunk-WLHSDIGQ.mjs";
function P(o) {
  let e = {};
  for (let r of d.getTokenNodes(o)) {
    e[i] || (e[i] = {});
    let t = e[i];
    (m(t, "Tokens entry must exist"), (t[r.id] = r));
  }
  return e;
}
function v(o) {
  let e = {};
  for (let r of d.getAllTokenNodes(o)) e[r.id] = r;
  return e;
}
function w(o, e, r) {
  let t = o.cloneWithIds(),
    a = Object.values(v(e));
  for (let n of t.walk()) n.assign(T(n, a, r));
  return t;
}
function A(o, e, r) {
  if (!e) return;
  let t = Object.values(v(o)),
    a = {};
  for (let n of t) {
    let s = n.colorForMode(r);
    if (!s) return;
    a[n.id] = s;
  }
  for (let [n, s] of e) {
    let l = new k();
    for (let [c, f] of s) {
      let p = u(f, a);
      p ? l.set(c, p) : l.set(c, f);
    }
    e.set(n, l);
  }
}
var b = C(g(), 1);
function y() {
  return document.body.dataset.framerTheme === "dark";
}
function N(o) {
  let e = new MutationObserver(o);
  return (
    e.observe(document.body, { attributes: !0, attributeFilter: ["data-framer-theme"] }),
    () => e.disconnect()
  );
}
function D() {
  return (0, b.useSyncExternalStore)(N, y);
}
export { y as a, D as b, P as c, v as d, w as e, A as f };
//# sourceMappingURL=chunk-MPTFWPOB.mjs.map
