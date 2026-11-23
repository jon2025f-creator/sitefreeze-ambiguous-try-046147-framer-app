import { Pa as c } from "chunk-7KH3INB7.mjs";
import { Al as d } from "chunk-JZUGM3I3.mjs";
import { K as p } from "chunk-3F2A4VNK.mjs";
import { $c as f } from "chunk-T3XD2WMS.mjs";
import { ti as m } from "chunk-GA7KAPYJ.mjs";
import { No as u } from "chunk-VHPQNF2H.mjs";
import { b as n } from "chunk-ARJ7WQTJ.mjs";
function C(i, e) {
  let o = m(i);
  return o.length ? f(o, e, { withDash: !0 }) : "";
}
function A(i, e, o, r) {
  for (let t of i.variables) {
    if (t.type === "divider" || !u(t)) continue;
    let l = r?.get(t.id) ?? e.getControlProp(t.id);
    if ((!l || !n(l.value) || !l.value.length) && t.associatedStringVariable) {
      let a = r?.get(t.associatedStringVariable) ?? e.getControlProp(t.associatedStringVariable);
      if (a && n(a.value)) {
        let s = C(a.value, (g) => d(o.get(t.id), g, e.id));
        if (s.length)
          return (
            e.setControlProp(t.id, { type: "string", value: s }),
            { changedControlProp: t.id }
          );
      }
    }
  }
  return !1;
}
function U({ variables: i, collectionItem: e }) {
  if (!e.hasData()) return !1;
  for (let o of i) {
    if (o.type === "divider") continue;
    let r = e.getControlProp(o.id);
    if (!(!r || !p(r.value)) && !y(e, r, o)) return !0;
  }
  return !1;
}
function y(i, e, o) {
  if (o.type !== "date" || e.type !== "date" || !n(e.value) || !i.createdAt) return !1;
  let r = new Date(i.createdAt);
  return Number.isNaN(r.getTime()) ? !1 : e.value === c(r, o.options?.displayTime);
}
export { U as a, C as b, A as c };
//# sourceMappingURL=chunk-Q5YXXO4A.mjs.map
