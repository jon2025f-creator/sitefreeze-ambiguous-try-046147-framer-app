import { f as m, w as p } from "chunk-TUTQPC7L.mjs";
import { Ui as n, _g as r, ab as o, hh as s } from "chunk-3GNDJY2L.mjs";
import { b as a } from "chunk-ARJ7WQTJ.mjs";
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
//# sourceMappingURL=chunk-POLAB7UH.mjs.map
