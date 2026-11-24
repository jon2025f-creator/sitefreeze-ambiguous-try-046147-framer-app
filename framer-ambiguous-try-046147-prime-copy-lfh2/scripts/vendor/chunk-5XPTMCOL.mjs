import { b as e } from "chunk-3BNSQ6R3.mjs";
import { a as w } from "chunk-RM2JK3Y4.mjs";
import { a as k } from "chunk-QFU6OGL3.mjs";
import { a as E } from "chunk-2FCXHKEL.mjs";
import { a as B } from "chunk-SWYZG2NI.mjs";
import { b as y } from "chunk-4JY5UMT2.mjs";
import { e as i } from "chunk-WLHSDIGQ.mjs";
var t = i(B());
var T = "ce0jzrc",
  R = "cs1svrr",
  J = "t18o5vb6",
  Q = "sm2t0fn",
  U = "l1q8v77k",
  X = "c11ansgh",
  Y = "g1kxypt5";
var D = i(B()),
  m = (r, n) => {
    (0, D.useEffect)(() => {
      let a = setTimeout(() => {
        r && n.current?.focus();
      }, 50);
      return () => clearTimeout(a);
    }, [r, n]);
  };
var o = i(E());
function ro({
  variant: r = "primary",
  dismissVariant: n = "default",
  appearance: a = "default",
  title: S,
  description: s,
  children: u,
  cancelLabel: c,
  confirmLabel: l,
  keyboardConfirmMode: f = "Enter",
  cancelOnEnter: p = !1,
  onShow: h,
  onCancel: v,
  onConfirm: x,
  onDismiss: j,
  confirmButtonEnabled: b = !0,
  confirmButtonLoading: d = !1,
  cancelButtonEnabled: z = !0,
  autoFocusConfirmButton: F = !0,
  hasBackdrop: A,
  zIndex: P,
  buttonDirection: H = "row",
  noSelect: V = !1,
  offsetForDashboardSidebar: O = !1,
  focusTrapEnabled: I,
  mode: q,
}) {
  t.default.useEffect(() => {
    h && h();
  }, []);
  let g = (0, t.useRef)(null);
  m(p, g);
  let M = (0, t.useRef)(null);
  (m(f === "Enter" && F, M),
    y(
      !(f === "Enter" && p),
      "Can't set keyboardConfirmMode=Enter and cancelOnEnter at the same time"
    ));
  let C = b && !d,
    K = !!s && !u;
  return (0, o.jsxs)(e.Root, {
    visible: !0,
    mode: q,
    onDismiss: j,
    onConfirm: C ? x : void 0,
    keyboardConfirmMode: C ? f : !1,
    className: k(T, a === "large" && R),
    zIndex: P,
    hasBackdrop: A ?? a === "large",
    noSelect: V,
    offsetForDashboardSidebar: O,
    focusTrapEnabled: I,
    children: [
      (0, o.jsx)(e.Header, { separator: K, children: S }),
      (0, o.jsxs)(e.Content, { children: [u, !!s && (0, o.jsx)(e.Text, { children: s })] }),
      (0, o.jsxs)(e.Footer, {
        direction: H,
        children: [
          c &&
            v &&
            (0, o.jsx)(e.CancelButton, {
              ref: g,
              variant: n,
              title: c,
              onClick: v,
              enabled: z,
              children: c,
            }),
          l &&
            x &&
            (0, o.jsx)(e.ActionButton, {
              ref: M,
              type: "submit",
              variant: r,
              title: l,
              enabled: b && !d,
              children: d ? (0, o.jsx)(w, {}) : l,
            }),
        ],
      }),
    ],
  });
}
export { T as a, J as b, Q as c, U as d, X as e, Y as f, ro as g };
//# sourceMappingURL=chunk-5XPTMCOL.mjs.map
