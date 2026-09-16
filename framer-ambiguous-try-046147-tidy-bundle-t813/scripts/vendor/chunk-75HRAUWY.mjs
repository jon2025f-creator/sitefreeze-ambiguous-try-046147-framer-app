import { Fb as p } from "chunk-4KNOZXT3.mjs";
import { n as d, v as c } from "chunk-WSKTFMJP.mjs";
import { Sa as s, _a as m, oh as f } from "chunk-LBKZPB25.mjs";
import { bb as a } from "chunk-KZ3J5BLF.mjs";
import { b as n } from "chunk-LA34HORX.mjs";
function R(e, i, r, o) {
  let { imageSize: t, originalFilename: u } = i,
    g = n(e.fillImage) ? f(e.fillImage)?.preferredSize : void 0,
    l = {
      fillType: "image",
      fillImage: c(i, o ?? g, r),
      fillImageOriginalName: u,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...I(e),
    };
  if ((s(e) && e.fillEnabled === !1 && (l.fillEnabled = !0), a(e))) {
    let { nonZeroNaturalWidth: h, nonZeroNaturalHeight: F } = d(t);
    ((l.intrinsicWidth = h), (l.intrinsicHeight = F));
  }
  e.set(l);
}
function I(e) {
  if (m(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
function C(e, i, r) {
  if (!i && !r) return !1;
  for (let o of e) {
    let t = p[o];
    if (r) {
      if (r.includes(o)) return !0;
    } else if (i && t && i.includes(t)) return !0;
  }
  return !1;
}
export { R as a, C as b };
//# sourceMappingURL=chunk-75HRAUWY.mjs.map
