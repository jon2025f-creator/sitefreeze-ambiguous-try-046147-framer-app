import { Wa as w } from "chunk-IPN7NH3B.mjs";
import {
  Al as T,
  Nh as b,
  O as y,
  Wh as S,
  Ye as V,
  oe as h,
  ph as u,
  qh as I,
} from "chunk-SETILOUN.mjs";
import { M as P } from "chunk-ILPMV4DA.mjs";
import { Qc as p } from "chunk-GWFIRJ5F.mjs";
import { di as N, qg as C } from "chunk-BVB6JIWO.mjs";
import { Cj as g, mb as c, nb as f, wp as D } from "chunk-DHK7DVM4.mjs";
import { f as v } from "chunk-TEAYMW45.mjs";
import { b as l } from "chunk-ARJ7WQTJ.mjs";
function K(o, e, r, t, { shouldOpenPage: n = !0, renamedIds: d = new u() } = {}) {
  let i = S(o, e, r, "duplicate", {
    enterIsolation: !1,
    preferredName: t,
    insertionIndex: o.tree.root.children.findIndex((s) => s.id === e.id) + 1,
    renamedIds: d,
  });
  return (
    o.stores.persistedUserDefaults.newContentAsDraft &&
      i.set({ isDraft: !0, duplicatedFrom: C(i.duplicatedFrom, e.id) }),
    n && V(o, { type: "page", nodeId: i.id }, { deferPageSelection: !0 }),
    i
  );
}
function x(o, e, r) {
  let t = new u(),
    n = new Set(
      o.stores.scopeStore
        .getDesignPageNodes()
        .map((a) => a.resolveValue("name"))
        .filter(l)
    ),
    d = p(r ?? e.resolveValue("name") ?? "Design", n),
    i = e.clone({ name: d, children: new g() });
  t.set(e.id, i.id);
  let s = [];
  for (let a of e.children) {
    let m = b(a, new Map(), new Map(), t, !1);
    (s.push(m), t.set(a.id, m.id), i.addChild(m));
  }
  o.tree.insertNode(i, void 0, o.tree.root.children.findIndex((a) => a.id === e.id) + 1);
  for (let a of s) I(o.tree, o.componentLoader, a, t, !1);
  return (y(o.tree, e.id, i.id), v("design_page_create", { pageId: i.id, source: "duplicate" }), i);
}
async function Q(o, e, r) {
  let t = e.isLoaded() ? e : await e.load();
  if (!(!t || !A(o, [e.id]))) return x(o, t, r);
}
function A(o, e) {
  if (!e.length || h(o, "canDesign")) return !1;
  let r = o.stores.treeStore.getDataTree();
  return e.length === 1 && c(r.get(e[0]))
    ? !o.stores.chromeStore.hasNonDefaultCanvasLocale
    : e.every((t) => f(r.get(t)));
}
function L(o, e) {
  let r = N(o);
  return r.length ? p(r, e, { withDash: !0 }) : "";
}
function ie(o, e, r, t) {
  for (let n of o.variables) {
    if (n.type === "divider" || !D(n)) continue;
    let d = t?.get(n.id) ?? e.getControlProp(n.id);
    if ((!d || !l(d.value) || !d.value.length) && n.associatedStringVariable) {
      let s = t?.get(n.associatedStringVariable) ?? e.getControlProp(n.associatedStringVariable);
      if (s && l(s.value)) {
        let a = L(s.value, (m) => T(r.get(n.id), m, e.id));
        if (a.length)
          return (
            e.setControlProp(n.id, { type: "string", value: a }),
            { changedControlProp: n.id }
          );
      }
    }
  }
  return !1;
}
function pe({ variables: o, collectionItem: e }) {
  if (!e.hasData()) return !1;
  for (let r of o) {
    if (r.type === "divider") continue;
    let t = e.getControlProp(r.id);
    if (!(!t || !P(t.value)) && !E(e, t, r)) return !0;
  }
  return !1;
}
function E(o, e, r) {
  if (r.type !== "date" || e.type !== "date" || !l(e.value) || !o.createdAt) return !1;
  let t = new Date(o.createdAt);
  return Number.isNaN(t.getTime()) ? !1 : e.value === w(t, r.options?.displayTime);
}
export { K as a, x as b, Q as c, A as d, pe as e, L as f, ie as g };
//# sourceMappingURL=chunk-RLIE6G4A.mjs.map
