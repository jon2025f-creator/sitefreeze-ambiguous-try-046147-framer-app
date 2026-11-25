import { a as dt, e as ut } from "chunk-HZJHWUJT.mjs";
import { a as Te } from "chunk-SCCCCPCG.mjs";
import { Mo as tt, Yo as ot, Zo as nt, e as ye, ee as et } from "chunk-YK6CVI2E.mjs";
import { a as xt, b as Ot } from "chunk-Y55C467E.mjs";
import { C as Et } from "chunk-YEBZ4PUI.mjs";
import { d as It, e as Tt, h as Rt } from "chunk-IQLXDBM5.mjs";
import { a as gt } from "chunk-ETLWQA6D.mjs";
import { a as ct } from "chunk-JHU5KKUH.mjs";
import { a as Ct } from "chunk-YV5BFUPQ.mjs";
import { a as Ce } from "chunk-WPWSHZF5.mjs";
import { a as at } from "chunk-G3KF7MVA.mjs";
import { a as ht, b as bt } from "chunk-P6Q3LWLD.mjs";
import { a as Pt, b as le } from "chunk-W4K45MJ6.mjs";
import { a as yt, b as wt } from "chunk-TS24LVSZ.mjs";
import { a as pt } from "chunk-VD6KMVU6.mjs";
import { c as vt, d as Re } from "chunk-V3XWMOW5.mjs";
import { a as mt } from "chunk-55TARNRL.mjs";
import { a as lt } from "chunk-R23XQVNE.mjs";
import { e as se } from "chunk-Z2L5FPD7.mjs";
import { b as st } from "chunk-IMG6DEFK.mjs";
import { a as it, b as V } from "chunk-X27LL6OM.mjs";
import { a as kt } from "chunk-AHBUMA74.mjs";
import { b as ft } from "chunk-VIJV6H3L.mjs";
import { a as T } from "chunk-QFU6OGL3.mjs";
import { h as we, ya as Ie } from "chunk-DPHJW6UJ.mjs";
import { c as G, g as ie } from "chunk-PWPT6KBA.mjs";
import { a as ae } from "chunk-Q6UY42VS.mjs";
import { a as rt } from "chunk-RNHTTH2C.mjs";
import { a as Ze } from "chunk-FZ6XN7HW.mjs";
import { b as Qe } from "chunk-5WL5Y35Q.mjs";
import { a as E } from "chunk-2FCXHKEL.mjs";
import { b as Y, f as S, g as _e, p as Je, r as de } from "chunk-ARJ7WQTJ.mjs";
import { a as O } from "chunk-SWYZG2NI.mjs";
import { o as Ye } from "chunk-HTBRLWIL.mjs";
import { q as Xe } from "chunk-L5AQ4LH7.mjs";
import { c as Ge } from "chunk-4JY5UMT2.mjs";
import { e as g } from "chunk-WLHSDIGQ.mjs";
var te = g(O());
var Ee = g(E()),
  Mt = (t) =>
    (0, Ee.jsx)("svg", {
      role: "presentation",
      width: 10,
      height: 10,
      viewBox: "0 0 10 10",
      fill: "none",
      ...t,
      children: (0, Ee.jsx)(xt, {}),
    });
var St = "s1enscsq",
  Wt = "n3d3rfb",
  Dt = "n1nrp7h4",
  ke = "t2qearp",
  Oe = "o1abtuq3",
  Me = "ozo04t6",
  Nt = "n117cay8",
  Lt = "n1bfwbcs",
  Bt = "t1lmiiaw",
  Vt = "n1ukogre",
  Ft = "fkp7u3w",
  Se = "n171mkxi",
  We = "nrmwyvr";
var At = [
  "button:not(:disabled):not([tabindex='-1'])",
  "[href]:not([tabindex='-1'])",
  "input:not(:disabled):not([tabindex='-1'])",
  "select:not(:disabled):not([tabindex='-1'])",
  "textarea:not(:disabled):not([tabindex='-1'])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");
function De(t) {
  return t.matches(At);
}
function Ht(t) {
  return t ? Array.from(t.querySelectorAll(At)) : [];
}
function An(t, { preventScroll: e = !1, onFocus: o } = {}) {
  return !t || !De(t) ? !1 : le(t, { preventScroll: e, onFocus: o });
}
var I = g(E()),
  ue = te.default.createContext(null);
ue.displayName = "NavigationStackItemContext";
var Ao = (t) => t,
  fe = ({
    stack: t,
    currentIndex: e,
    onBack: o,
    onClose: n,
    renderNavigationBarWrapper: r = Ao,
    navigationBarHidden: i = !1,
  }) => {
    Pt();
    let a = t[e],
      s = e > 0,
      f = a?.displayDivider !== !0,
      c = a?.toolbarAction,
      m = a?.autoFocusInside ?? !0,
      d = te.default.useRef(null),
      p = t[e + 1]?.triggerRef,
      x = te.default.useCallback(
        (h) => {
          if (!(h instanceof HTMLElement) || h.contains(document.activeElement) || !m) return;
          let l = h.getAttribute("data-transition-index");
          if (Number(l) !== e) return;
          let u = p?.current;
          if (u instanceof HTMLElement && De(u) && h.contains(u)) {
            Ie.render(() => {
              le(u);
            });
            return;
          }
          let w = Ho(h);
          w &&
            Ie.render(() => {
              le(w, { preventScroll: !0 });
            });
        },
        [m, e, p]
      );
    return (
      te.default.useEffect(() => {
        let h = d.current;
        h && x(h);
      }, [e, a?.id, x]),
      (0, I.jsxs)(I.Fragment, {
        children: [
          !i &&
            r(
              (0, I.jsx)($o, {
                disableDivider: f,
                toolbarAction: c,
                onBack: s ? o : void 0,
                onClose: n,
                children: (0, I.jsx)(jo, { stack: t, currentIndex: e }),
              })
            ),
          (0, I.jsx)("div", {
            className: St,
            children: t.map((h, l) => {
              let P = l === e;
              return (0, I.jsx)(
                ue.Provider,
                {
                  value: h.id,
                  children: (0, I.jsx)(Ko, {
                    ref: P ? d : void 0,
                    index: l,
                    currentIndex: e,
                    inert: P ? void 0 : "",
                    "aria-hidden": P ? void 0 : !0,
                    children: h.element,
                  }),
                },
                h.id + h.timestamp
              );
            }),
          }),
        ],
      })
    );
  };
function Ho(t) {
  let e = Ht(t),
    o = e.filter((a) => !a.matches("button")),
    n = o.length > 0 ? o : e,
    r,
    i = -1;
  for (let a of n) {
    let s = a.tabIndex;
    s > i && ((r = a), (i = s));
  }
  return r;
}
var Ko = te.default.forwardRef(function (
  { index: e, currentIndex: o, inert: n, "aria-hidden": r, children: i },
  a
) {
  return (0, I.jsx)("div", {
    ref: a,
    "data-transition-index": e,
    inert: n,
    "aria-hidden": r,
    className: T(Wt, e === o && Dt, e < o && Oe, e < o && ke, e > o && Me),
    children: i,
  });
});
function $o({ disableDivider: t, toolbarAction: e, onBack: o, onClose: n, children: r }) {
  return (0, I.jsx)(st, {
    children: (0, I.jsxs)(mt, {
      className: T(Nt, !t && Lt),
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 0,
      children: [
        (0, I.jsx)(se, {
          variant: "clean",
          title: "Back",
          onClick: o,
          className: T(Ce, Se, !o && We),
          tabIndex: o ? 0 : -1,
          children: (0, I.jsx)(Mt, {}),
        }),
        r,
        e ??
          (0, I.jsx)(se, {
            variant: "clean",
            title: "Close",
            onClick: n,
            className: T(Ce, Se, !n && We),
            children: (0, I.jsx)(at, {}),
          }),
      ],
    }),
  });
}
function Kt({ index: t, currentIndex: e, stackItem: o }) {
  return (0, I.jsx)("div", {
    className: T(Bt, !o.centerTitle && t === 0 && Ft, t !== e && ke, t < e && Oe, t > e && Me),
    children: (0, I.jsx)("span", { className: T(t === e && Vt), children: o.title }),
  });
}
function _n({ title: t }) {
  return (0, I.jsx)(Kt, {
    index: 0,
    currentIndex: 0,
    stackItem: { id: "1", title: t, timestamp: 0, element: (0, I.jsx)("div", { children: t }) },
  });
}
function jo({ currentIndex: t, stack: e }) {
  return (0, I.jsx)(I.Fragment, {
    children: e.map((o, n) => (0, I.jsx)(Kt, { index: n, currentIndex: t, stackItem: o }, o.id)),
  });
}
var q = g(O(), 1);
var D = g(O());
var $t = "m1hscir8",
  jt = "m1qod7cs",
  zt = "m9s9u3y";
var me = g(E()),
  pe = D.default.forwardRef(function (e, o) {
    let {
        onDrag: n,
        onDragStart: r,
        onDragEnd: i,
        children: a,
        className: s,
        cursor: f,
        enabled: c = !0,
        ...m
      } = e,
      d = D.default.useRef(null),
      p = pt(d, o),
      x = { onDrag: n, onDragEnd: i, onDragStart: r },
      h = D.default.useRef(x);
    h.current = x;
    let l = D.default.useRef(!1),
      P = D.default.useRef(null),
      [u, w] = D.default.useState(null),
      v = D.default.useRef(),
      y = D.default.useContext(Ot),
      [, W] = D.default.useState(0),
      N = D.default.useCallback(
        (C) => {
          if (!ct.isOnlyLeftMouseClick(C) || !c) return;
          l.current = !1;
          let b = { x: C.clientX, y: C.clientY },
            k = qt(C.nativeEvent, d, b);
          ((P.current = k),
            !(!b || !k) &&
              (y.mouseTrackerWillStart && y.mouseTrackerWillStart(), r && r(k), n(k), w(b)));
        },
        [y, r, n, c]
      );
    D.default.useLayoutEffect(() => {
      if (!u) return;
      if (!c) {
        w(null);
        return;
      }
      let C = !1,
        b = () => {
          ((C = !0), w(null));
        },
        k = (R) => {
          R.key === "Escape" && b();
        },
        U = (R) => {
          if ((R.key !== "Shift" && R.key !== "Alt") || !l.current) return;
          let $ = P.current;
          if (!$) return;
          let _ = { ...$, shiftKey: R.shiftKey, altKey: R.altKey };
          ((P.current = _), h.current.onDrag(_));
        },
        z = (R) => {
          let $ = qt(R, d, u);
          if ((R.preventDefault(), !$)) {
            w(null);
            return;
          }
          if (!l.current) {
            let _ = Math.abs($.offset.x) > 1 || Math.abs($.offset.y) > 1;
            ((l.current = _), W((Vo) => Vo + 1));
          }
          ((P.current = $), h.current.onDrag($));
        },
        X = v.current,
        Z = (R) => {
          R.pointerType === "mouse" || R.pointerId !== X || z(R);
        },
        K = (R) => {
          R.pointerType === "mouse" || R.pointerId !== X || b();
        };
      return (
        window.addEventListener("mousemove", z),
        window.addEventListener("mouseup", b, !0),
        window.addEventListener("pointermove", Z),
        window.addEventListener("pointerup", K, !0),
        window.addEventListener("pointercancel", K),
        window.addEventListener("contextmenu", b),
        window.addEventListener("keydown", k),
        window.addEventListener("keyup", k),
        window.addEventListener("keydown", U),
        window.addEventListener("keyup", U),
        () => {
          (window.removeEventListener("mousemove", z),
            window.removeEventListener("mouseup", b, !0),
            window.removeEventListener("pointermove", Z),
            window.removeEventListener("pointerup", K, !0),
            window.removeEventListener("pointercancel", K),
            window.removeEventListener("contextmenu", b),
            window.removeEventListener("keydown", k),
            window.removeEventListener("keyup", k),
            window.removeEventListener("keydown", U),
            window.removeEventListener("keyup", U));
          let R = P.current;
          (C
            ? (h.current.onDragEnd?.(R), y.mouseTrackerDidEnd?.())
            : queueMicrotask(() => {
                (h.current.onDragEnd?.(R), y.mouseTrackerDidEnd?.());
              }),
            (P.current = null),
            (l.current = !1));
        }
      );
    }, [u, y, c]);
    let H = D.default.useCallback(
      (C) => {
        C.pointerType === "mouse" || u || (C.preventDefault(), (v.current = C.pointerId), N(C));
      },
      [N, u]
    );
    return (0, me.jsxs)("div", {
      ref: p,
      draggable: !1,
      className: T(s, jt, c && zt),
      ...m,
      onMouseDown: N,
      onPointerDown: H,
      children: [
        a,
        u && l.current && (0, me.jsx)("div", { style: f ? { cursor: f } : void 0, className: $t }),
      ],
    });
  });
function qt(t, e, o) {
  let n = e.current;
  if (!n) return null;
  let { clientX: r, clientY: i } = t,
    a = { x: r, y: i },
    s = { x: r - o.x, y: i - o.y },
    f = n.getBoundingClientRect(),
    c = r - f.left,
    m = i - f.top,
    d = n.clientWidth || 1,
    p = n.clientHeight || 1;
  ((c = Math.max(0, Math.min(c, d))), (m = Math.max(0, Math.min(m, p))));
  let x = { x: c / d, y: m / p };
  return { client: a, offset: s, progress: x, shiftKey: t.shiftKey, altKey: t.altKey };
}
var ve = g(O(), 1);
function qo(t) {
  try {
    return Y(t) ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function Ne(t, e) {
  let o = localStorage.getItem(t),
    n = qo(o);
  return e(n) ? n : null;
}
function lr(t, e) {
  let [o] = (0, ve.useState)(() => Ne(t, e)),
    n = (0, ve.useCallback)(
      (r) => {
        let i = JSON.stringify(r);
        localStorage.setItem(t, i);
      },
      [t]
    );
  return [o, n];
}
var J = g(O(), 1);
var Ut = "wuk326o",
  Xt = "n283lgw",
  Yt = "pue1ity";
var F = g(E(), 1),
  Gt = 0.1,
  Le = 9999999999999;
function Xo(t, e) {
  let r = e.width - t.width,
    i = e.height - t.height;
  return { minX: 0, minY: 0, maxX: r, maxY: i };
}
function Zt(t) {
  let e = t.trim(),
    o = parseInt(e);
  return S(o)
    ? e.endsWith("%")
      ? { value: o, unit: "%" }
      : e.endsWith("px")
        ? { value: o, unit: "px" }
        : null
    : null;
}
function Yo(t) {
  switch (t) {
    case "app":
      return "0px";
    case "toolbar":
      return "var(--framerInternalUI-chromeToolbarHeight)";
    case "canvas":
      return "var(--framerInternalUI-chromeMarginTop)";
    default:
      Ge(t);
  }
}
var ge = class extends J.default.Component {
    containerRef = J.default.createRef();
    contentWrapperRef = J.default.createRef();
    static defaultProps = { visible: !0, constraintBy: "canvas" };
    setContainerRefs = (e) => {
      this.containerRef.current = e;
      let { containerRef: o } = this.props;
      o && (o.current = e);
    };
    setContentWrapperRefs = (e) => {
      this.contentWrapperRef.current = e;
      let { contentWrapperRef: o } = this.props;
      o && (o.current = e);
    };
    componentDidMount() {
      let { restorationKey: e } = this.props;
      if (!e) return;
      let o = Ne(e, _t);
      o && this.setFloatingWindowProperties(o);
    }
    render() {
      let {
          initialTopOffset: e,
          initialLeftOffset: o,
          rightInsetOverride: n,
          requiredContentWidth: r,
          visible: i,
          className: a,
          zIndex: s,
          constraintBy: f = "canvas",
          verticalConstraintBy: c = f,
        } = this.props,
        m = Le,
        d = 0,
        p = 1,
        x = 0,
        h = 1;
      if (Y(e)) {
        let b = Zt(e);
        b &&
          (b.unit === "%"
            ? ((d = we(0, 100, b.value)), (p = 100 - b.value))
            : b.unit === "px"
              ? ((m = b.value), (d = 1), (p = 0))
              : (b.unit, void 0));
      }
      if (Y(o)) {
        let b = Zt(o);
        b?.unit === "%" && ((x = we(0, 100, b.value)), (h = 100 - b.value));
      }
      let l = lt.css.panelPadding,
        P = Yo(c),
        u = c === "app" ? "0px" : "var(--framerInternalUI-chromeMarginBottom)",
        w = `calc(${m}px - ${P} - ${l})`,
        v = f === "app" ? "0px" : "var(--framerInternalUI-chromeMarginLeft)",
        W = n ?? (f === "app" ? "0px" : "var(--framerInternalUI-chromeMarginRight)"),
        N = `calc(${l} * 2)`,
        H = `calc(100vw - ${W} - ${N})`,
        C = r ? `min(${v}, max(0px, calc(${H} - ${r})))` : v;
      return (0, F.jsxs)("div", {
        ref: this.setContainerRefs,
        className: T(Xt, a),
        style: {
          position: "absolute",
          top: `calc(${P} + ${l})`,
          left: `calc(${C} + ${l})`,
          right: `calc(${W} + ${l})`,
          bottom: `calc(${u} + ${l})`,
          display: "flex",
          visibility: i ? "visible" : "hidden",
          flexDirection: "row",
          zIndex: s,
        },
        children: [
          (0, F.jsx)("div", { style: { width: 0, flexGrow: `var(--floating-window-left, ${x})` } }),
          (0, F.jsxs)("div", {
            style: { width: "auto", display: "flex", flexDirection: "column" },
            children: [
              (0, F.jsx)("div", {
                style: {
                  height: 0,
                  flexGrow: `var(--floating-window-top, ${d})`,
                  maxHeight: `var(--floating-window-fixed-top, ${w})`,
                },
              }),
              (0, F.jsx)("div", {
                ref: this.setContentWrapperRefs,
                onPointerDownCapture: this.props.onPointerDownCapture,
                draggable: !1,
                className: T(Yt, Te),
                style: {
                  position: "relative",
                  height: "auto",
                  width: "auto",
                  maxHeight: "100%",
                  flexShrink: 0,
                  transform:
                    "translate(var(--floating-window-x, 0px), var(--floating-window-y, 0px))",
                  transition: "var(--floating-window-transform)",
                },
                children: (0, F.jsx)(Be.Provider, { value: this, children: this.props.children }),
              }),
              (0, F.jsx)("div", {
                style: { height: 0, flexGrow: `var(--floating-window-bottom, ${p})` },
              }),
            ],
          }),
          (0, F.jsx)("div", {
            style: { width: 0, flexGrow: `var(--floating-window-right, ${h})` },
          }),
        ],
      });
    }
    hasMoved = !1;
    dragStartRect = null;
    getConstraintsRect = () => {
      let e = this.containerRef.current;
      return e ? e.getBoundingClientRect() : null;
    };
    getWindowRect = () => {
      let e = this.getConstraintsRect();
      if (!e) return null;
      let o = this.contentWrapperRef.current;
      if (!o) return null;
      let n = o.getBoundingClientRect();
      return { x: n.left - e.x, y: n.top - e.y, width: n.width, height: n.height };
    };
    onDragStart = (e) => {
      ((this.dragStartRect = this.getWindowRect()), (this.hasMoved = !1));
    };
    onDrag = (e) => {
      if (!this.dragStartRect) return;
      let o = this.getWindowRect();
      if (!o) return;
      let { width: n, height: r } = o;
      (!this.hasMoved && e.offset.x === 0 && e.offset.y === 0) ||
        ((this.hasMoved = !0),
        this.setRect(
          { ...ye.add(e.offset, this.dragStartRect), width: n, height: r },
          { rubberBandingEnabled: !0, snapToEdges: !0, fixedTop: !1 }
        ));
    };
    onDragEnd = (e) => {
      this.dragStartRect &&
        ((this.dragStartRect = null),
        this.hasMoved &&
          (this.setFloatingWindowProperties({
            x: 0,
            y: 0,
            transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
          }),
          this.props.onDragEnd?.()));
    };
    setPosition(e, { snapToEdges: o }) {
      let n = this.getConstraintsRect(),
        r = this.getWindowRect();
      if (!r || !n) return;
      let i = ye.subtract(e, n);
      this.setRect(
        { ...i, width: r.width, height: r.height },
        { rubberBandingEnabled: !1, fixedTop: !0, snapToEdges: o }
      );
    }
    setRect(e, { rubberBandingEnabled: o, snapToEdges: n, fixedTop: r }) {
      let i = this.getConstraintsRect();
      if (!i) return;
      let { minX: a, minY: s, maxX: f, maxY: c } = Xo(e, i),
        m = e.x,
        d = e.y;
      if (n) {
        let u = Math.abs(m - a),
          w = Math.abs(m - f),
          v = Math.abs(d - s),
          y = Math.abs(d - c);
        (u < 16 ? (m = a) : w < 16 && (m = f), v < 16 ? (d = s) : y < 16 && (d = c));
      }
      let p = 0,
        x = 0;
      (m <= a ? ((m = 0), (p = e.x - a)) : m >= f && (p = e.x - f),
        d < s ? ((d = s), (x = e.y - s)) : d >= c && (x = e.y - c));
      let h = 0,
        l = 0;
      o && ((h = p * Gt), (l = x * Gt));
      let P = nn({ ...e, x: m, y: d }, i);
      this.setFloatingWindowProperties({
        top: r ? 1 : P.top,
        bottom: r ? 0 : P.bottom,
        fixedTop: r ? P.top : void 0,
        right: P.right,
        left: P.left,
        x: h,
        y: l,
        transition: "",
      });
    }
    setResizeRect({ top: e, right: o, bottom: n, left: r }) {
      this.setFloatingWindowProperties({
        top: e,
        right: o,
        bottom: n,
        left: r,
        fixedTop: void 0,
        x: 0,
        y: 0,
        transition: "",
      });
    }
    persistCurrentTopOffset = () => {
      let e = this.getWindowRect();
      e && this.setFloatingWindowProperties({ fixedTop: e.y, top: 1, bottom: 0 });
    };
    hasPersistedTopOffset = () => {
      let e = this.containerRef.current?.style.getPropertyValue("--floating-window-fixed-top"),
        o = parseInt(e || "");
      return S(o) && o !== Le;
    };
    setFloatingWindowProperties(e) {
      let o = this.containerRef.current;
      if (!o) return;
      let n = {};
      (S(e.top) && (n["--floating-window-top"] = e.top.toString()),
        S(e.right) && (n["--floating-window-right"] = e.right.toString()),
        S(e.bottom) && (n["--floating-window-bottom"] = e.bottom.toString()),
        S(e.left) && (n["--floating-window-left"] = e.left.toString()),
        S(e.fixedTop)
          ? (n["--floating-window-fixed-top"] = `${e.fixedTop}px`)
          : (n["--floating-window-fixed-top"] = `${Le}px`),
        S(e.x) && (n["--floating-window-x"] = `${e.x}px`),
        S(e.y) && (n["--floating-window-y"] = `${e.y}px`),
        Y(e.transition) && (n["--floating-window-transform"] = e.transition));
      let r = Object.keys(n);
      for (let a of r) {
        let s = n[a];
        o.style.setProperty(a, s);
      }
      let { restorationKey: i } = this.props;
      if (i && _t(e, { strict: !1 })) {
        let a = {
            top: e.top,
            bottom: e.bottom,
            left: e.left,
            right: e.right,
            fixedTop: e.fixedTop,
          },
          s = JSON.stringify(a);
        localStorage.setItem(i, s);
      }
    }
  },
  Go = "top",
  Zo = "right",
  _o = "bottom",
  Jo = "left",
  Qo = "fixedTop",
  en = "x",
  tn = "y",
  on = "transition";
function _t(t, { strict: e } = { strict: !0 }) {
  if (
    !_e(t) ||
    (e && (en in t || tn in t || on in t)) ||
    !S(t[Go]) ||
    !S(t[Zo]) ||
    !S(t[_o]) ||
    !S(t[Jo])
  )
    return !1;
  let o = t[Qo];
  return S(o) || Je(o);
}
var Be = J.default.createContext(null);
Be.displayName = "ConstraintWindowContext";
var Jt = J.default.forwardRef(function (e, o) {
  let n = J.default.useContext(Be);
  return (0, F.jsx)(pe, {
    ref: o,
    ...e,
    className: T(e.className, Ut, Te),
    onDragStart: n?.onDragStart,
    onDrag: n?.onDrag || rt,
    onDragEnd: n?.onDragEnd,
    cursor: "grabbing",
  });
});
function nn(t, e) {
  let o = t.y,
    n = o + t.height,
    r = t.x,
    i = r + t.width,
    a = o,
    s = r,
    f = e.height - n,
    c = e.width - i;
  return { top: a, bottom: f, left: s, right: c };
}
var L = g(O(), 1);
var Qt = g(O(), 1),
  he = g(E(), 1),
  be = Qt.default.createContext(void 0);
be.displayName = "PropertiesScopeThemeContext";
function eo({ scope: t, children: e }) {
  return (0, he.jsx)(be.Provider, {
    value: t,
    children: (0, he.jsx)(Re, {
      mode: t,
      children: (0, he.jsx)(Re, { mode: "properties", children: e }),
    }),
  });
}
var Fe = g(O(), 1);
var Ve = g(O(), 1),
  to = Ve.default.createContext(!1),
  kr = to.Provider;
function oo() {
  return Ve.default.useContext(to);
}
var ce = Fe.default.createContext(void 0);
ce.displayName = "VariableProviderInfoContext";
function Ar(t = !0) {
  let e = G(),
    o = oo(),
    n = Fe.default.useContext(ce),
    r = ut(
      () => (!V(e) || o || !t ? null : e.stores.treeStore.variableProviderInfo),
      [o, t],
      "VariableProviderInfo"
    );
  return t ? (n !== void 0 ? n : r) : null;
}
function rn(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  return !e || !n
    ? { variable: void 0, providerId: n }
    : { variable: e.combined.get(n)?.get(o), providerId: n };
}
function Hr(t, e) {
  let o = rn(t, e);
  if (!e || t.providerId !== et) return o;
  let n = dt(e);
  if (!n) return o;
  let r = e.combined.get(n.providerId)?.get(n.variableId);
  if (!r || !ot(r)) return o;
  let i = r.itemVariables.find((a) => a.id === t.id);
  return !i || i.type === "divider"
    ? o
    : { variable: i, providerId: n.providerId, arrayVariableId: r.id };
}
function Kr(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  if (!(!e || !n)) return e.combined.get(n)?.get(o);
}
var xe = g(O(), 1),
  Ae = (0, xe.createContext)(!1);
Ae.displayName = "ShaderControlContext";
var no = Ae.Provider;
function ro() {
  return (0, xe.useContext)(Ae);
}
var M = g(O(), 1),
  so = g(E(), 1),
  He = (0, M.createContext)(() => () => {});
function zr(t, e) {
  let o = (0, M.useContext)(He),
    [n, r] = (0, M.useState)(!1);
  return (
    (0, M.useLayoutEffect)(
      () =>
        o((i) => {
          r(() =>
            t
              ? t.some((a) => i.variantOverrideKeys.has(a))
              : e
                ? e.some((a) => i.variantOverrideTraitTypes.has(a))
                : !1
          );
        }),
      [t, e, o]
    ),
    n
  );
}
function io() {
  let t = (0, M.useContext)(He),
    [e, o] = (0, M.useState)({
      variantOverrideKeys: new Set(),
      variantOverrideTraitTypes: new Set(),
    });
  return (
    (0, M.useLayoutEffect)(
      () =>
        t((n) => {
          o(n);
        }),
      [t, o]
    ),
    e
  );
}
function ao({ children: t, variantOverrideTraitTypes: e, variantOverrideKeys: o }) {
  let n = (0, M.useRef)(),
    r = (0, M.useMemo)(() => {
      let i = new Set();
      return {
        listeners: i,
        addListener: (a) => {
          i.add(a);
          let s = n.current;
          return (
            s && a(s),
            () => {
              i.delete(a);
            }
          );
        },
      };
    }, []);
  return (
    (0, M.useLayoutEffect)(() => {
      let i = { variantOverrideTraitTypes: e, variantOverrideKeys: o };
      ((n.current = i), r.listeners.forEach((a) => a(i)));
    }, [r, o, e]),
    (0, so.jsx)(He.Provider, { value: r.addListener, children: t })
  );
}
var lo = "pvjhuxd",
  co = "pcpv5lz",
  uo = "p1awmd8";
var fo = g(O(), 1),
  Q = (0, fo.createContext)(null);
Q.displayName = "PopoutContext";
var A = g(O(), 1);
function Ke(t) {
  switch (t) {
    case "Confirmation":
    case "DeprecatedDrafts":
    case "ImageCrop":
    case "ImageFocalPoint":
    case "QuickActions":
    case "UpsellEnterprise":
    case "UpsellFeature":
      return !0;
    default:
      return !1;
  }
}
function Jr(t) {
  return t === "ConfirmationPlugin" ? 26 : Ke(t) ? 25 : 22;
}
function sn() {
  let t = it(),
    e = ie(() => {
      let { activePlugin: n } = t.stores.pluginStore;
      return n ? n.modeHandlers.mode !== "canvas" : !1;
    }, []),
    o = ie(() => Ke(t.stores.modalStore.active.type), []);
  return e || o;
}
function ln() {
  return !1;
}
var po = Xe() ? ln : sn;
var oe = class {
  #t = [];
  #e = -1;
  get stack() {
    return this.#t;
  }
  get currentStackIndex() {
    return this.#e;
  }
  triggerRender;
  willOpen;
  willPush;
  willPop;
  constructor({ triggerRender: e, willOpen: o, willPush: n, willPop: r }) {
    ((this.triggerRender = e), (this.willOpen = o), (this.willPush = n), (this.willPop = r));
  }
  present = (
    e,
    o,
    {
      parent: n,
      triggerRef: r,
      displayDivider: i,
      title: a,
      className: s,
      onDismiss: f,
      onPresent: c,
      toolbarAction: m,
      autoFocusInside: d,
    }
  ) => {
    if (e && this.isPresenting(e, { atIndex: 0 })) {
      this.#e === 0 ? this.close() : (this.setStackIndex(0), this.willOpen?.(r?.current));
      return;
    }
    if (n) {
      let p = this.indexForItem(n);
      if (p === -1) return null;
      ((this.#t = this.#t.slice(0, p + 1)), c?.(), this.willPush?.());
    } else (this.setStackIndex(-1), c?.(), this.willOpen?.(r?.current));
    (this.#t.push({
      id: e,
      timestamp: Date.now(),
      element: o,
      triggerRef: r,
      displayDivider: i,
      title: a,
      className: s,
      onDismiss: f,
      onPresent: c,
      dismissed: !1,
      toolbarAction: m,
      autoFocusInside: d,
    }),
      this.setStackIndex(this.#e + 1));
  };
  updatePopout = (e, o, n, r) => {
    if (this.isClosed()) return;
    let i = this.indexForItem(e);
    if (i === -1) return;
    let a = this.#t[i];
    if (!a) return;
    let s = a.element,
      f = a.title,
      c = a.autoFocusInside;
    (s === o && f === n && c === r) ||
      ((a.element = o),
      (a.title = n),
      (a.autoFocusInside = r),
      i <= this.#e && requestAnimationFrame(this.triggerRender));
  };
  isPresenting = (e, o) => {
    if (this.isClosed()) return !1;
    let n = this.indexForItem(e);
    return !(n < 0 || n > this.#e || (o && o.atIndex !== n));
  };
  isOpen = () => this.#e > -1;
  isClosed = () => !this.isOpen();
  close = () => {
    this.setStackIndex(-1);
  };
  #o = !1;
  get isSuspended() {
    return this.#o;
  }
  set isSuspended(e) {
    this.#o !== e && ((this.#o = e), this.triggerRender());
  }
  dismiss = (e) => {
    let o = this.indexForItem(e);
    o !== -1 && this.#e >= o && (this.willPop?.(), this.setStackIndex(o - 1));
  };
  goBack = (e = !1) => {
    let o = this.stack[0];
    if ((this.willPop?.(), this.setStackIndex(this.#e - 1), e && this.currentStackIndex === -1)) {
      let n = o?.triggerRef?.current;
      n instanceof HTMLElement && n.focus();
    }
  };
  indexForItem = (e) => this.#t.findIndex((o) => o.id === e);
  setStackIndex = (e) => {
    let o = Math.max(-1, e);
    this.#e !== o &&
      (this.#t.forEach((n, r) => {
        r <= e || n.dismissed || ((n.dismissed = !0), n.onDismiss?.());
      }),
      (this.#e = o),
      o < 0 && (this.#t = []),
      this.triggerRender(),
      this.listeners.forEach((n) => n()));
  };
  listeners = new Set();
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.delete(e);
  }
  registeredPopouts = {};
  shouldPresentPopoutIds = new Set();
  registerPopout = (e, o) => {
    ((this.registeredPopouts[e] = o),
      this.shouldPresentPopoutIds.has(e) && (o(), this.shouldPresentPopoutIds.delete(e)));
  };
  deregisterPopout = (e) => {
    delete this.registeredPopouts[e];
    let o = this.indexForItem(e);
    o === -1 || this.#e < o || this.setStackIndex(o - 1);
  };
  popoutIsRegistered = (e) => e in this.registeredPopouts;
  presentPopout = (e) => {
    if (this.isPresenting(e, { atIndex: 0 })) return;
    let o = this.registeredPopouts[e];
    de(o) ? o() : this.presentPopoutOnRegistration(e);
  };
  presentPopoutOnRegistration = (e) => {
    this.shouldPresentPopoutIds.has(e) ||
      (this.shouldPresentPopoutIds.add(e),
      setTimeout(() => {
        this.shouldPresentPopoutIds.delete(e);
      }, 100));
  };
};
var mo = "pjkind9",
  vo = "s1l0qpj8",
  go = "cftx8i9";
var ne = g(O(), 1),
  $e = (0, ne.createContext)(!1);
$e.displayName = "IsInVariableModalContext";
var ui = $e.Provider;
function ho() {
  return (0, ne.useContext)($e);
}
var je = (0, ne.createContext)(!0);
je.displayName = "VariableDefaultValueAppliesContext";
var fi = je.Provider;
function pi() {
  return (0, ne.useContext)(je);
}
function mi(t, e) {
  return !t || !nt(t) ? !0 : tt(t, e);
}
var bo = g(O(), 1);
function Pe(t) {
  let e = G(),
    o = ie(
      () => V(e) && e.stores.chromeStore.overlayStack.at(-1)?.type === "componentRichTextContent",
      [e]
    );
  (0, bo.useLayoutEffect)(() => {
    t.isSuspended = o;
  }, [t, o]);
}
var ee = g(E(), 1),
  dn = { x: 10, y: 0 };
function xo({
  navigationRef: t,
  anchorRef: e,
  children: o,
  attachTo: n = "right",
  alignment: r = "center",
  offset: i = dn,
  within: a,
  onKeydown: s,
  onCopy: f,
  fallbackToModalAppearance: c,
  showArrow: m = !1,
  themeBehavior: d,
}) {
  let p = G(),
    x = A.default.useRef(s);
  x.current = s;
  let h = po(),
    l = ho(),
    P = l ? A.default.Fragment : Ct,
    [u, w] = A.default.useState(0),
    [v] = A.default.useState(() => new oe({ triggerRender: () => w((b) => b + 1) }));
  Pe(v);
  let y = v.isOpen(),
    W = v.isSuspended,
    N = A.default.useCallback(
      (b) => {
        if ((V(p) && p.stores.mouseStore.setModifiers(b.nativeEvent), b.key === "Escape")) {
          if (v.isSuspended) return;
          (v.goBack(!0), b.stopPropagation());
        }
        x.current?.(b);
      },
      [v]
    ),
    H = A.default.useCallback((b) => {
      V(p) && p.stores.mouseStore.setModifiers(b.nativeEvent);
    }, []);
  ((0, A.useImperativeHandle)(t, () => v, [v]),
    A.default.useEffect(() => {
      if (!(!y || !f))
        return (
          document.addEventListener("copy", f),
          document.addEventListener("cut", f),
          () => {
            (document.removeEventListener("copy", f), document.removeEventListener("cut", f));
          }
        );
    }, [y, f]));
  let C = A.default.useMemo(() => ({ ...i }), [u, i]);
  return (0, ee.jsxs)(Q.Provider, {
    value: v,
    children: [
      o,
      y &&
        (0, ee.jsx)(P, {
          children: (0, ee.jsx)(Rt, {
            anchor: e.current,
            alignSelf: r,
            attachTo: n,
            offset: C,
            within: a,
            onClose: () => {
              v.isSuspended || v.close();
            },
            className: T(mo, W && vo),
            onKeyDown: N,
            onKeyUp: H,
            focusTrapEnabled: !h && !W,
            showArrow: m,
            arrow: m ? { anchor: e.current } : void 0,
            fallbackToModalAppearance: c,
            themeBehavior: l ? "none" : d,
            backdropEnabled: !W,
            backdropTintEnabled: !W,
            hidden: W,
            children: (0, ee.jsx)("div", {
              className: T(go),
              children: (0, ee.jsx)(fe, {
                stack: v.stack,
                currentIndex: v.currentStackIndex,
                onBack: v.goBack,
                onClose: v.close,
              }),
            }),
          }),
        }),
    ],
  });
}
var B = g(E(), 1),
  wo = "data-is-popout-button",
  un = "data-is-field-settings-popout",
  Io = `[${wo}]`,
  fn = `${Io}:not([${un}])`;
function pn({
  popout: t,
  navigationTitle: e,
  navigationClassName: o,
  toolbarAction: n,
  id: r,
  enabled: i = !0,
  displayDivider: a,
  onBeforePresent: s = () => !0,
  onPresent: f = () => {},
  onDismiss: c = () => {},
  ref: m,
  autoFocusInside: d,
  displayInPopover: p,
}) {
  let x = vn(r),
    h = L.default.useRef(null),
    l = m ?? h,
    P = L.default.useContext(ue),
    u = L.default.useContext(Q),
    [w, v] = L.default.useState(!1),
    y = wt(),
    W = bt(),
    N = io(),
    H = L.default.useContext(ce),
    C = Tt(p),
    b = ro(),
    k = vt(),
    U = L.default.useContext(be),
    z = Po(
      (0, B.jsx)(ce.Provider, {
        value: H,
        children: (0, B.jsx)(It.Provider, {
          value: C,
          children: (0, B.jsx)(ht.Provider, {
            value: W,
            children: (0, B.jsx)(yt.Provider, {
              value: y,
              children: (0, B.jsx)(ao, {
                variantOverrideKeys: N.variantOverrideKeys,
                variantOverrideTraitTypes: N.variantOverrideTraitTypes,
                children: (0, B.jsx)(no, {
                  value: b,
                  children: k === "properties" ? (0, B.jsx)(eo, { scope: U, children: t }) : t,
                }),
              }),
            }),
          }),
        }),
      })
    ),
    X = Po(e);
  u?.updatePopout(x, z, X, d);
  let Z = ae(c),
    K = ae(f),
    R = ae(() => {
      if (u) {
        if (!i || !s()) {
          u.close();
          return;
        }
        u.present(x, z, {
          parent: P,
          triggerRef: l,
          displayDivider: a,
          title: X,
          toolbarAction: n,
          className: o,
          onDismiss: Z,
          onPresent: K,
          autoFocusInside: d,
        });
      }
    }),
    $ = ae(() => {
      u?.dismiss(x);
    });
  return (
    L.default.useEffect(() => {
      if (!i || !u) return;
      let _ = () => {
        Ye.isTest || v(u.isPresenting(x));
      };
      return (
        u.addListener(_),
        u.registerPopout(x, R),
        () => {
          (u.removeListener(_), u.deregisterPopout(x));
        }
      );
    }, [x, i, u]),
    { present: R, dismiss: $, isPresenting: w, ref: l }
  );
}
function Po(t) {
  let e = L.default.useRef(t);
  return (Ze(t, e.current) || (e.current = t), e.current);
}
function Gi({
  popoverNavigationRef: t,
  displayInPopover: e,
  popoverAttachmentEdge: o,
  popoverAlignment: n,
  fallbackToModalAppearance: r,
  popoverOffset: i,
  showArrow: a,
  onPopoverKeydown: s,
  onPopoverCopy: f,
  ...c
}) {
  let m = L.default.useRef(null),
    d = (0, B.jsx)(mn, { displayInPopover: e, ...c, ref: m });
  return e
    ? (0, B.jsx)(xo, {
        navigationRef: t,
        anchorRef: m,
        attachTo: o,
        alignment: n,
        onKeydown: s,
        onCopy: f,
        offset: i,
        fallbackToModalAppearance: r,
        showArrow: a,
        children: d,
      })
    : d;
}
var mn = L.default.forwardRef(function (
  {
    id: e,
    large: o,
    popout: n,
    displayDivider: r,
    navigationTitle: i,
    navigationClassName: a,
    toolbarAction: s,
    className: f,
    onKeyDown: c,
    onClick: m,
    tabIndex: d = 0,
    enabled: p = !0,
    useFrescoButton: x = !1,
    withoutStyles: h = !1,
    frescoButtonProps: l = {},
    onBeforePresent: P,
    onPresent: u,
    onDismiss: w,
    autoFocusInside: v,
    togglePopoutEnabled: y = !1,
    displayInPopover: W,
    ...N
  },
  H
) {
  let {
      present: C,
      dismiss: b,
      isPresenting: k,
    } = pn({
      popout: n,
      id: e,
      displayDivider: r,
      navigationTitle: i,
      navigationClassName: a,
      toolbarAction: s,
      enabled: p,
      onBeforePresent: P,
      onPresent: u,
      onDismiss: w,
      ref: H,
      autoFocusInside: v,
      displayInPopover: W,
    }),
    U = (K) => {
      switch (K.key) {
        case "Enter":
        case " ":
          (C(), K.preventDefault());
          break;
        case "Escape":
          (K.currentTarget.blur(), b());
          break;
      }
    },
    z = p === !1,
    X = {
      role: "button",
      ref: H,
      tabIndex: z ? void 0 : d,
      "aria-selected": k ? "true" : "false",
      className: T(f, !x && !h && T(lo, z && co, o && uo)),
      onKeyDown: yo(U, c),
      [wo]: !0,
      ...N,
    },
    Z = y && k ? m : yo(C, m);
  return x
    ? (0, B.jsx)(se, { enabled: p, ...l, ...X, onClick: Z })
    : (0, B.jsx)("div", { id: e, ...X, onClick: Z });
});
function ze(t) {
  return t instanceof HTMLElement ? !!t.closest(Io) : !1;
}
function Zi(t) {
  return t.querySelector(fn);
}
function _i(t) {
  return document.getElementById(t);
}
function vn(t) {
  let e = L.default.useRef(t);
  return (t && e.current !== t ? (e.current = t) : e.current || (e.current = Qe()), e.current);
}
function yo(t, e) {
  return e
    ? (o) => {
        (t(o), e(o));
      }
    : t;
}
var To = T(gt, "wrgelve"),
  Ro = "w1ufy8me";
var j = g(O(), 1);
var Eo = g(E(), 1),
  Co = "resize-zone",
  sa = j.default.memo(
    ({
      side: t,
      minSize: e,
      defaultSize: o,
      maxSize: n,
      getSize: r,
      setSize: i,
      onResizeStart: a,
      onResizeEnd: s,
    }) => {
      let f = ft("paneEdgeDoubleClickReset"),
        [c, m] = j.default.useState("ew-resize"),
        d = j.default.useCallback(
          (u) => {
            let w = de(n) ? n() : n,
              v = Pn(u, e, w, t);
            m((y) => (y === v ? y : v));
          },
          [e, n, t]
        );
      j.default.useEffect(() => {
        requestAnimationFrame(() => {
          d(r());
        });
      }, []);
      let p = j.default.useRef(),
        x = j.default.useCallback(() => {
          ((p.current = r()), a && a());
        }, [r, a]),
        h = j.default.useCallback(
          (u) => {
            if (p.current === void 0) return;
            let w = t === "left" ? -1 : 1,
              v = t === "top" ? u.offset.y : u.offset.x,
              y = p.current + v * w;
            (Math.abs(y - o) < 10 && (y = o), i(y), d(r()));
          },
          [t, o, i, d, r]
        ),
        l = j.default.useCallback(() => {
          ((p.current = void 0), s && s());
        }, [s]),
        P = j.default.useCallback(() => {
          (i(o), d(r()), s?.());
        }, [o, i, d, r, s]);
      return (0, Eo.jsx)(pe, {
        onDragStart: x,
        onDrag: h,
        onDragEnd: l,
        onDoubleClick: f ? P : void 0,
        cursor: c,
        className: Co,
        style: {
          cursor: c,
          position: "absolute",
          top: hn(t),
          bottom: 0,
          right: xn(t),
          left: bn(t),
          width: t === "top" ? void 0 : 6,
          height: t === "top" ? 6 : void 0,
          zIndex: 27,
          transform: "translate3d(0, 0, 0)",
          opacity: 0.5,
        },
      });
    }
  );
function hn(t) {
  return t === "top" ? -3 : 0;
}
function bn(t) {
  switch (t) {
    case "left":
      return -3;
    case "top":
      return 0;
  }
}
function xn(t) {
  switch (t) {
    case "right":
      return -3;
    case "top":
      return 0;
  }
}
function qe(t) {
  return t instanceof HTMLDivElement && t.classList.contains(Co);
}
function Pn(t, e, o, n) {
  if (n === "top")
    switch (t) {
      case e:
        return "s-resize";
      case o:
        return "n-resize";
      default:
        return "ns-resize";
    }
  switch (t) {
    case e:
      return n === "right" ? "e-resize" : "w-resize";
    case o:
      return n === "right" ? "w-resize" : "e-resize";
    default:
      return "ew-resize";
  }
}
var yn = "data-is-project-bar",
  ca = `[${yn}]`,
  wn = "data-is-left-panel",
  da = `[${wn}]`,
  In = "data-is-right-panel",
  ko = `[${In}]`,
  Tn = "data-is-code-editor",
  Oo = `[${Tn}]`,
  Rn = "data-is-analytics",
  Mo = `[${Rn}]`,
  Cn = "data-is-collection-table",
  So = `[${Cn}]`,
  En = "data-is-collection-left-panel",
  Wo = `[${En}]`,
  kn = "data-is-agent-chat-panel",
  ua = `[${kn}]`,
  On = "data-is-editor-overlay",
  Do = `[${On}]`;
var re = g(E(), 1),
  Lo = "data-is-popover-window",
  Bo = `[${Lo}="true"]`;
function Mn(t, e) {
  return t.closest(Do) ? "100%" : e.left < window.innerWidth - e.right ? "0%" : "100%";
}
var Ue = class {
  navigation;
  floatingWindowRef = q.default.createRef();
  initialWindowTopOffset = "0px";
  initialWindowLeftOffset = "100%";
  constraintBy;
  verticalConstraintBy;
  getWindowPosition;
  configuredInitialLeftOffset;
  getOutsidePointerDownBehavior;
  repositionWhenOpen;
  fitContentWidth;
  constructor({
    constraintBy: e = "canvas",
    verticalConstraintBy: o = e,
    getWindowPosition: n = Sn,
    initialLeftOffset: r,
    getOutsidePointerDownBehavior: i = () => "default",
    repositionWhenOpen: a = !0,
    fitContentWidth: s = !1,
  } = {}) {
    ((this.constraintBy = e),
      (this.verticalConstraintBy = o),
      (this.getWindowPosition = n),
      (this.configuredInitialLeftOffset = r),
      (this.getOutsidePointerDownBehavior = i),
      (this.repositionWhenOpen = a),
      (this.fitContentWidth = s),
      (this.navigation = new oe({
        triggerRender: this.rerender,
        willOpen: this.positionWindowNearElement,
        willPush: this.persistCurrentTopOffset,
        willPop: this.persistCurrentTopOffset,
      })));
  }
  positionWindowNearElement = (e) => {
    if (!(e instanceof HTMLElement)) return;
    let o = this.floatingWindowRef.current,
      n = e.getBoundingClientRect(),
      r = this.getWindowPosition(e, n);
    if (o) {
      if (!this.repositionWhenOpen) return;
      o.setPosition(r, { snapToEdges: !1 });
    } else
      ((this.initialWindowTopOffset = `${r.y}px`),
        (this.initialWindowLeftOffset = this.configuredInitialLeftOffset ?? Mn(e, n)));
  };
  persistCurrentTopOffset = () => {
    let e = this.floatingWindowRef.current;
    e && (e.hasPersistedTopOffset() || e.persistCurrentTopOffset());
  };
  isOpen = () => this.navigation.isOpen();
  close = () => {
    this.navigation.close();
  };
  _rerender;
  rerender = () => this._rerender?.();
  navigationBarWrapper = (e) => (0, re.jsx)(Jt, { children: e });
  Component = q.default.memo(
    ({
      zIndex: e,
      visible: o,
      rightInsetOverride: n,
      requiredContentWidth: r,
      initialTopOffset: i,
      onPointerDownCapture: a,
    }) => {
      let s = G();
      Pe(this.navigation);
      let f = kt();
      (0, q.useEffect)(
        () => (
          (this._rerender = f),
          () => {
            this._rerender = void 0;
          }
        ),
        [f]
      );
      let c = this.navigation.isOpen();
      q.default.useEffect(() => {
        if (!c) return;
        let l = !1,
          P = !1,
          u = (v) => {
            if (this.navigation.isSuspended) return;
            l = !0;
            let y = this.getOutsidePointerDownBehavior(v.target);
            ((P = y === "keep-open"), y === "close" && this.closeIfPointerDownOutside(v));
          },
          w = (v) => {
            if (!this.navigation.isSuspended && l) {
              if (P) {
                P = !1;
                return;
              }
              this.closeIfClickedOutside(v);
            }
          };
        return (
          document.addEventListener("mousedown", u, { capture: !0 }),
          document.addEventListener("click", w),
          () => {
            (document.removeEventListener("mousedown", u, { capture: !0 }),
              document.removeEventListener("click", w));
          }
        );
      }, [c]);
      let m = (0, q.useCallback)((l) => {
          if (
            (V(s) && s.stores.mouseStore.setModifiers(l.nativeEvent),
            !l.defaultPrevented && l.key === "Escape")
          ) {
            if (this.navigation.isSuspended) return;
            (this.navigation.goBack(!0), l.stopPropagation());
          }
        }, []),
        d = (0, q.useCallback)((l) => {
          V(s) && s.stores.mouseStore.setModifiers(l.nativeEvent);
        }, []);
      if (!c) return null;
      let p = this.navigation.stack[this.navigation.currentStackIndex];
      if (!p) return null;
      let x = this.navigation.isSuspended,
        h = Y(p.title) ? p.title : void 0;
      return (0, re.jsx)(ge, {
        ref: this.floatingWindowRef,
        zIndex: e,
        visible: o && !x,
        rightInsetOverride: n,
        requiredContentWidth: r,
        onPointerDownCapture: a,
        initialTopOffset: i ?? this.initialWindowTopOffset,
        initialLeftOffset: this.initialWindowLeftOffset,
        constraintBy: this.constraintBy,
        verticalConstraintBy: this.verticalConstraintBy,
        children: (0, re.jsx)("div", {
          role: "dialog",
          "aria-label": h,
          className: T(
            To,
            this.fitContentWidth && Ro,
            this.navigation.stack[this.navigation.currentStackIndex]?.className
          ),
          onKeyDown: m,
          onKeyUp: d,
          onMouseUp: (l) => {
            V(s) && s.stores.canvasMouseTarget.handleMouseUp(l);
          },
          tabIndex: 0,
          [Lo]: !0,
          children: (0, re.jsx)(Q.Provider, {
            value: this.navigation,
            children: (0, re.jsx)(fe, {
              stack: this.navigation.stack,
              currentIndex: this.navigation.currentStackIndex,
              onBack: this.navigation.goBack,
              onClose: this.navigation.close,
              renderNavigationBarWrapper: this.navigationBarWrapper,
            }),
          }),
        }),
      });
    }
  );
  closeIfClickedOutside = ({ target: e }) => {
    qe(e) || ze(e) || (Wn(e) && (No(), this.navigation.close()));
  };
  closeIfPointerDownOutside = ({ target: e }) => {
    qe(e) ||
      ze(e) ||
      (e instanceof Element && e.closest(Bo)) ||
      Et(e) ||
      (No(), this.navigation.close());
  };
};
function No() {
  let t = document.activeElement;
  t instanceof HTMLElement && t.closest(Bo) && t.blur();
}
function Sn(t, e) {
  return { x: e.left, y: e.top - 9 };
}
function Wn(t) {
  return t instanceof HTMLElement
    ? !!t.closest(ko) || !!t.closest(Oo) || !!t.closest(Mo) || !!t.closest(Wo) || !!t.closest(So)
    : !1;
}
var Ea = new Ue();
export {
  Mt as a,
  At as b,
  De as c,
  Ht as d,
  An as e,
  ue as f,
  fe as g,
  $o as h,
  _n as i,
  eo as j,
  kr as k,
  oo as l,
  ce as m,
  Ar as n,
  rn as o,
  Hr as p,
  Kr as q,
  no as r,
  ro as s,
  zr as t,
  ao as u,
  lo as v,
  Q as w,
  Jr as x,
  po as y,
  oe as z,
  ui as A,
  ho as B,
  fi as C,
  pi as D,
  mi as E,
  xo as F,
  wo as G,
  un as H,
  pn as I,
  Gi as J,
  ze as K,
  Zi as L,
  _i as M,
  pe as N,
  lr as O,
  ge as P,
  Jt as Q,
  sa as R,
  yn as S,
  ca as T,
  wn as U,
  da as V,
  In as W,
  Tn as X,
  Rn as Y,
  Cn as Z,
  So as _,
  En as $,
  kn as aa,
  ua as ba,
  On as ca,
  Bo as da,
  Ue as ea,
  Ea as fa,
};
//# sourceMappingURL=chunk-LAU6TBUQ.mjs.map
