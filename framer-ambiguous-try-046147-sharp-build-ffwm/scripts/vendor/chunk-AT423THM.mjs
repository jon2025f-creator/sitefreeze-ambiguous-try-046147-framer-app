import { I as d } from "chunk-UCA6DIRC.mjs";
import { B as i, Kh as v } from "chunk-BP2ZYPEN.mjs";
import { Yh as c, wp as T } from "chunk-3GNDJY2L.mjs";
import { b as p } from "chunk-4JY5UMT2.mjs";
function I(r) {
  let o = {};
  for (let e of d.getTokenNodes(r)) {
    o[i] || (o[i] = {});
    let t = o[i];
    (p(t, "Tokens entry must exist"), (t[e.id] = e));
  }
  return o;
}
function u(r) {
  let o = {};
  for (let e of d.getAllTokenNodes(r)) o[e.id] = e;
  return o;
}
function V(r, o, e) {
  let t = r.cloneWithIds(),
    s = Object.values(u(o));
  for (let n of t.walk()) n.assign(v(n, s, e));
  return t;
}
function x(r, o, e) {
  if (!o) return;
  let t = Object.values(u(r)),
    s = {};
  for (let n of t) {
    let a = n.colorForMode(e);
    if (!a) return;
    s[n.id] = a;
  }
  for (let [n, a] of o) {
    let l = new T();
    for (let [f, k] of a) {
      let m = c(k, s);
      m ? l.set(f, m) : l.set(f, k);
    }
    o.set(n, l);
  }
}
export { I as a, u as b, V as c, x as d };
//# sourceMappingURL=chunk-AT423THM.mjs.map
