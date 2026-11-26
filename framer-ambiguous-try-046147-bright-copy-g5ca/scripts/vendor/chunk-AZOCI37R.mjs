import { Pa as c } from "chunk-NYQXS5HF.mjs";
import { Al as d } from "chunk-5U4275NO.mjs";
import { K as p } from "chunk-HVC2YQ4V.mjs";
import { $c as f } from "chunk-CCMABSBP.mjs";
import { ui as m } from "chunk-XLLY536B.mjs";
import { Qo as u } from "chunk-YK6CVI2E.mjs";
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
//# sourceMappingURL=chunk-AZOCI37R.mjs.map
