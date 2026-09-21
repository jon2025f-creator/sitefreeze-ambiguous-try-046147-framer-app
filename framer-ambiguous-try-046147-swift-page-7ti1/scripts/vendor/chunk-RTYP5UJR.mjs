import { a as o } from "chunk-YQEVRFGW.mjs";
import { c as r } from "chunk-EKYJNLIX.mjs";
import { b as i } from "chunk-HZOFQ3CX.mjs";
import { a as s } from "chunk-2FCXHKEL.mjs";
import { e } from "chunk-WLHSDIGQ.mjs";
var n = "cq2i6r2",
  p = "o199fue7",
  c = "o16gpm6";
var a = e(s(), 1);
function y({ avatar: m, displayName: l, organization: t }) {
  let x = r(l);
  return (0, a.jsxs)("div", {
    className: n,
    children: [
      (0, a.jsx)(o, { src: m || void 0, text: x }),
      t &&
        (0, a.jsx)(o, {
          size: "small",
          src: t.avatar || void 0,
          textCustomStyles: c,
          avatarCustomStyles: p,
          color: i.menuBackground,
          text: r(t.displayName),
        }),
    ],
  });
}
export { y as a };
//# sourceMappingURL=chunk-RTYP5UJR.mjs.map
