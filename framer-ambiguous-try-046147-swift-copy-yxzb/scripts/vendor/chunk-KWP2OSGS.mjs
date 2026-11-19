import { b as Y } from "chunk-P6Q3LWLD.mjs";
import { b as Z } from "chunk-TS24LVSZ.mjs";
import { a as X } from "chunk-VD6KMVU6.mjs";
import { d as Q } from "chunk-SDGZMIZ7.mjs";
import { a as m } from "chunk-QFU6OGL3.mjs";
import { d as Ee } from "chunk-3WKMMIQB.mjs";
import { a as d } from "chunk-2FCXHKEL.mjs";
import { a as N } from "chunk-SWYZG2NI.mjs";
import { i as J } from "chunk-L5AQ4LH7.mjs";
import { e as a } from "chunk-WLHSDIGQ.mjs";
var ue = a(N());
var _ = "sf77bnf",
  j = "sxws8un",
  ee = "i1pk7u4d";
var oe = a(d());
function re({ children: n, warning: t = !1, className: l }) {
  return (0, oe.jsx)("span", { className: m(_, t && j, l), children: n });
}
var ae = a(d());
function ne({ className: n, ...t }) {
  return (0, ae.jsx)(re, { className: m(ee, n), ...t });
}
var ie = "i1ubxgci",
  se = "ieuh0tq",
  le = "if3vyou",
  ce = "io3pwrq";
var K = a(d()),
  Ue = ue.default.forwardRef(function (
    { className: t, children: l, hasError: h, large: b = !1, multiline: T = !1, warning: c, ...y },
    k
  ) {
    return (0, K.jsxs)("div", {
      ref: k,
      className: m(ie, b && le, h && se, T && ce, t),
      draggable: !1,
      ...y,
      children: [l, c && (0, K.jsx)(ne, { warning: !0, children: c })],
    });
  });
var $ = a(N());
var fe = "i1v4gay9";
var pe = "tarvkue";
var de = a(N());
function me(n, t) {
  return (0, de.useMemo)(() => {
    if (n) return n;
    if (t) return `nofill-${Math.random().toString(16).slice(2)}`;
  }, [n, t]);
}
function be(n) {
  return n !== "off" ? n : J() ? "off" : "nope";
}
var o = a(N());
var ge = a(Ee());
function xe(n) {
  return new ge.default("LTR").getDirection(n) === "RTL" ? "rtl" : "ltr";
}
function ve({
  ref: n,
  value: t,
  enabled: l = !0,
  autoFocus: h,
  constantChange: b,
  stopUpDownKeyPropagation: T = !0,
  stopUpDownKeyHandling: c = !0,
  changeOnBlur: y = !0,
  blurOnEnter: k = !1,
  newlinesOnEnter: D = !1,
  selectOnFocus: S = !0,
  direction: P,
  truncate: M = !1,
  onChange: w,
  onBlur: I,
  onFocus: H,
  onKeyDown: O,
  onScroll: W,
}) {
  let L = o.default.useRef(null),
    A = X(n, L),
    [u, g] = o.default.useState(t),
    C = o.default.useRef(!1),
    i = o.default.useRef(),
    x = o.default.useRef(),
    f = o.default.useCallback(() => {
      ((i.current = void 0), g(t));
    }, [t]),
    p = o.default.useCallback(
      (e, s, r) => {
        let E = i.current;
        (r === "blur" && E !== e) ||
          (r === "enter" && E !== e && x.current === e) ||
          (w(e, !0, f, s), (i.current = void 0), (x.current = e));
      },
      [w, f]
    ),
    v = Y(),
    [B, U] = o.default.useState(v);
  (v !== B && (U(v), g(t)),
    o.default.useLayoutEffect(() => {
      ((i.current = void 0), (x.current = void 0));
    }, [v]));
  let [V, z] = o.default.useState(t);
  t !== V && (z(t), g(t));
  let F = o.default.useRef(t);
  o.default.useLayoutEffect(() => {
    t !== F.current &&
      ((F.current = t),
      i.current !== t && (i.current = void 0),
      x.current !== t && (x.current = void 0));
  }, [t]);
  let R = (0, o.useMemo)(() => P ?? xe(u), [P, u]);
  o.default.useEffect(() => {
    if (!l || !h) return;
    let e = L.current;
    e && setTimeout(() => e.focus(), 0);
  }, [l, h]);
  let Te = o.default.useCallback(
      (e) => {
        let r = e.currentTarget.value;
        (g(r), (i.current = r === t && !b ? void 0 : r), b && w(r, !1, f, e));
      },
      [w, f, b, t]
    ),
    ye = o.default.useCallback(
      (e) => {
        let s = C.current;
        s ? f() : y && p(u, e, "blur");
        let r = document.getSelection(),
          E = e.currentTarget;
        (r && E && r.anchorNode && E.parentNode === r.anchorNode && r.empty(), I && I(e, s));
      },
      [y, I, f, p, u]
    ),
    ke = o.default.useCallback(
      (e) => {
        if (S) {
          let s = e.currentTarget;
          (setTimeout(function () {
            (document.activeElement === s && s.select(), H?.(e));
          }, 0),
            (C.current = !1));
        } else H?.(e);
      },
      [H, S]
    ),
    we = o.default.useCallback(
      (e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) {
          e.stopPropagation();
          return;
        }
        let r = e.currentTarget,
          G = (r.selectionEnd || 0) - (r.selectionStart || 0) === 0;
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            (T && e.stopPropagation(), c && e.preventDefault());
            break;
          case "ArrowLeft": {
            let q = R === "ltr" ? 0 : r.value.length;
            (r.selectionStart === q && G && e.preventDefault(), e.stopPropagation());
            break;
          }
          case "ArrowRight": {
            let q = R === "ltr" ? r.value.length : 0;
            (r.selectionEnd === q && G && e.preventDefault(), e.stopPropagation());
            break;
          }
          case "Enter": {
            if (r instanceof HTMLTextAreaElement) {
              if (D || e.shiftKey) break;
              e.preventDefault();
            }
            (p(r.value, e, "enter"), k && r.blur());
            break;
          }
          case "Escape":
            ((i.current = void 0),
              g(t),
              (C.current = !0),
              (r.value = t),
              r.blur(),
              e.preventDefault());
            break;
        }
        O?.(e);
      },
      [O, T, c, p, t, k, D, R]
    ),
    Re = o.default.useCallback(
      (e) => {
        (M && document.activeElement !== e.currentTarget && (e.currentTarget.scrollLeft = 0),
          W?.(e));
      },
      [W, M]
    );
  return {
    elementRef: A,
    internalValue: u,
    internalDirection: R,
    changeHandler: Te,
    blurHandler: ye,
    focusHandler: ke,
    keyDownHandler: we,
    scrollHandler: Re,
  };
}
var he = a(d()),
  ct = $.default.memo(
    $.default.forwardRef(function (t, l) {
      let {
          value: h,
          enabled: b = !0,
          readOnly: T,
          autoFocus: c,
          constantChange: y,
          changeOnBlur: k = !0,
          blurOnEnter: D = !1,
          onChange: S,
          onBlur: P,
          onFocus: M,
          onKeyDown: w,
          onContextMenu: I,
          onScroll: H,
          className: O,
          stopUpDownKeyPropagation: W = !0,
          truncate: L = !0,
          disabledIsReadOnly: A = !0,
          autoComplete: u = "off",
          selectOnFocus: g,
          name: C,
          ...i
        } = t,
        x = me(C, u === "off"),
        f = Z(T),
        p = b && !f,
        {
          elementRef: v,
          internalValue: B,
          changeHandler: U,
          blurHandler: V,
          focusHandler: z,
          keyDownHandler: F,
          scrollHandler: R,
        } = ve({
          ref: l,
          value: h,
          enabled: p,
          autoFocus: c,
          constantChange: y,
          changeOnBlur: k,
          blurOnEnter: D,
          stopUpDownKeyPropagation: W,
          selectOnFocus: g,
          truncate: L,
          onChange: S,
          onBlur: P,
          onFocus: M,
          onKeyDown: w,
          onScroll: H,
        });
      return (0, he.jsx)("input", {
        ref: v,
        type: "text",
        className: m(pe, fe, L && Q, O),
        value: B,
        onChange: U,
        readOnly: A ? !p : void 0,
        disabled: A && B.length > 0 ? void 0 : !p,
        onBlur: V,
        onFocus: z,
        onKeyDown: F,
        onScroll: R,
        onContextMenu: I,
        autoFocus: c,
        name: x,
        autoComplete: be(u),
        autoCorrect: "off",
        spellCheck: !1,
        "data-1p-ignore": !0,
        ...i,
      });
    })
  );
export {
  _ as a,
  ee as b,
  re as c,
  ne as d,
  Ue as e,
  pe as f,
  me as g,
  be as h,
  xe as i,
  ve as j,
  ct as k,
};
//# sourceMappingURL=chunk-KWP2OSGS.mjs.map
