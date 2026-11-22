import { Bh as v, O as P, Zh as y, af as h, fi as C, te as I, zh as c } from "chunk-EURWTZVI.mjs";
import { Rc as N } from "chunk-ZKH547QE.mjs";
import { wg as g } from "chunk-H6YNRUOF.mjs";
import { Dj as u, mb as l, nb as f } from "chunk-6ORKVNPQ.mjs";
import { g as D } from "chunk-6B5LV63O.mjs";
import { b as p } from "chunk-ARJ7WQTJ.mjs";
function q(o, e, n, t, { shouldOpenPage: s = !0, renamedIds: i = new c() } = {}) {
  let r = C(o, e, n, "duplicate", {
    enterIsolation: !1,
    preferredName: t,
    insertionIndex: o.tree.root.children.findIndex((d) => d.id === e.id) + 1,
    renamedIds: i,
  });
  return (
    o.stores.persistedUserDefaults.newContentAsDraft &&
      r.set({ isDraft: !0, duplicatedFrom: g(r.duplicatedFrom, e.id) }),
    s && h(o, { type: "page", nodeId: r.id }, { deferPageSelection: !0 }),
    r
  );
}
function V(o, e, n) {
  let t = new c(),
    s = new Set(
      o.stores.scopeStore
        .getDesignPageNodes()
        .map((a) => a.resolveValue("name"))
        .filter(p)
    ),
    i = N(n ?? e.resolveValue("name") ?? "Design", s),
    r = e.clone({ name: i, children: new u() });
  t.set(e.id, r.id);
  let d = [];
  for (let a of e.children) {
    let m = y(a, new Map(), new Map(), t, !1);
    (d.push(m), t.set(a.id, m.id), r.addChild(m));
  }
  o.tree.insertNode(r, void 0, o.tree.root.children.findIndex((a) => a.id === e.id) + 1);
  for (let a of d) v(o.tree, o.componentLoader, a, t, !1);
  return (P(o.tree, e.id, r.id), D("design_page_create", { pageId: r.id, source: "duplicate" }), r);
}
async function U(o, e, n) {
  let t = e.isLoaded() ? e : await e.load();
  if (!(!t || !w(o, [e.id]))) return V(o, t, n);
}
function w(o, e) {
  if (!e.length || I(o, "canDesign")) return !1;
  let n = o.stores.treeStore.getDataTree();
  return e.length === 1 && l(n.get(e[0]))
    ? !o.stores.chromeStore.hasNonDefaultCanvasLocale
    : e.every((t) => f(n.get(t)));
}
export { q as a, V as b, U as c, w as d };
//# sourceMappingURL=chunk-4V7KYVQO.mjs.map
