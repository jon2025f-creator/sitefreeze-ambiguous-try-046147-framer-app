import { n as m, v as p } from "chunk-NK4EYMXT.mjs";
import { Im as n, gb as o, kk as r, tk as s } from "chunk-FBDUQXEG.mjs";
import { b as a } from "chunk-Y3GZLMBF.mjs";
function z(e, l, f, d) {
  let { imageSize: t, originalFilename: c } = l,
    g = a(e.fillImage) ? n(e.fillImage)?.preferredSize : void 0,
    i = {
      fillType: "image",
      fillImage: p(l, d ?? g, f),
      fillImageOriginalName: c,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...F(e),
    };
  if ((r(e) && e.fillEnabled === !1 && (i.fillEnabled = !0), o(e))) {
    let { nonZeroNaturalWidth: u, nonZeroNaturalHeight: h } = m(t);
    ((i.intrinsicWidth = u), (i.intrinsicHeight = h));
  }
  e.set(i);
}
function F(e) {
  if (s(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
export { z as a };
//# sourceMappingURL=chunk-IELWE4YN.mjs.map
