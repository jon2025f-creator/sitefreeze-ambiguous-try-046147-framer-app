import { f as n } from "chunk-ARJ7WQTJ.mjs";
import { c as e } from "chunk-4JY5UMT2.mjs";
function l(t) {
  return t === 2 || t === 0;
}
function u(t) {
  if (t?.type !== "content") return !1;
  let o = t.stack[0];
  return o?.type === "existing" || o?.type === "privateDraft";
}
function i(t) {
  if (t?.type !== "content") return !1;
  let o = t.stack.at(-1);
  if (!o) return !1;
  switch (o.type) {
    case "existing":
    case "privateDraft":
    case "arrayItem":
      return !0;
    case "componentRichTextContent":
      return !1;
    default:
      return e(o);
  }
}
var p = ["Chat"],
  r = { 0: !0, 1: !0, 2: !0, 3: !0, 4: !0, 6: !0, 5: !0 };
function y(t) {
  return n(t) && r[t] === !0;
}
export { l as a, u as b, i as c, p as d, y as e };
//# sourceMappingURL=chunk-NOL56S7H.mjs.map
