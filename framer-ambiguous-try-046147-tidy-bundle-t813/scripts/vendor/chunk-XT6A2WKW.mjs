import { lv as m } from "chunk-LBKZPB25.mjs";
import { a as R } from "chunk-7WJ42D6X.mjs";
import { ka as s } from "chunk-T6DXIA74.mjs";
import { a as c } from "chunk-6TFWVVAP.mjs";
import { q as I } from "chunk-6IRUXYG7.mjs";
import { f as l } from "chunk-LA34HORX.mjs";
import { b as i } from "chunk-4JY5UMT2.mjs";
var y = class {
  constructor(e) {
    this.environment = e;
  }
  environment;
  dataByRenderId = new Map();
  itemIdsByRenderId = new Map();
  updatedDataByRenderId = new Map();
  updatedItemIdsByRenderId = new Map();
  set(e, t, a, r = "identity") {
    (i(this.environment === "sandbox", "Setting data is only allowed in the sandbox."),
      (t ??= c()));
    let n = this.dataByRenderId.get(e);
    if (r === "shallow" ? s(n, t) : n === t) return;
    if ((this.dataByRenderId.set(e, t), m(e) || I.isOn("canvasRepeatSelection"))) {
      let f = h(t, a);
      this.updatedDataByRenderId.set(e, f);
    }
    let o = t.map(R),
      u = this.itemIdsByRenderId.get(e);
    s(o, u) || (this.itemIdsByRenderId.set(e, o), this.updatedItemIdsByRenderId.set(e, o));
  }
  remove(e) {
    (i(this.environment === "sandbox", "Removing data is only allowed in the sandbox."),
      this.dataByRenderId.delete(e) &&
        (this.itemIdsByRenderId.delete(e),
        this.updatedItemIdsByRenderId.delete(e),
        this.updatedDataByRenderId.set(e, null)));
  }
  import(e) {
    i(this.environment === "editor", "Importing data is only allowed in the editor.");
    let { dataUpdates: t, itemIdsUpdates: a } = e,
      r = new Set();
    for (let { renderId: n, data: o } of t)
      (o === null
        ? (this.dataByRenderId.delete(n), this.itemIdsByRenderId.delete(n))
        : this.dataByRenderId.set(n, o),
        r.add(n));
    for (let { renderId: n, itemIds: o } of a) (this.itemIdsByRenderId.set(n, o), r.add(n));
    return r;
  }
  isEmpty(e) {
    let t = this.dataByRenderId.get(e);
    return !t || t.length === 0;
  }
  getData(e) {
    return this.dataByRenderId.get(e);
  }
  getItemIds(e) {
    return this.itemIdsByRenderId.get(e);
  }
  export() {
    if (
      (i(
        this.environment === "sandbox",
        "No need to collect and send updates from within the editor."
      ),
      this.updatedDataByRenderId.size === 0 && this.updatedItemIdsByRenderId.size === 0)
    )
      return;
    let e = [];
    for (let [a, r] of this.updatedDataByRenderId) e.push({ renderId: a, data: r });
    this.updatedDataByRenderId.clear();
    let t = [];
    for (let [a, r] of this.updatedItemIdsByRenderId) t.push({ renderId: a, itemIds: r });
    return (this.updatedItemIdsByRenderId.clear(), { dataUpdates: e, itemIdsUpdates: t });
  }
};
function h(d, e) {
  return d.map((t) => {
    let a = {};
    for (let r in t) {
      let n = e.get(r);
      if (n)
        switch (n.type) {
          case "vectorsetitem":
            a[r] = void 0;
            continue;
          case "richtext":
            a[r] = p(t[r]);
            continue;
          case "array":
            a[r] = D(t[r], n);
            continue;
          case "object":
            throw Error("Not currently handled in removeNonSerializableData");
          case "slot":
            throw Error("Should never be part of repeater data");
          default:
            a[r] = t[r];
        }
    }
    return a;
  });
}
function D(d, e) {
  if (!Array.isArray(d)) return d;
  let t = e.control;
  return t.type === "richtext"
    ? d.map(p)
    : t.type !== "object" || !b(t)
      ? d
      : d.map((a) => {
          if (!l(a)) return a;
          let r;
          for (let n in t.controls) {
            let o = t.controls[n];
            o?.type === "richtext"
              ? ((r ??= { ...a }), (r[n] = p(a[n])))
              : o?.type === "vectorsetitem" && ((r ??= { ...a }), (r[n] = void 0));
          }
          return r ?? a;
        });
}
function b(d) {
  for (let e in d.controls) {
    let t = d.controls[e]?.type;
    if (t === "richtext" || t === "vectorsetitem") return !0;
  }
  return !1;
}
function p(d) {
  return d ? "<p>Content</p>" : null;
}
export { y as a };
//# sourceMappingURL=chunk-XT6A2WKW.mjs.map
