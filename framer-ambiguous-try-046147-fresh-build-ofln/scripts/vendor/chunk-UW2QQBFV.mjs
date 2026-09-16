import { b as X } from "chunk-P6Q3LWLD.mjs";
import { b as Y } from "chunk-TS24LVSZ.mjs";
import { a as Q } from "chunk-VD6KMVU6.mjs";
import { a as J } from "chunk-4J3H3UTQ.mjs";
import { a as A } from "chunk-QFU6OGL3.mjs";
import { d as ge } from "chunk-3WKMMIQB.mjs";
import { a as F } from "chunk-2FCXHKEL.mjs";
import { a as P } from "chunk-SWYZG2NI.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var $ = c(P());
var Z = "i1v4gay9",
  _ = "icv147p";
var j = "tarvkue";
var ee = c(P());
function re(a, r) {
  return (0, ee.useMemo)(() => {
    if (a) return a;
    if (r) return `nofill-${Math.random().toString(16).slice(2)}`;
  }, [a, r]);
}
var o = c(P());
var te = c(ge());
function oe(a) {
  return new te.default("LTR").getDirection(a) === "RTL" ? "rtl" : "ltr";
}
function ne({
  ref: a,
  value: r,
  enabled: v = !0,
  autoFocus: p,
  constantChange: d,
  stopUpDownKeyPropagation: g = !0,
  stopUpDownKeyHandling: m = !0,
  changeOnBlur: x = !0,
  blurOnEnter: h = !1,
  newlinesOnEnter: C = !1,
  selectOnFocus: D = !0,
  direction: S,
  truncate: L = !1,
  onChange: T,
  onBlur: R,
  onFocus: E,
  onKeyDown: M,
  onScroll: O,
}) {
  let H = o.default.useRef(null),
    K = Q(a, H),
    [u, i] = o.default.useState(r),
    I = o.default.useRef(!1),
    n = o.default.useRef(),
    b = o.default.useRef(),
    f = o.default.useCallback(() => {
      ((n.current = void 0), i(r));
    }, [r]),
    k = o.default.useCallback(
      (e, s, t) => {
        let w = n.current;
        (t === "blur" && w !== e) ||
          (t === "enter" && w !== e && b.current === e) ||
          (T(e, !0, f, s), (n.current = void 0), (b.current = e));
      },
      [T, f]
    ),
    l = X(),
    [N, B] = o.default.useState(l);
  (l !== N && (B(l), i(r)),
    o.default.useLayoutEffect(() => {
      ((n.current = void 0), (b.current = void 0));
    }, [l]));
  let [U, V] = o.default.useState(r);
  r !== U && (V(r), i(r));
  let W = o.default.useRef(r);
  o.default.useLayoutEffect(() => {
    r !== W.current &&
      ((W.current = r),
      n.current !== r && (n.current = void 0),
      b.current !== r && (b.current = void 0));
  }, [r]);
  let y = (0, o.useMemo)(() => S ?? oe(u), [S, u]);
  o.default.useEffect(() => {
    if (!v || !p) return;
    let e = H.current;
    e && setTimeout(() => e.focus(), 0);
  }, [v, p]);
  let q = o.default.useCallback(
      (e) => {
        let t = e.currentTarget.value;
        (i(t), (n.current = t === r && !d ? void 0 : t), d && T(t, !1, f, e));
      },
      [T, f, d, r]
    ),
    de = o.default.useCallback(
      (e) => {
        let s = I.current;
        s ? f() : x && k(u, e, "blur");
        let t = document.getSelection(),
          w = e.currentTarget;
        (t && w && t.anchorNode && w.parentNode === t.anchorNode && t.empty(), R && R(e, s));
      },
      [x, R, f, k, u]
    ),
    me = o.default.useCallback(
      (e) => {
        if (D) {
          let s = e.currentTarget;
          (setTimeout(function () {
            (document.activeElement === s && s.select(), E?.(e));
          }, 0),
            (I.current = !1));
        } else E?.(e);
      },
      [E, D]
    ),
    be = o.default.useCallback(
      (e) => {
        if (e.nativeEvent.isComposing || e.keyCode === 229) {
          e.stopPropagation();
          return;
        }
        let t = e.currentTarget,
          G = (t.selectionEnd || 0) - (t.selectionStart || 0) === 0;
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            (g && e.stopPropagation(), m && e.preventDefault());
            break;
          case "ArrowLeft": {
            let z = y === "ltr" ? 0 : t.value.length;
            (t.selectionStart === z && G && e.preventDefault(), e.stopPropagation());
            break;
          }
          case "ArrowRight": {
            let z = y === "ltr" ? t.value.length : 0;
            (t.selectionEnd === z && G && e.preventDefault(), e.stopPropagation());
            break;
          }
          case "Enter": {
            if (t instanceof HTMLTextAreaElement) {
              if (C || e.shiftKey) break;
              e.preventDefault();
            }
            (k(t.value, e, "enter"), h && t.blur());
            break;
          }
          case "Escape":
            ((n.current = void 0),
              i(r),
              (I.current = !0),
              (t.value = r),
              t.blur(),
              e.preventDefault());
            break;
        }
        M?.(e);
      },
      [M, g, m, k, r, h, C, y]
    ),
    ve = o.default.useCallback(
      (e) => {
        (L && document.activeElement !== e.currentTarget && (e.currentTarget.scrollLeft = 0),
          O?.(e));
      },
      [O, L]
    );
  return {
    elementRef: K,
    internalValue: u,
    internalDirection: y,
    changeHandler: q,
    blurHandler: de,
    focusHandler: me,
    keyDownHandler: be,
    scrollHandler: ve,
  };
}
var ae = c(F()),
  Ke = $.default.memo(
    $.default.forwardRef(function (r, v) {
      let {
          value: p,
          enabled: d = !0,
          readOnly: g,
          autoFocus: m,
          constantChange: x,
          changeOnBlur: h = !0,
          blurOnEnter: C = !1,
          onChange: D,
          onBlur: S,
          onFocus: L,
          onKeyDown: T,
          onContextMenu: R,
          onScroll: E,
          className: M,
          stopUpDownKeyPropagation: O = !0,
          truncate: H = !0,
          small: K,
          disabledIsReadOnly: u = !0,
          autoComplete: i = "off",
          selectOnFocus: I,
          name: n,
          ...b
        } = r,
        f = re(n, i === "off"),
        k = Y(g),
        l = d && !k,
        {
          elementRef: N,
          internalValue: B,
          changeHandler: U,
          blurHandler: V,
          focusHandler: W,
          keyDownHandler: y,
          scrollHandler: q,
        } = ne({
          ref: v,
          value: p,
          enabled: l,
          autoFocus: m,
          constantChange: x,
          changeOnBlur: h,
          blurOnEnter: C,
          stopUpDownKeyPropagation: O,
          selectOnFocus: I,
          truncate: H,
          onChange: D,
          onBlur: S,
          onFocus: L,
          onKeyDown: T,
          onScroll: E,
        });
      return (0, ae.jsx)("input", {
        ref: N,
        type: "text",
        className: A(j, Z, K && _, H && J, M),
        value: B,
        onChange: U,
        readOnly: u ? !l : void 0,
        disabled: u && B.length > 0 ? void 0 : !l,
        onBlur: V,
        onFocus: W,
        onKeyDown: y,
        onScroll: q,
        onContextMenu: R,
        autoFocus: m,
        name: f,
        autoComplete: i === "off" ? "nope" : i,
        autoCorrect: "off",
        spellCheck: !1,
        "data-1p-ignore": !0,
        ...b,
      });
    })
  );
var fe = c(P());
var ie = "i1ubxgci",
  le = "ieuh0tq",
  se = "if3vyou",
  ce = "io3pwrq",
  ue = "i17mp6by";
var pe = c(F()),
  $e = fe.default.forwardRef(function (
    {
      className: r,
      children: v,
      hasError: p,
      hasWarning: d,
      large: g = !1,
      multiline: m = !1,
      ...x
    },
    h
  ) {
    return (0, pe.jsx)("div", {
      ref: h,
      className: A(ie, g && ce, d && !p && se, p && le, m && ue, r),
      draggable: !1,
      ...x,
      children: v,
    });
  });
export { j as a, re as b, oe as c, ne as d, Ke as e, $e as f };
//# sourceMappingURL=chunk-UW2QQBFV.mjs.map
