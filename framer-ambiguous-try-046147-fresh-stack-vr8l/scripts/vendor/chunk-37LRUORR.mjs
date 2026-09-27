import { a as t } from "chunk-NMYEXLW4.mjs";
import { c as o } from "chunk-EKYJNLIX.mjs";
import { a as s } from "chunk-2FCXHKEL.mjs";
import { e } from "chunk-WLHSDIGQ.mjs";
var i = "cq2i6r2",
  n = "o199fue7",
  p = "o16gpm6";
var a = e(s(), 1);
function z({ avatar: c, displayName: m, organization: r }) {
  let f = o(m);
  return (0, a.jsxs)("div", {
    className: i,
    children: [
      (0, a.jsx)(t, { src: c || void 0, text: f }),
      r &&
        (0, a.jsx)(t, {
          size: "small",
          src: r.avatar || void 0,
          textCustomStyles: p,
          avatarCustomStyles: n,
          text: o(r.displayName),
        }),
    ],
  });
}
export { z as a };
//# sourceMappingURL=chunk-37LRUORR.mjs.map
