import { Na as d } from "chunk-WKXIZXJ4.mjs";
import { P as c, o as y } from "chunk-DGIWPVTI.mjs";
import { ke as l } from "chunk-RE42INF2.mjs";
import { Wf as p, kg as m, xf as a } from "chunk-3GNDJY2L.mjs";
import { a as u } from "chunk-SWYZG2NI.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
var f = k(u(), 1);
function P(t) {
  return y(t) && d(t) && a(t);
}
function S(t) {
  let e = {};
  if (!t) return e;
  let i = t.children.filter(P).sort((r, s) => (r.breakpointWidth ?? 0) - (s.breakpointWidth ?? 0));
  for (let r of i) {
    let s = r.originalid,
      o = e[s] ?? [];
    (o.push(r), (e[s] = o));
  }
  return e;
}
function x(t) {
  let e = c.get(t);
  return (0, f.useMemo)(() => S(e), [e]);
}
function R(t, e) {
  return !p(e) || !m(e) ? "" : B(t, e.width);
}
function B(t, e) {
  let i = [],
    r = Object.values(t);
  for (let s of r) {
    let o = s.find((n) => (n.breakpointWidth ?? 0) > e);
    if (o) {
      let n = l(2, o.id);
      i.push(n);
    }
  }
  return i.join(" ");
}
export { S as a, x as b, R as c, B as d };
//# sourceMappingURL=chunk-4KNVSJPS.mjs.map
